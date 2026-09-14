import { useEffect, useRef } from 'react'

// Same drifting "neuron" nodes as NeuralBackground, minus the connecting
// lines — a quieter floating-particle look. Also cheaper to run: no O(n^2)
// pairwise distance check per frame, just each node updating itself.

const NODE_COLOR = '99, 102, 241' // matches --color-accent (#6366f1)
const MOUSE_RADIUS = 200 // px — nodes this close to the cursor are nudged away
const MAX_NODES = 100

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number

  constructor(width: number, height: number) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.size = Math.random() * 2 + 1
  }

  update(width: number, height: number, mouse: { x: number; y: number }) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1

    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < MOUSE_RADIUS && dist > 0) {
      const strength = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
      this.x -= (dx / dist) * strength * 2
      this.y -= (dy / dist) * strength * 2
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowBlur = 6
    ctx.shadowColor = `rgba(${NODE_COLOR}, 0.7)`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${NODE_COLOR}, 0.8)`
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return // skip entirely — no motion for users who asked for none
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = window.innerWidth
    let height = window.innerHeight
    let particles: Particle[] = []
    let frameId = 0
    let running = true
    const mouse = { x: -1000, y: -1000 }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawnParticles()
    }

    function spawnParticles() {
      const count = Math.min(Math.floor(width / 10), MAX_NODES)
      particles = Array.from({ length: count }, () => new Particle(width, height))
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function handleVisibility() {
      running = document.visibilityState === 'visible'
      if (running) frameId = requestAnimationFrame(render)
    }

    function render() {
      if (!running) return
      ctx!.clearRect(0, 0, width, height)

      for (const particle of particles) {
        particle.update(width, height, mouse)
        particle.draw(ctx!)
      }

      frameId = requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
