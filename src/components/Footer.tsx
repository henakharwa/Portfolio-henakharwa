import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 px-4 py-8 text-center font-mono text-xs text-muted sm:px-6">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
