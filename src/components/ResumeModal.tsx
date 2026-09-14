import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Download, ExternalLink, FileText, X } from 'lucide-react'

// In-page resume viewer opened by the hero's "view_resume()" button — stays
// on the same page/route (no navigation, no new tab). Modeled on the
// reference site's own resume preview: a centered dialog card over a
// blurred backdrop, an <iframe> for desktop PDF rendering (fit-to-width via
// the #view=FitH hash), and a "preview in browser / download" fallback for
// mobile, where inline PDF rendering in an iframe is unreliable.
//
// Rendered via a portal straight onto document.body rather than in place:
// this component can be mounted anywhere in the tree, and some ancestor
// (e.g. the scroll-reveal wrapper's `translate-y-0` on the hero section)
// may apply a non-"none" CSS transform. Any transform on an ancestor turns
// it into the containing block for descendant `position: fixed` elements
// per spec, which would shrink this overlay down to that ancestor's box
// instead of the real viewport. A portal sidesteps that entirely.

type ResumeModalProps = {
  resumeUrl: string
  fileName?: string
  onClose: () => void
}

export default function ResumeModal({ resumeUrl, fileName = 'resume.pdf', onClose }: ResumeModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-panel/95 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 p-4 backdrop-blur sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-accent/30 bg-accent/20 p-2">
              <FileText size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="font-mono text-lg font-bold text-ink sm:text-xl">Resume Preview</h2>
              <p className="mt-1 hidden text-xs text-muted sm:block">{fileName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download={fileName}
              className="hidden items-center gap-2 rounded-lg border border-accent/30 bg-accent/20 px-4 py-2 font-mono text-sm text-accent transition-all hover:bg-accent/30 sm:flex"
            >
              <Download size={16} />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg transition-colors hover:bg-white/10"
            >
              <X size={24} className="text-ink" />
            </button>
          </div>
        </div>

        {/* Desktop: inline PDF preview */}
        <div className="hidden h-[calc(100%-88px)] w-full bg-panel md:block">
          <iframe src={`${resumeUrl}#view=FitH`} title="Resume preview" className="h-full w-full" />
        </div>

        {/* Mobile: iframe PDF rendering is unreliable, so offer explicit actions instead */}
        <div className="flex h-[calc(100%-76px)] flex-col items-center justify-center bg-panel/95 p-6 md:hidden">
          <FileText size={72} className="mb-6 text-accent" />
          <h3 className="mb-2 text-center text-xl font-bold text-ink">Resume</h3>
          <p className="mb-6 text-center text-sm text-muted">{fileName}</p>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-accent px-6 py-4 text-white transition-all hover:opacity-90"
            >
              <ExternalLink size={20} />
              <span className="font-medium">Preview in Browser</span>
            </a>
            <a
              href={resumeUrl}
              download={fileName}
              className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-ink transition-all hover:bg-white/20"
            >
              <Download size={20} />
              <span className="font-medium">Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
