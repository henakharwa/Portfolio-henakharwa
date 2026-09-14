import { timeline } from '../data/portfolio'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <header>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">Work &amp; Education</h1>
        </header>
      </Reveal>

      {/* Vertical timeline: a center line (full-width on mobile it sits at the
          far left) with alternating cards on desktop, connected by a node
          per entry — green + glowing for an active role, muted for a past
          one. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[6px] top-0 w-[2px] bg-[linear-gradient(transparent_0%,rgba(99,102,241,0.5)_10%,rgba(99,102,241,0.5)_90%,transparent_100%)] md:left-1/2 md:-translate-x-1/2"
        />

        <div role="list" className="flex flex-col gap-8 md:gap-12">
          {timeline.map((entry, i) => {
            const isActive = entry.status === 'ACTIVE'
            const onLeft = i % 2 === 0

            return (
              <Reveal key={entry.id} delay={i * 80} role="listitem">
                <div
                  className={`relative md:flex md:items-center md:justify-between ${
                    onLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-6 z-10 rounded-full border-[3px] border-abyss md:left-1/2 md:-translate-x-1/2 ${
                      isActive
                        ? 'h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_10px_rgba(16,185,129,0.6),0_0_5px_rgba(16,185,129,0.5)]'
                        : 'h-3 w-3 bg-slate-600'
                    }`}
                  />

                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className={`ml-6 md:ml-0 md:w-[calc(50%-3rem)] ${
                      onLeft ? 'md:pl-0 md:text-left' : 'md:pr-0 md:text-right'
                    }`}
                  >
                    <GlassPanel
                      hover
                      className={isActive ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : ''}
                    >
                      <div className={`flex flex-col gap-1 ${onLeft ? '' : 'md:items-end'}`}>
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="animate-pulse rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">
                              ACTIVE
                            </span>
                          )}
                          <span className="font-mono text-xs text-accent">{entry.period}</span>
                        </div>
                        <p className="text-lg font-semibold text-ink">{entry.title}</p>
                        <p className="text-sm text-muted">
                          {entry.org}
                          {entry.location ? ` · ${entry.location}` : ''}
                        </p>
                      </div>
                      <p className="mt-3 border-t border-white/5 pt-3 text-sm leading-relaxed text-muted">
                        {entry.description}
                      </p>
                    </GlassPanel>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
