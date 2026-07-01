import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 300
const DIAMOND_ROTATION = Math.PI / 4
const FILL_COLOR = '#8888aa'

function createParticle(width, height) {
  const y = height * (0.3 + Math.random() * 0.7)
  const x = Math.random() * width

  return {
    x,
    y,
    originX: x,
    originY: y,
    size: 3 + Math.random() * 3,
    rotation: DIAMOND_ROTATION,
    vx: 0,
    vy: 0,
    opacity: 0.3 + Math.random() * 0.4,
  }
}

export default function ParticleCanvas() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return undefined

    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -999, y: -999 }
    let animId
    let particles = []
    let width = 0
    let height = 0

    const layout = () => {
      const dpr = window.devicePixelRatio || 1
      width = wrap.offsetWidth
      height = wrap.offsetHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        if (!reducedMotion) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const repulseRadius = 100

          if (dist > 0 && dist < repulseRadius) {
            const force = (repulseRadius - dist) / repulseRadius
            p.vx += (dx / dist) * force * 3
            p.vy += (dy / dist) * force * 3
          }

          p.vx += (p.originX - p.x) * 0.05
          p.vy += (p.originY - p.y) * 0.05
          p.vx *= 0.85
          p.vy *= 0.85
          p.x += p.vx
          p.y += p.vy
        }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = FILL_COLOR
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -999
      mouse.y = -999
    }

    layout()
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', layout)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', layout)
    }
  }, [])

  return (
    <div ref={wrapRef} className="particle-canvas-wrap" aria-hidden>
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  )
}
