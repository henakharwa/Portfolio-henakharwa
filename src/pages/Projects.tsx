import { projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <header>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">Projects</h1>
        </header>
      </Reveal>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
