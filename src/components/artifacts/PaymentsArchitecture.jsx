import ArtifactFrame from './ArtifactFrame'

// Mastercard — Global Payments (abstracted, NDA-safe).
// A layered enterprise architecture view: merchant app → acquisition services →
// compliance/risk → core payments, with the acquisition flow highlighted.
// Reads in 3s as: "operated in enterprise payment systems."
export default function PaymentsArchitecture({ theme: t }) {
  const layers = [
    { y: 78, l: 'Merchant app' },
    { y: 128, l: 'Acquisition' },
    { y: 178, l: 'Compliance / Risk' },
    { y: 226, l: 'Core payments' },
  ]

  const Box = ({ x, y, w, l, d, delay, flow, decision }) => (
    <g className="art-node art-el" style={{ transitionDelay: `${delay}ms` }}>
      {decision ? (
        <polygon className="art-emph" points={`${x + w / 2},${y} ${x + w},${y + 13} ${x + w / 2},${y + 26} ${x},${y + 13}`} fill={t.surface} stroke={t.accent} strokeWidth="1.5" />
      ) : (
        <rect className="art-emph" x={x} y={y} width={w} height="26" rx="6" fill={flow ? t.surface : t.faint2} stroke={flow ? t.accent : t.faint} strokeWidth={flow ? 1.5 : 1.2} />
      )}
      <text x={x + w / 2} y={y + 16.5} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill={t.ink}>
        {l}
      </text>
      {d && (
        <text className="art-detail" x={x + w / 2} y={y - 5} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.text}>
          {d}
        </text>
      )}
    </g>
  )

  return (
    <ArtifactFrame
      file={{ name: 'merchant_acquisition.arch', meta: 'NDA' }}
      theme={t}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" fill="none">
        {/* layer bands */}
        {layers.map((L, i) => (
          <g key={i}>
            <rect x="76" y={L.y - 6} width="390" height="38" rx="4" fill={t.faint2} opacity="0.4" className="art-el" style={{ transitionDelay: `${i * 70}ms` }} />
            <text x="10" y={L.y + 16} fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill={t.sub} className="art-el" style={{ transitionDelay: `${i * 70}ms` }}>
              {L.l.length > 11 ? L.l.replace(' / ', '/') : L.l}
            </text>
          </g>
        ))}

        {/* dependency connectors (vertical, dashed) */}
        {[140, 250, 360].map((x, i) => (
          <line key={i} x1={x} y1="104" x2={x} y2="226" stroke={t.faint} strokeWidth="1" strokeDasharray="3 3" pathLength="1" className="draw-line" style={{ transitionDelay: `${300 + i * 90}ms` }} />
        ))}

        {/* Merchant app layer */}
        <Box x={100} y={layers[0].y} w={92} l="Onboarding UI" d="KYB capture" delay={120} flow />
        <Box x={300} y={layers[0].y} w={96} l="Terminal picker" d="POS · SoftPOS · mPOS" delay={200} />

        {/* Acquisition layer */}
        <Box x={100} y={layers[1].y} w={88} l="KYB service" delay={280} flow />
        <Box x={206} y={layers[1].y} w={92} l="Provisioning" delay={340} flow />
        <Box x={316} y={layers[1].y} w={80} l="Routing" delay={400} />

        {/* Compliance / Risk layer */}
        <Box x={104} y={layers[2].y} w={72} l="KYC gate" d="fiscal + sanctions" delay={460} decision flow />
        <Box x={210} y={layers[2].y} w={84} l="Sanctions" delay={520} />
        <Box x={312} y={layers[2].y} w={88} l="Risk score" delay={560} />

        {/* Core payments layer */}
        <Box x={104} y={layers[3].y} w={88} l="Ledger" delay={620} flow />
        <Box x={300} y={layers[3].y} w={96} l="Settlement" delay={680} />

        {/* highlighted acquisition flow note */}
        <g className="art-el" style={{ transitionDelay: '860ms' }}>
          <line x1="250" y1="58" x2="262" y2="58" stroke={t.accent} strokeWidth="2" />
          <text x="268" y="61" fontFamily="JetBrains Mono,monospace" fontSize="8" fill={t.sub}>
            acquisition flow
          </text>
          <line x1="360" y1="58" x2="372" y2="58" stroke={t.faint} strokeWidth="1" strokeDasharray="3 3" />
          <text x="378" y="61" fontFamily="JetBrains Mono,monospace" fontSize="8" fill={t.text}>
            dependency
          </text>
        </g>

        {/* scale annotation */}
        <g className="art-el" style={{ transitionDelay: '760ms' }}>
          <rect x="78" y="50" width="92" height="18" rx="9" fill={t.faint2} stroke={t.faint} strokeWidth="1" />
          <text x="124" y="62.5" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill={t.sub}>
            multi-region
          </text>
        </g>
      </svg>
    </ArtifactFrame>
  )
}
