import { hero, credibility, featured } from '../data'
import Reveal from '../components/Reveal'
import { useParallax, useTilt } from '../lib/motion'
import Artifact from '../components/artifacts'

// DIRECTION 3 — STRATEGIC SYSTEMS DESIGNER
// Warm minimal canvas, systems thinking made visible: diagrams, nodes, structure.
// References: Vercel, Ramp, Mercury, Anthropic.

const PAPER = '#F0EEE6'
const INK = '#1A1915'
const CLAY = '#C15F3C'

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1915]/10 bg-[#F0EEE6]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="h-4 w-4 rounded-sm border-2 border-[#C15F3C]" />
          <span className="font-display text-[15px] font-medium tracking-tight">Andrea Sanz Rojas</span>
        </div>
        <nav className="hidden gap-8 font-mono text-[12px] uppercase tracking-[0.12em] text-[#1A1915]/55 md:flex">
          <a href="#work" className="hover:text-[#1A1915]">Work</a>
          <a href="#about" className="hover:text-[#1A1915]">About</a>
          <a href="#contact" className="hover:text-[#1A1915]">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function SystemDiagram() {
  const nodes = ['Problem', 'Align', 'System', 'Outcome']
  const ref = useParallax(18)
  return (
    <div ref={ref} className="parallax relative rounded-xl border border-[#1A1915]/15 bg-[#F0EEE6]/60 p-6">
      <span className="absolute -top-2.5 left-4 bg-[#F0EEE6] px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#1A1915]/45">
        fig. 01 — how I lead
      </span>
      <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Leadership framework diagram">
        {/* edges */}
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={40 + i * 80}
            y1={100}
            x2={80 + i * 80}
            y2={100}
            stroke={CLAY}
            strokeWidth="1.5"
            pathLength="1"
            className="draw-line draw-in"
            style={{ transitionDelay: `${300 + i * 160}ms` }}
          />
        ))}
        {/* arrowheads */}
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${76 + i * 80},96 l5,4 l-5,4`} fill="none" stroke={CLAY} strokeWidth="1.5" />
        ))}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n}>
            <circle
              cx={40 + i * 80}
              cy={100}
              r={i === 3 ? 9 : 6}
              fill={i === 3 ? CLAY : '#F0EEE6'}
              stroke={INK}
              strokeWidth="1.5"
            />
            <text
              x={40 + i * 80}
              y={130}
              textAnchor="middle"
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
              fill={INK}
              opacity="0.7"
            >
              {n}
            </text>
            <text
              x={40 + i * 80}
              y={70}
              textAnchor="middle"
              fontSize="8"
              fontFamily="JetBrains Mono, monospace"
              fill={INK}
              opacity="0.35"
            >
              0{i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-dots relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-24">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.2em] text-[#C15F3C]">
                {hero.eyebrow}
              </p>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.025em]">
                Leading organizations through product complexity.
              </h1>
              <p className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-[#1A1915]/65">
                {hero.sub}
              </p>
              <div className="mt-9 flex items-center gap-3">
                <a
                  href="#work"
                  className="rounded-md bg-[#1A1915] px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-[#F0EEE6] transition-colors hover:bg-[#C15F3C]"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-[#1A1915]/20 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-[#1A1915] transition-colors hover:border-[#1A1915]"
                >
                  Contact
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={200}>
              <SystemDiagram />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Credibility() {
  return (
    <section className="border-y border-[#1A1915]/12 bg-[#E9E6DB]">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#1A1915]/40">
          // trusted across
        </p>
        <div className="grid grid-cols-1 divide-y divide-[#1A1915]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {credibility.brands.map((b, i) => (
            <div key={b} className="flex items-center gap-3 py-4 md:px-6 md:py-2">
              <span className="font-mono text-[11px] text-[#C15F3C]">0{i + 1}</span>
              <span className="font-display text-[15px] font-medium">{b}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#1A1915]/40">
          {credibility.meta}
        </p>
      </div>
    </section>
  )
}

function FrameworkCard({ item }) {
  const ref = useTilt({ max: 3, lift: -4 })
  return (
    <Reveal variant="rise">
      <article
        ref={ref}
        className="tilt group flex h-full flex-col border border-[#1A1915]/15 bg-[#F0EEE6] hover:border-[#C15F3C] hover:shadow-[0_24px_50px_-24px_rgba(26,25,21,0.4)]"
      >
        <div className="flex items-center justify-between border-b border-[#1A1915]/12 px-5 py-3">
          <span className="font-mono text-[11px] text-[#1A1915]/50">case_{item.index}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C15F3C]">{item.company.split(' ')[0]}</span>
        </div>

        <div className="border-b border-[#1A1915]/12 bg-[#E9E6DB]/40">
          <Artifact index={item.index} variant="systems" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1915]/45">
            {item.tag}
          </p>
          <h3 className="font-display text-[1.15rem] font-medium leading-snug">{item.title}</h3>
          <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#1A1915]/60">{item.framing}</p>
          <div className="mt-5 flex items-baseline justify-between border-t border-[#1A1915]/12 pt-4">
            <span className="font-display text-[1.6rem] font-semibold tracking-tight">{item.metric}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#1A1915]/45">
              {item.metricLabel}
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function Featured() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <Reveal>
        <div className="mb-12 flex items-end justify-between border-b border-[#1A1915]/20 pb-5">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-tight">
            Selected work
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1A1915]/45">
            systems · outcomes
          </span>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <FrameworkCard key={item.index} item={item} />
        ))}
      </div>
    </section>
  )
}

function MiniFooter() {
  return (
    <footer id="contact" className="border-t border-[#1A1915]/12 bg-[#E9E6DB]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <a href="mailto:andreasanzrojas@gmail.com" className="font-display text-[1.6rem] font-medium hover:text-[#C15F3C]">
          andreasanzrojas@gmail.com
        </a>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1A1915]/45">
          Open to Lead Product Designer roles
        </span>
      </div>
    </footer>
  )
}

export default function SystemsHome() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#E0D2BE]" style={{ background: PAPER, color: INK }}>
      <TopBar />
      <Hero />
      <Credibility />
      <Featured />
      <MiniFooter />
    </div>
  )
}
