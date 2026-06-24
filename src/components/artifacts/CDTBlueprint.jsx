import ArtifactFrame from './ArtifactFrame'

// Banco de Bogotá — CDT.
// A service blueprint: customer / frontstage / backstage swimlanes across the
// simplified 4-stage flow, with the abandonment fix and outcome called out.
// Reads in 3s as: "solved a complex enterprise problem."
export default function CDTBlueprint({ theme: t }) {
  const stages = [
    { x: 130, l: 'Discover' },
    { x: 225, l: 'Simulate' },
    { x: 320, l: 'Select' },
    { x: 410, l: 'Confirm' },
  ]
  const frontstage = [
    { x: 130, l: 'Landing' },
    { x: 225, l: 'Simulator' },
    { x: 320, l: 'Accounts' },
    { x: 410, l: 'Summary' },
  ]
  const backstage = [
    { x: 225, l: 'Rates API' },
    { x: 320, l: 'Eligibility', flag: true },
    { x: 410, l: 'Core bank' },
  ]
  const laneY = { customer: 96, front: 150, back: 206 }

  return (
    <ArtifactFrame
      file={{ name: 'cdt_service_blueprint', meta: 'BdB · v3' }}
      theme={t}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" fill="none">
        {/* lane label column */}
        <line x1="76" y1="44" x2="76" y2="258" stroke={t.faint2} strokeWidth="1" />
        {[
          ['Customer', laneY.customer],
          ['Frontstage', laneY.front],
          ['Backstage', laneY.back],
        ].map(([l, y]) => (
          <text key={l} x="10" y={y + 3} fontFamily="JetBrains Mono,monospace" fontSize="8" fill={t.sub} className="art-el">
            {l}
          </text>
        ))}
        {/* lane dividers */}
        {[124, 178].map((y, i) => (
          <line key={i} x1="76" y1={y} x2="466" y2={y} stroke={t.faint2} strokeWidth="1" />
        ))}

        {/* stage guides + labels */}
        {stages.map((s, i) => (
          <g key={i}>
            <line x1={s.x} y1="58" x2={s.x} y2="252" stroke={t.faint2} strokeWidth="1" strokeDasharray="2 4" />
            <text x={s.x} y="52" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill={t.text} className="art-el" style={{ transitionDelay: `${i * 60}ms` }}>
              {s.l}
            </text>
          </g>
        ))}

        {/* customer touchpoints */}
        {stages.map((s, i) => (
          <circle key={i} cx={s.x} cy={laneY.customer} r="3.4" fill={t.accent} className="art-el" style={{ transitionDelay: `${120 + i * 60}ms` }} />
        ))}

        {/* frontstage flow */}
        {frontstage.slice(0, -1).map((s, i) => (
          <line key={i} x1={s.x + 32} y1={laneY.front} x2={frontstage[i + 1].x - 32} y2={laneY.front} stroke={t.accent} strokeWidth="1.4" pathLength="1" className="draw-line" style={{ transitionDelay: `${300 + i * 120}ms` }} />
        ))}
        {frontstage.map((s, i) => (
          <g key={i} className="art-el" style={{ transitionDelay: `${200 + i * 80}ms` }}>
            <rect x={s.x - 32} y={laneY.front - 14} width="64" height="28" rx="6" fill={t.surface} stroke={t.faint} strokeWidth="1.3" />
            <text x={s.x} y={laneY.front + 3.5} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={t.ink}>
              {s.l}
            </text>
          </g>
        ))}

        {/* vertical service links customer→front→back */}
        {stages.map((s, i) => (
          <line key={i} x1={s.x} y1={laneY.customer + 5} x2={s.x} y2={laneY.front - 15} stroke={t.faint} strokeWidth="1" pathLength="1" className="draw-line" style={{ transitionDelay: `${260 + i * 60}ms` }} />
        ))}

        {/* backstage systems */}
        {backstage.map((s, i) => (
          <g key={i}>
            <line x1={s.x} y1={laneY.front + 15} x2={s.x} y2={laneY.back - 13} stroke={t.faint} strokeWidth="1" strokeDasharray="3 3" pathLength="1" className="draw-line" style={{ transitionDelay: `${420 + i * 90}ms` }} />
            <g className="art-node art-el" style={{ transitionDelay: `${460 + i * 90}ms` }}>
              <rect className="art-emph" x={s.x - 34} y={laneY.back - 12} width="68" height="24" rx="5" fill={t.faint2} stroke={s.flag ? '#D9483B' : t.faint} strokeWidth="1.2" />
              <text x={s.x} y={laneY.back + 3} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill={s.flag ? '#D9483B' : t.sub}>
                {s.l}
              </text>
              {s.flag && (
                <text className="art-detail" x={s.x} y={laneY.back + 26} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="#D9483B">
                  70% drop-off → resolved
                </text>
              )}
            </g>
          </g>
        ))}

        {/* outcome callouts */}
        <g className="art-el" style={{ transitionDelay: '760ms' }}>
          <text x="86" y="74" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={t.sub}>
            12 steps → 3 taps
          </text>
        </g>
        <g className="art-el" style={{ transitionDelay: '840ms' }}>
          <rect x="398" y="64" width="62" height="20" rx="10" fill={t.accent} />
          <text x="429" y="78" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill={t.onAccent}>
            +30%
          </text>
        </g>

        {/* legend */}
        <g className="art-el" style={{ transitionDelay: '960ms' }}>
          <circle cx="250" cy="276" r="3" fill={t.accent} />
          <text x="258" y="279" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.text}>touchpoint</text>
          <rect x="320" y="272" width="9" height="8" rx="2" fill={t.surface} stroke={t.faint} />
          <text x="333" y="279" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.text}>service</text>
          <line x1="382" y1="276" x2="394" y2="276" stroke={t.faint} strokeDasharray="3 3" />
          <text x="398" y="279" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.text}>system</text>
        </g>
      </svg>
    </ArtifactFrame>
  )
}
