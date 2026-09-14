import type { ComponentType } from 'react'
import { NavLink } from 'react-router-dom'
import { Mail, Calendar, Terminal } from 'lucide-react'
import { profile, socialLinks, type SocialLink } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const navItems = [
  { label: '/home', to: '/' },
  { label: '/experience', to: '/experience' },
  { label: '/projects', to: '/projects' },
  { label: '/awards', to: '/awards' },
  { label: '/contact', to: '/contact' },
]

type IconComponent = ComponentType<{ size?: number; className?: string }>

const iconMap: Record<SocialLink['icon'], IconComponent> = {
  mail: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  calendar: Calendar,
  x: Terminal,
}

export default function Navbar() {
  return (
    <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-mono text-sm font-semibold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-700 bg-slate-900">
            <Terminal size={15} className="text-accent" />
          </span>
          <span>
            {profile.handle}
            <span className="cursor-blink text-accent">_</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-5 font-mono text-sm text-muted md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `transition-colors hover:text-ink ${isActive ? 'text-ink underline decoration-accent underline-offset-4' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3 text-muted">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.label}
                  className="block transition-colors hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile nav */}
      <div className="flex gap-4 overflow-x-auto border-t border-white/5 px-4 py-2 font-mono text-xs text-muted md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `whitespace-nowrap ${isActive ? 'text-ink' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
