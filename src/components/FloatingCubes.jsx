import { useEffect, useRef } from 'react'

const SQUARE_COUNT = 220
const DIAMOND_ROTATION = Math.PI / 4
const BASE_COLOR = 'rgba(180, 180, 190, 0.35)'

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
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
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
    let animationId
    let squares = []

    const layoutSquares = () => {
      const dpr = window.devicePixelRatio || 1
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      squares = Array.from({ length: SQUARE_COUNT }, () => createSquare(width, height))
    }

    layoutSquares()
    window.addEventListener('resize', layoutSquares)

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      squares.forEach((square) => {
        square.x += square.vx
        square.y += square.vy

        const margin = square.size * 2
        if (square.x < -margin) square.x = width + margin
        if (square.x > width + margin) square.x = -margin
        if (square.y < -margin) square.y = height + margin
        if (square.y > height + margin) square.y = -margin

        ctx.save()
        ctx.translate(square.x, square.y)
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
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={containerRef} className="floating-cubes" aria-hidden>
      <canvas ref={canvasRef} className="floating-cubes__canvas" />
    </div>
  )
}
