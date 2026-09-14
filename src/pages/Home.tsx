import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import { profile, skills, projects, awards } from '../data/portfolio'
import Tag from '../components/Tag'
import Reveal from '../components/Reveal'
import ResumeModal from '../components/ResumeModal'
import AiAssistant from '../components/AiAssistant'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const recognition = awards.filter((a) => a.image)
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <div className="flex flex-col gap-20">
      {/* Hero */}
      <Reveal>
        <section className="grid items-center gap-10 pt-8 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-8">
          <div className="flex flex-col gap-6 lg:mt-[-3rem] lg:justify-between lg:self-stretch xl:mt-[-4rem]">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                <span className="block lg:whitespace-nowrap">{profile.heroLine1}</span>
                <span className="block bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent lg:whitespace-nowrap">
                  {profile.heroLine2}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.summary}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="glass glass-hover flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm text-ink"
              >
                <FileText size={16} />
                view_resume()
              </button>
            </div>
          </div>

          <div className="w-full max-w-xl justify-self-center lg:ml-auto lg:mr-[-1.5rem] lg:mt-[-3rem] lg:justify-self-end lg:self-start xl:mr-[-3rem] xl:mt-[-4rem]">
            <AiAssistant />
          </div>
        </section>
      </Reveal>

      {resumeOpen && (
        <ResumeModal resumeUrl={profile.resumeUrl} fileName="Hena_Kharwa_Resume.pdf" onClose={() => setResumeOpen(false)} />
      )}

      {/* Skills */}
      <Reveal>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-ink">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap((group) => group.items).map((skill, i) => (
              <Reveal key={skill} delay={i * 30} className="inline-block">
                <Tag>{skill}</Tag>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <Reveal>
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-ink">Featured Projects</h3>
              <Link to="/projects" className="font-mono text-xs text-accent hover:underline">
                all projects →
              </Link>
            </div>
            <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 100} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {/* Recognition */}
      {recognition.length > 0 && (
        <Reveal>
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-ink">Recognition</h3>
              <Link to="/awards" className="font-mono text-xs text-accent hover:underline">
                all awards →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {recognition.map((award, i) => (
                <Reveal key={award.id} delay={i * 80} className="h-full">
                  <Link
                    to="/awards"
                    className="group glass glass-hover flex h-full min-w-0 items-center gap-3 rounded-xl p-4"
                  >
                    <img
                      src={award.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p
                        title={award.title}
                        className="truncate text-sm font-semibold text-ink group-hover:text-accent"
                      >
                        {award.title}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-xs text-muted">
                        {award.org} · {award.date}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      )}
    </div>
  )
}
