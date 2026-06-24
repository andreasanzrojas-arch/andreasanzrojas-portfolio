import { hero, credibility, featured } from '../data'
import Reveal from '../components/Reveal'
import { useParallax } from '../lib/motion'
import Artifact from '../components/artifacts'

// DIRECTION 1 — EDITORIAL LEADERSHIP
// Warm paper, high-contrast serif display, asymmetric magazine composition.
// References: Pitch, The Gentlewoman, Vercel Editorial, Notion Editorial.

const PAPER = '#F6F2EA'
const INK = '#16130E'

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#16130E]/10 bg-[#F6F2EA]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <span className="font-serif text-lg font-medium tracking-tight">Andrea Sanz Rojas</span>
        <nav className="hidden gap-8 text-[12px] uppercase tracking-[0.18em] text-[#16130E]/60 md:flex">
          <a href="#work" className="hover:text-[#16130E]">Work</a>
          <a href="#about" className="hover:text-[#16130E]">About</a>
          <a href="#contact" className="hover:text-[#16130E]">Contact</a>
        </nav>
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#8C2F1E]">Iss. 02</span>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <div className="grid grid-cols-12 gap-6">
        <Reveal variant="blur" className="col-span-12 md:col-span-7">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-[#16130E]/50">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-[clamp(2.9rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.02em]">
            Leading complex
            <br />
            product <span className="italic font-normal text-[#8C2F1E]">initiatives</span>
            <br />
            across global
            <br />
            organizations.
          </h1>
        </Reveal>

        <div className="col-span-12 flex flex-col justify-end md:col-span-4 md:col-start-9">
          <Reveal delay={200}>
            <div className="h-px w-full bg-[#16130E]/15" />
            <p className="mt-6 font-serif text-[1.35rem] leading-snug text-[#16130E]/80">
              {hero.sub}
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#work"
                className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#16130E] underline decoration-[#8C2F1E] decoration-2 underline-offset-[6px] hover:text-[#8C2F1E]"
              >
                View work
              </a>
              <a href="#contact" className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#16130E]/50 hover:text-[#16130E]">
                Contact
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Credibility() {
  return (
    <section className="border-y border-[#16130E]/12 bg-[#EFE9DD]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#16130E]/45">
            Trusted across
          </p>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            {credibility.brands.map((b) => (
              <span key={b} className="font-serif text-[1.35rem] font-medium tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#16130E]/40">
          {credibility.meta}
        </p>
      </div>
    </section>
  )
}

function FeaturedEntry({ item, last }) {
  const metricRef = useParallax(14)
  return (
    <Reveal>
      <article
        className={`group grid grid-cols-12 gap-6 py-12 ${
          last ? '' : 'border-b border-[#16130E]/12'
        }`}
      >
        <div className="col-span-12 flex items-start gap-6 md:col-span-1">
          <span className="font-serif text-[2rem] italic leading-none text-[#8C2F1E]">
            {item.index}
          </span>
        </div>

        <div className="col-span-12 md:col-span-7">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#16130E]/45">
            {item.tag}
          </p>
          <h3 className="font-serif text-[clamp(1.7rem,3.2vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#8C2F1E]">
            {item.title}
          </h3>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-[#16130E]/65">
            {item.framing}
          </p>

          {/* Visual proof — editorial figure */}
          <figure className="mt-8 max-w-xl overflow-hidden rounded-sm border border-[#16130E]/15 bg-[#F1EBDF]">
            <Artifact index={item.index} variant="editorial" />
          </figure>

          <div className="mt-7 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#16130E]/55">
            <span>{item.company}</span>
            <span className="h-px w-8 bg-[#16130E]/25" />
            <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Read case →
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div ref={metricRef} className="parallax flex items-baseline justify-end gap-3 border-t border-[#16130E]/15 pt-4">
            <span className="font-serif text-[3rem] font-medium leading-none tracking-tight">
              {item.metric}
            </span>
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#16130E]/45">
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
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="mb-10 flex items-end justify-between border-b border-[#16130E]/20 pb-6">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-medium italic">
            Selected work
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#16130E]/45">
            Three initiatives
          </span>
        </div>
      </Reveal>
      {featured.map((item, i) => (
        <FeaturedEntry key={item.index} item={item} last={i === featured.length - 1} />
      ))}
    </section>
  )
}

function MiniFooter() {
  return (
    <footer id="contact" className="border-t border-[#16130E]/12 bg-[#EFE9DD]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-12 md:flex-row md:items-baseline md:justify-between md:px-10">
        <a href="mailto:andreasanzrojas@gmail.com" className="font-serif text-[2rem] font-medium italic hover:text-[#8C2F1E]">
          andreasanzrojas@gmail.com
        </a>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#16130E]/45">
          Open to Lead Product Designer roles
        </span>
      </div>
    </footer>
  )
}

export default function EditorialHome() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#E2D6C0]" style={{ background: PAPER, color: INK }}>
      <TopBar />
      <Hero />
      <Credibility />
      <Featured />
      <MiniFooter />
    </div>
  )
}
