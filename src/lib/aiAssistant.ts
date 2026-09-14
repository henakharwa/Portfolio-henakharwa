// The AI assistant widget talks to a small Cloudflare Worker (see
// PORTFOLIO_SETUP.md) that proxies chat requests to Google Gemini. The Gemini
// API key lives only on the Worker — never in this client code — so it can't
// be read out of the browser.
//
// The app intentionally still works with no worker configured:
// isAiAssistantConfigured is false and the widget shows a setup notice
// instead of a broken chat.

const workerUrl: string | undefined = import.meta.env.VITE_AI_WORKER_URL

export const isAiAssistantConfigured = Boolean(workerUrl)

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

/**
 * Sends the full conversation so far (including the newest user message) to
 * the Worker and returns the assistant's reply text.
 */
export async function askAssistant(history: ChatMessage[]): Promise<string> {
  if (!workerUrl) {
    throw new Error('AI assistant is not configured')
  }

  const res = await fetch(workerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: history }),
  })

  if (!res.ok) {
    throw new Error(`Assistant request failed with status ${res.status}`)
  }

  const data: unknown = await res.json()
  if (
    typeof data !== 'object' ||
    data === null ||
    !('reply' in data) ||
    typeof (data as { reply: unknown }).reply !== 'string'
  ) {
    throw new Error('Malformed assistant response')
  }

  return (data as { reply: string }).reply
}
