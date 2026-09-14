import type { ReactNode } from 'react'

type GlassPanelProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassPanel({ children, className = '', hover = false }: GlassPanelProps) {
  return (
    <div className={`glass ${hover ? 'glass-hover' : ''} rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}
