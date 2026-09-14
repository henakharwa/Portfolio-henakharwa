import { useEffect, useRef, useState, type FormEvent } from 'react'
import { RotateCcw } from 'lucide-react'
import { askAssistant, isAiAssistantConfigured, type ChatMessage } from '../lib/aiAssistant'
import { profile } from '../data/portfolio'

const GREETING_LINES = [
  '# Welcome to Hena_AI_Core v1.0',
  '# Type a question below to query the portfolio data...',
]

const SUGGESTED_PROMPTS = [
  { label: 'Strongest project', question: "What's your strongest project?" },
  { label: 'Hackathon win', question: 'Tell me about the hackathon win' },
  { label: 'AI frameworks', question: 'What AI frameworks do you work with?' },
]

/**
 * Always-on, macOS-terminal-styled section embedded on the homepage.
 * Answers are grounded in Hena's real background via the Worker's knowledge
 * base (see worker/src/knowledge.ts) — this component only handles the UI
 * and the request/response cycle.
 */
export default function AiAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending])

  async function sendQuestion(question: string) {
    if (!question || sending) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: question }]
    setMessages(nextMessages)
    setInput('')
    setSending(true)

    try {
      const reply = await askAssistant(nextMessages)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      console.error(err)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection interrupted — please try again in a moment.' },
      ])
    } finally {
      setSending(false)
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await sendQuestion(input.trim())
  }

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#05070d] shadow-xl">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-panel px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-xs text-muted sm:text-sm">
          <span className="text-accent">{'>_'}</span> guest@{profile.handle}:~
        </p>
        <button
          type="button"
          onClick={() => setMessages([])}
          aria-label="Reset conversation"
          title="Reset conversation"
          className="text-muted transition-colors hover:text-ink"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Body */}
      <div ref={scrollRef} className="flex h-64 flex-col gap-3 overflow-y-auto px-4 py-4 sm:h-72">
        {GREETING_LINES.map((line) => (
          <p key={line} className="font-mono text-xs text-muted sm:text-sm">
            {line}
          </p>
        ))}

        {messages.length === 0 && isAiAssistantConfigured && (
          <div className="mt-auto flex flex-nowrap gap-1.5 overflow-x-auto pt-1">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt.label}
                type="button"
                onClick={() => sendQuestion(prompt.question)}
                disabled={sending}
                className="shrink-0 rounded-full border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-50 sm:text-xs"
              >
                {prompt.label}
              </button>
            ))}
          </div>
        )}

        {messages.length > 0 && <div className="my-1 border-t border-white/5" />}

        {messages.map((message, i) => (
          <p key={i} className="font-mono text-xs leading-relaxed sm:text-sm">
            {message.role === 'user' ? (
              <>
                <span className="text-accent">{'>'}</span>{' '}
                <span className="text-ink">{message.content}</span>
              </>
            ) : (
              <span className="text-muted">{message.content}</span>
            )}
          </p>
        ))}

        {sending && <p className="animate-pulse font-mono text-xs text-muted sm:text-sm">Thinking…</p>}
      </div>

      {/* Input */}
      <div className="border-t border-white/5 px-4 py-3">
        {isAiAssistantConfigured ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span aria-hidden="true" className="font-mono text-sm text-accent">
              {'>'}
            </span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={sending}
              placeholder="Ask about my skills, projects, or experience..."
              aria-label="Ask the AI assistant a question"
              className="flex-1 bg-transparent font-mono text-xs text-ink placeholder:text-muted/70 outline-none disabled:opacity-50 sm:text-sm"
            />
          </form>
        ) : (
          <p className="font-mono text-xs text-amber-400 sm:text-sm">
            assistant not configured — see PORTFOLIO_SETUP.md
          </p>
        )}
      </div>
    </div>
  )
}
