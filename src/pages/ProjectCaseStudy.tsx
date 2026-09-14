import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Lightbulb, Target, Trophy, Wrench } from 'lucide-react'
import { projects } from '../data/portfolio'
import GlassPanel from '../components/GlassPanel'
import Tag from '../components/Tag'
import Reveal from '../components/Reveal'
import { GithubIcon } from '../components/icons'

export default function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  // No matching project, or one without case-study content — send visitors
  // back to the full list rather than showing a dead-end 404-ish page.
  if (!project || !project.caseStudy) {
    return <Navigate to="/projects" replace />
  }

  const { caseStudy } = project
  const diagramImage = caseStudy.diagramImage ?? project.image

  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink"
        >
          <ArrowLeft size={14} /> all projects
        </Link>
      </Reveal>

      <Reveal delay={40}>
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">{project.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-accent hover:underline"
              >
                <ExternalLink size={13} /> {project.liveLabel ?? 'Live Demo'}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-muted hover:text-ink"
              >
                <GithubIcon size={13} /> Source
              </a>
            )}
          </div>
        </header>
      </Reveal>

      {diagramImage && (
        <Reveal delay={80}>
          <figure className="flex max-w-md flex-col gap-3">
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img src={diagramImage} alt="" aria-hidden="true" loading="lazy" className="w-full" />
            </div>
            <figcaption className="text-sm text-muted">{caseStudy.architectureCaption}</figcaption>
          </figure>
        </Reveal>
      )}

      <Reveal delay={100}>
        <section className="flex flex-col gap-3">
          <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
            <Target size={18} className="text-accent" /> The problem
          </h2>
          <p className="max-w-3xl leading-relaxed text-muted">{caseStudy.problem}</p>
        </section>
      </Reveal>

      <Reveal delay={140}>
        <section className="flex flex-col gap-3">
          <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
            <Wrench size={18} className="text-accent" /> The approach
          </h2>
          <ol className="flex flex-col gap-3">
            {caseStudy.approach.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 font-mono text-xs text-accent">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal delay={180}>
        <section className="grid gap-4 sm:grid-cols-2">
          {caseStudy.highlights.map((highlight, i) => (
            <GlassPanel key={i} className="text-sm leading-relaxed text-muted">
              {highlight}
            </GlassPanel>
          ))}
        </section>
      </Reveal>

      {caseStudy.recognition && caseStudy.recognition.length > 0 && (
        <Reveal delay={200}>
          <section className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
              <Trophy size={18} className="text-accent" /> Recognition
            </h2>
            <ul className="flex flex-col gap-2">
              {caseStudy.recognition.map((item, i) => (
                <li key={i} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      <Reveal delay={240}>
        <section className="flex flex-col gap-3">
          <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
            <Lightbulb size={18} className="text-accent" /> What's next
          </h2>
          <ul className="flex flex-col gap-2">
            {caseStudy.nextSteps.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  )
}
