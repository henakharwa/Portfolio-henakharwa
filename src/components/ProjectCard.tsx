import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import ProjectCoverArt from './ProjectCoverArt'
import Tag from './Tag'
import { GithubIcon } from './icons'

/**
 * One project card, shared by the Projects page and the homepage's Featured
 * Projects section so both stay visually identical. Projects with a
 * `caseStudy` get a clickable title and a "Case Study" link through to
 * /projects/:id; others behave exactly as before (title is plain text).
 */
export default function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.caseStudy)

  return (
    <div className="group glass glass-hover flex h-full flex-col overflow-hidden rounded-xl">
      <ProjectCoverArt icon={project.icon} tone={project.tone} image={project.image} />

      <div className="flex min-h-[232px] flex-1 flex-col p-5">
        {hasCaseStudy ? (
          <Link to={`/projects/${project.id}`} className="text-base font-semibold text-ink hover:text-accent">
            {project.title}
          </Link>
        ) : (
          <p className="text-base font-semibold text-ink">{project.title}</p>
        )}
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">{project.description}</p>
        <div className="mt-3 flex h-[58px] flex-wrap content-start items-start gap-1.5 overflow-hidden">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {(project.liveUrl || project.repoUrl || hasCaseStudy) && (
          <div className="mt-auto flex flex-wrap gap-4 pt-3 font-mono text-xs">
            {hasCaseStudy && (
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center gap-1 text-accent hover:underline"
              >
                <ArrowUpRight size={13} /> Case Study
              </Link>
            )}
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
        )}
      </div>
    </div>
  )
}
