import ReactMarkdown from 'react-markdown'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'

const placeholder = `
This page is wired up and ready — it's rendering markdown right now via
\`react-markdown\`.

To add a real post, either:

1. Drop a markdown file's contents into a variable here and render it, or
2. Fetch posts from a CMS/API and map over them.

Nothing to configure, just content to add.
`

export default function Blog() {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <header>
          <p className="font-mono text-sm text-accent">// blog</p>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Writing</h1>
        </header>
      </Reveal>

      <Reveal delay={80}>
        <GlassPanel className="markdown max-w-none text-sm leading-relaxed text-muted">
          <ReactMarkdown>{placeholder}</ReactMarkdown>
        </GlassPanel>
      </Reveal>
    </div>
  )
}
