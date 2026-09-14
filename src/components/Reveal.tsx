import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger delay in ms — pass index * 60 (or similar) for lists of cards. */
  delay?: number
  className?: string
  role?: string
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fades + slides children in the first time they scroll into view.
 * Respects prefers-reduced-motion (starts visible, no animation, no observer).
 * No animation library — just IntersectionObserver + a CSS transition.
 */
export default function Reveal({ children, delay = 0, className = '', role }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      role={role}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
