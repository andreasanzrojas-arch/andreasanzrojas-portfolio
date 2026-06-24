import { useInView, useParallax } from '../../lib/motion'

// Shared frame for every visual-proof artifact.
// Provides: a working-document file tab (credibility chrome), in-view progressive
// reveal, two depth layers (parallax bg vs content), faint working grid, caption.
export default function ArtifactFrame({ file, caption, theme, aspect = '16 / 10', children }) {
  const [ref, inView] = useInView({ threshold: 0.18 })
  const bgRef = useParallax(8)
  const contentRef = useParallax(-4)
  const dark = theme.mode === 'dark'

  return (
    <figure
      ref={ref}
      className={`artifact relative w-full overflow-hidden ${inView ? 'in' : ''}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Working-document file tab */}
      {file && (
        <div
          className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 px-3 py-1"
          style={{
            borderBottom: `1px solid ${theme.faint2}`,
            background: dark ? 'rgba(255,255,255,0.035)' : 'rgba(26,25,21,0.025)',
          }}
        >
          <span className="flex shrink-0 items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.faint }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.faint2 }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.faint2 }} />
          </span>
          <span className="min-w-0 truncate font-mono text-[9px] tracking-tight" style={{ color: theme.sub }}>
            {file.name}
          </span>
          <span className="ml-auto shrink-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: theme.text }}>
            {file.meta}
          </span>
        </div>
      )}

      {/* Depth layer 1 — working grid backdrop */}
      <div ref={bgRef} className="parallax absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: theme.grid,
            backgroundSize: '24px 24px',
            opacity: dark ? 0.5 : 0.6,
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Depth layer 2 — the diagram itself */}
      <div ref={contentRef} className="parallax absolute inset-0">
        {children}
      </div>

      {caption && (
        <figcaption
          className="art-el absolute bottom-2.5 left-3 z-10 font-mono text-[9px] uppercase tracking-[0.14em]"
          style={{ color: theme.text, transitionDelay: '1100ms' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
