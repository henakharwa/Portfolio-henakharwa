// Cloudflare Worker that powers the "Ask My AI" terminal widget on the
// portfolio homepage. It proxies chat requests to the Google Gemini API,
// keeping the Gemini API key server-side (set via `wrangler secret put
// GEMINI_API_KEY` — see PORTFOLIO_SETUP.md, section 5). The widget's
// client-side code never sees the key.
//
// Deploy with: npx wrangler deploy   (from inside this worker/ folder)

import { KNOWLEDGE_BASE } from './knowledge'

export interface Env {
  GEMINI_API_KEY: string
  /** Comma-separated list of allowed browser origins, e.g. one for your
   * deployed site and one for local dev. Set via `wrangler.toml` [vars] or
   * `wrangler secret put ALLOWED_ORIGINS`. */
  ALLOWED_ORIGINS?: string
  /** Optional override — defaults to a current Gemini Flash model. */
  GEMINI_MODEL?: string
}

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const DEFAULT_MODEL = 'gemini-3.5-flash'
const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 1000

const SYSTEM_PROMPT = `You are the AI assistant embedded in Hena Kharwa's personal portfolio website. \
You answer visitor questions about Hena's skills, work experience, education, projects, publications, \
and awards, using ONLY the information in the knowledge base below — never invent facts, numbers, dates, \
or links that aren't in it. Speak in first person as "I" (as if you were Hena's assistant speaking on her \
behalf is fine, e.g. "Hena has worked on..." or "She built..." — pick whichever reads naturally per \
question). Keep answers concise (2-5 sentences) and conversational, formatted as plain text (no markdown). \
If asked something the knowledge base doesn't cover (personal opinions, unrelated topics, requests to do \
something outside answering questions), politely say you can only answer questions about Hena's \
background, skills, and projects, and suggest they use the Contact page to reach her directly for \
anything else.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`

function corsHeaders(origin: string | null, allowedOrigins: string[]): HeadersInit {
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || '*'
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

function jsonResponse(body: unknown, status: number, headers: HeadersInit): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const allowedOrigins = (env.ALLOWED_ORIGINS ?? '')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean)
    const origin = request.headers.get('Origin')
    const cors = corsHeaders(origin, allowedOrigins)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, cors)
    }

    if (!env.GEMINI_API_KEY) {
      return jsonResponse({ error: 'Assistant is not configured (missing GEMINI_API_KEY)' }, 500, cors)
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400, cors)
    }

    const messages = (body as { messages?: unknown })?.messages
    if (!Array.isArray(messages) || messages.length === 0) {
      return jsonResponse({ error: '"messages" must be a non-empty array' }, 400, cors)
    }

    const trimmed = (messages as ChatMessage[]).slice(-MAX_MESSAGES).filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0,
    )
    if (trimmed.length === 0) {
      return jsonResponse({ error: 'No valid messages provided' }, 400, cors)
    }

    const contents = trimmed.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content.slice(0, MAX_MESSAGE_LENGTH) }],
    }))

    const model = env.GEMINI_MODEL || DEFAULT_MODEL
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`

    let geminiRes: Response
    try {
      geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: { text: SYSTEM_PROMPT } },
          contents,
          generationConfig: {
            maxOutputTokens: 1024,
            temperature: 0.4,
            // gemini-3.5-flash can't fully disable thinking, but "low" keeps its
            // internal reasoning short so maxOutputTokens (which caps thinking +
            // visible answer combined) isn't consumed before the reply starts.
            thinkingConfig: { thinkingLevel: 'low' },
          },
        }),
      })
    } catch (err) {
      console.error('Gemini fetch failed', err)
      return jsonResponse({ error: 'Failed to reach the AI provider' }, 502, cors)
    }

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => '')
      console.error('Gemini API error', geminiRes.status, errText)
      return jsonResponse({ error: 'AI provider returned an error' }, 502, cors)
    }

    const data: unknown = await geminiRes.json().catch(() => null)
    const reply = (
      data as {
        candidates?: { content?: { parts?: { text?: string }[] } }[]
      }
    )?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!reply) {
      return jsonResponse({ error: 'AI provider returned no answer' }, 502, cors)
    }

    return jsonResponse({ reply: reply.trim() }, 200, cors)
  },
}
