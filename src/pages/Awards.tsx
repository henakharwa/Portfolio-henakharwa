import { Award as AwardIcon, BookOpen } from 'lucide-react'
import { awards, type Award } from '../data/portfolio'
import GlassPanel from '../components/GlassPanel'
import Reveal from '../components/Reveal'
import { GithubIcon } from '../components/icons'

type SectionGroup = {
  label: string
  categories: Award['category'][]
}

// Hackathon wins and publications are shown together so they can share one row.
const sectionGroups: SectionGroup[] = [
  { label: 'Academic', categories: ['Academic'] },
  { label: 'Professional', categories: ['Professional'] },
  { label: 'Hackathons & Publications', categories: ['Hackathon', 'Publication'] },
]

export default function Awards() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <header>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">Awards &amp; Achievements</h1>
        </header>
      </Reveal>

      {sectionGroups.map((group) => {
        const items = awards.filter((a) => group.categories.includes(a.category))
        if (items.length === 0) return null

        return (
          <Reveal key={group.label}>
            <section className="flex flex-col gap-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{group.label}</h2>
              <div
                className={`grid items-stretch gap-4 ${
                  items.length === 1 ? 'grid-cols-1 sm:max-w-xl' : 'sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {items.map((award, i) => (
                  <Reveal key={award.id} delay={i * 80} className="h-full">
                    <GlassPanel
                      hover
                      className={`flex h-full flex-col ${award.image ? 'overflow-hidden !p-0' : ''}`}
                    >
                      {award.image && (
                        <div className="aspect-video w-full overflow-hidden bg-panel-light">
                          <img
                            src={award.image}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className={`h-full w-full object-cover ${
                              award.category === 'Publication' ? 'object-top' : 'object-center'
                            }`}
                          />
                        </div>
                      )}
                      <div className={`flex flex-1 items-start gap-3 ${award.image ? 'p-5' : ''}`}>
                        {award.category === 'Publication' ? (
                          <BookOpen size={18} className="mt-1 shrink-0 text-accent" />
                        ) : (
                          <AwardIcon size={18} className="mt-1 shrink-0 text-accent" />
                        )}
                        <div>
                          <p className="font-semibold text-ink">{award.title}</p>
                          <p className="font-mono text-xs text-muted">
                            {award.org} · {award.date}
                          </p>
                          <p className="mt-2 text-sm text-muted">{award.description}</p>
                          {(award.certificateUrl || award.repoUrl) && (
                            <div className="mt-3 flex items-center gap-4 font-mono text-xs">
                              {award.certificateUrl && (
                                <a
                                  href={award.certificateUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-block text-accent hover:underline"
                                >
                                  {award.category === 'Publication' ? 'Read Paper →' : 'View Certificate →'}
                                </a>
                              )}
                              {award.repoUrl && (
                                <a
                                  href={award.repoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-1 text-muted hover:text-ink"
                                >
                                  <GithubIcon size={13} /> Source
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </GlassPanel>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>
        )
      })}
    </div>
  )
}
