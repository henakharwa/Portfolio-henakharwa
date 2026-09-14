import { useEffect, useState, type FormEvent } from 'react'
import { Mail, MapPin, Send, AlertTriangle } from 'lucide-react'
import { formspreeEndpoint, isContactFormConfigured } from '../lib/contactForm'
import { profile, socialLinks } from '../data/portfolio'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // After a successful send, show the acknowledgement for 10s, then bring back the empty form.
  useEffect(() => {
    if (status !== 'sent') return
    const timer = setTimeout(() => setStatus('idle'), 5000)
    return () => clearTimeout(timer)
  }, [status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formspreeEndpoint) return

    setStatus('sending')
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Formspree request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <Reveal>
      <header className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">Get in touch</h1>
          <p className="mt-3 text-muted">
            Have a role, project, or question in mind? Send a message and I'll get back to you.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-mono text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-ink">
            <Mail size={15} /> {profile.email}
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={15} /> {profile.location}
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-mono text-xs text-muted hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>
      </Reveal>

      <Reveal delay={100}>
      <GlassPanel>
        {!isContactFormConfigured ? (
          <div className="flex flex-col items-start gap-3 text-sm text-muted">
            <p className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <AlertTriangle size={14} /> contact form not configured
            </p>
            <p>
              This form submits via Formspree, but no form is connected yet. Add your form ID to{' '}
              <code className="font-mono text-accent-2">.env</code> — see{' '}
              <code className="font-mono text-accent-2">PORTFOLIO_SETUP.md</code> for the 2-minute
              setup. Until then, reach out at{' '}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
              .
            </p>
          </div>
        ) : status === 'sent' ? (
          <p className="text-sm text-emerald-400">
            Message sent — thanks for reaching out, I'll reply soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-mono text-xs text-muted">
                name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-mono text-xs text-muted">
                email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-mono text-xs text-muted">
                message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-400">Something went wrong — please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <Send size={15} />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </GlassPanel>
      </Reveal>
    </div>
  )
}
