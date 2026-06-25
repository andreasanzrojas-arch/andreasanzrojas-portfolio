import { useEffect, useRef } from 'react'

export default function FloatingCubes() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    const ctx = canvas.getContext('2d')
    const mouse = { x: 0, y: 0 }
    let animationId

    const cubes = Array.from({ length: 40 }, () => ({
      x: 0,
      y: 0,
      size: Math.random() * 10 + 5,
      rotation: Math.random() * Math.PI,
      opacity: Math.random() * 0.25 + 0.12,
      vx: 0,
      vy: 0,
      baseX: 0,
      baseY: 0,
    }))

    const layoutCubes = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      cubes.forEach((cube) => {
        cube.x = Math.random() * canvas.width
        cube.y = Math.random() * canvas.height
        cube.baseX = cube.x
        cube.baseY = cube.y
      })
    }

    layoutCubes()
    window.addEventListener('resize', layoutCubes)

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return
      }
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cubes.forEach((cube) => {
        const dx = mouse.x - cube.x
        const dy = mouse.y - cube.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 160

        if (dist > 0 && dist < maxDist) {
          const force = (maxDist - dist) / maxDist
          cube.vx -= (dx / dist) * force * 1.5
          cube.vy -= (dy / dist) * force * 1.5
        }

        cube.vx += (cube.baseX - cube.x) * 0.04
        cube.vy += (cube.baseY - cube.y) * 0.04
        cube.vx *= 0.88
        cube.vy *= 0.88
        cube.x += cube.vx
        cube.y += cube.vy
        cube.rotation += 0.004

        ctx.save()
        ctx.translate(cube.x, cube.y)
        ctx.rotate(cube.rotation)
        ctx.globalAlpha = cube.opacity
        ctx.strokeStyle = 'rgba(255,255,255,0.9)'
        ctx.lineWidth = 1.2
        ctx.strokeRect(-cube.size / 2, -cube.size / 2, cube.size, cube.size)
        ctx.restore()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', layoutCubes)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={containerRef} className="floating-cubes" aria-hidden>
      <canvas ref={canvasRef} className="floating-cubes__canvas" />
    </div>
  )
}
