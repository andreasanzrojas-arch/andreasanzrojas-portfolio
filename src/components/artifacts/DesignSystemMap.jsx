import ArtifactFrame from './ArtifactFrame'

// Huge — Google for Education.
// Design-system documentation: a token→product dependency stack with real
// counts, beside a governed component inventory + coverage.
// Reads in 3s as: "worked at Google's quality bar."
export default function DesignSystemMap({ theme: t }) {
  const layers = [
    { y: 56, l: 'Product', d: 'Google for Education', emph: true },
    { y: 100, l: 'Templates', d: '12 templates' },
    { y: 144, l: 'Patterns', d: '26 patterns' },
    { y: 188, l: 'Components', d: '48 components' },
    { y: 232, l: 'Foundations', d: '120 tokens' },
  ]

  return (
    <ArtifactFrame
      file={{ name: 'ds_architecture', meta: 'Google' }}
      theme={t}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" fill="none">
        {/* dependency connectors with upward "scales to" arrows */}
        {layers.slice(0, -1).map((L, i) => {
          const y1 = layers[i + 1].y
          const y2 = L.y + 26
          return (
            <g key={i}>
              <line x1="118" y1={y1} x2="118" y2={y2} stroke={t.faint} strokeWidth="1.3" pathLength="1" className="draw-line" style={{ transitionDelay: `${250 + i * 130}ms` }} />
              <path d={`M114,${y2 + 5} l4,-5 l4,5`} stroke={t.accent} strokeWidth="1.3" fill="none" className="art-el" style={{ transitionDelay: `${340 + i * 130}ms` }} />
            </g>
          )
        })}

        {/* dependency stack */}
        {layers.map((L, i) => (
          <g key={i} className="art-node art-el" style={{ transitionDelay: `${i * 120}ms` }}>
            <rect className="art-emph" x="30" y={L.y} width="176" height="26" rx="6" fill={L.emph ? t.accent : t.surface} stroke={L.emph ? t.accent : t.faint} strokeWidth="1.4" />
            <text x="42" y={L.y + 16.5} fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill={L.emph ? t.onAccent : t.ink}>
              {L.l}
            </text>
            <text className="art-detail" x="198" y={L.y + 16.5} textAnchor="end" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={L.emph ? t.onAccent : t.text}>
              {L.d}
            </text>
          </g>
        ))}

        {/* divider */}
        <line x1="244" y1="52" x2="244" y2="258" stroke={t.faint2} strokeWidth="1" />

        {/* governed component inventory */}
        <text x="272" y="62" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={t.sub} className="art-el" style={{ transitionDelay: '680ms' }}>
          component library
        </text>
        {Array.from({ length: 4 }).map((_, c) =>
          Array.from({ length: 4 }).map((__, r) => {
            const idx = c * 4 + r
            const accent = idx % 5 === 0
            return (
              <g key={`${c}-${r}`} className="art-el" style={{ transitionDelay: `${720 + idx * 30}ms` }}>
                <rect x={272 + c * 46} y={74 + r * 40} width="38" height="30" rx="5" fill={accent ? t.accent : t.faint2} stroke={t.faint} strokeWidth="1" />
                <rect x={278 + c * 46} y={80 + r * 40} width={(((c + r) % 3) + 2) * 6} height="3.5" rx="1.8" fill={accent ? t.onAccent : t.faint} />
                <rect x={278 + c * 46} y={88 + r * 40} width="20" height="3" rx="1.5" fill={accent ? t.onAccent : t.faint} opacity="0.7" />
              </g>
            )
          }),
        )}

        {/* coverage / governance footer */}
        <g className="art-el" style={{ transitionDelay: '1000ms' }}>
          <text x="272" y="252" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.text}>
            WCAG AA
          </text>
          <rect x="320" y="245" width="86" height="6" rx="3" fill={t.faint2} stroke={t.faint} strokeWidth="0.8" />
          <rect x="320" y="245" width="81" height="6" rx="3" fill={t.accent} />
          <text x="414" y="251.5" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.sub}>
            94%
          </text>
        </g>
      </svg>
    </ArtifactFrame>
  )
}
