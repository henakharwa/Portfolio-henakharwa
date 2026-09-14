import type { LucideIcon } from 'lucide-react'

// Generated cover art for a project card: a dark gradient panel with a faint
// dot-grid texture (echoing the site's own particle background) and a large
// line-art icon representing the project's domain, in one of three accent
// tones. Self-contained/inline SVG + CSS — no external image hosting to
// break, unlike hotlinked stock photos.

type Tone = 'indigo' | 'cyan' | 'emerald'

const TONE_STYLES: Record<Tone, { iconClass: string; glow: string; dot: string }> = {
  indigo: {
    iconClass: 'text-accent',
    glow: 'shadow-[inset_0_0_80px_-20px_rgba(99,102,241,0.6)]',
    dot: 'rgba(99, 102, 241, 0.35)',
  },
  cyan: {
    iconClass: 'text-accent-2',
    glow: 'shadow-[inset_0_0_80px_-20px_rgba(34,211,238,0.6)]',
    dot: 'rgba(34, 211, 238, 0.35)',
  },
  emerald: {
    iconClass: 'text-emerald-400',
    glow: 'shadow-[inset_0_0_80px_-20px_rgba(16,185,129,0.6)]',
    dot: 'rgba(16, 185, 129, 0.35)',
  },
}

type ProjectCoverArtProps = {
  icon: LucideIcon
  tone?: Tone
  /** Real cover image (e.g. an architecture diagram) — used instead of the generated art when provided. */
  image?: string
}

export default function ProjectCoverArt({ icon: Icon, tone = 'indigo', image }: ProjectCoverArtProps) {
  const styles = TONE_STYLES[tone]

  if (image) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-panel-light">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-panel-light to-abyss ${styles.glow}`}
      style={{
        backgroundImage: `radial-gradient(${styles.dot} 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(2,6,23,0.55) 85%)',
        }}
      />
      <Icon
        size={56}
        strokeWidth={1.25}
        className={`relative ${styles.iconClass} opacity-90 transition-transform duration-500 ease-out group-hover:scale-110`}
      />
    </div>
  )
}
