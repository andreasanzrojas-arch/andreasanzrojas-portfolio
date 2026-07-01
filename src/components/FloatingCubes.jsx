import { useEffect, useRef } from 'react'

const SQUARE_COUNT = 220
const DIAMOND_ROTATION = Math.PI / 4
const BASE_COLOR = 'rgba(180, 180, 190, 0.35)'
const PARALLAX_STRENGTH = 28
const REPEL_RADIUS = 140
const REPEL_FORCE = 1.2

function randomEdgeX(width) {
  return Math.random() < 0.5
    ? Math.random() * width * 0.35
    : width * 0.65 + Math.random() * width * 0.35
}

function createSquare(width, height) {
  const speed = Math.random() * 0.07 + 0.08
  const angle = Math.random() * Math.PI * 2

  return {
    x: randomEdgeX(width),
    y: Math.random() * height,
    size: Math.random() * 3 + 3,
    opacity: Math.random() * 0.3 + 0.2,
    depth: Math.random() * 0.55 + 0.45,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    ox: 0,
    oy: 0,
  }
}

export default function FloatingCubes() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    const ctx = canvas.getContext('2d')
    const mouse = { x: 0, y: 0, active: false }
    let animationId
    let squares = []
    let width = 0
    let height = 0

    const layoutSquares = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.offsetWidth
      height = canvas.offsetHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      squares = Array.from({ length: SQUARE_COUNT }, () => createSquare(width, height))
      mouse.x = width / 2
      mouse.y = height / 2
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
    }

    const handleMouseLeave = () => {
      mouse.active = false
      mouse.x = width / 2
      mouse.y = height / 2
    }

    layoutSquares()
    window.addEventListener('resize', layoutSquares)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const parallaxX = mouse.active ? ((mouse.x / width) - 0.5) * PARALLAX_STRENGTH : 0
      const parallaxY = mouse.active ? ((mouse.y / height) - 0.5) * PARALLAX_STRENGTH : 0

      squares.forEach((square) => {
        square.x += square.vx
        square.y += square.vy

        if (mouse.active) {
          const drawX = square.x + parallaxX * square.depth
          const drawY = square.y + parallaxY * square.depth
          const dx = mouse.x - drawX
          const dy = mouse.y - drawY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist > 0 && dist < REPEL_RADIUS) {
            const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE
            square.ox -= (dx / dist) * force
            square.oy -= (dy / dist) * force
          }
        }

        square.ox *= 0.9
        square.oy *= 0.9

        const margin = square.size * 2
        if (square.x < -margin) square.x = width + margin
        if (square.x > width + margin) square.x = -margin
        if (square.y < -margin) square.y = height + margin
        if (square.y > height + margin) square.y = -margin

        const x = square.x + parallaxX * square.depth + square.ox
        const y = square.y + parallaxY * square.depth + square.oy

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(DIAMOND_ROTATION)
        ctx.globalAlpha = square.opacity
        ctx.fillStyle = BASE_COLOR
        ctx.fillRect(-square.size / 2, -square.size / 2, square.size, square.size)
        ctx.restore()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', layoutSquares)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={containerRef} className="floating-cubes" aria-hidden>
      <canvas ref={canvasRef} className="floating-cubes__canvas" />
    </div>
  )
}
