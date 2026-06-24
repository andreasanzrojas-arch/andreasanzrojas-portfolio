import Reveal from '../components/Reveal'
import { Link } from '../lib/router'

// Banco de Bogotá — CDT case study.
// Long-form page applying the Product OS system (dark, precise, editorial type).

function BackBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080A]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-4xl items-center px-6 md:px-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[13px] text-white/55 transition-colors hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          Work
        </Link>
      </div>
    </header>
  )
}

function SectionLabel({ children }) {
  return (
    <span className="font-mono text-eyebrow uppercase text-indigo-300/70">{children}</span>
  )
}

// Text section with an editorial label column on large screens.
function Section({ label, children, className = '' }) {
  return (
    <section className={`border-t border-white/[0.06] ${className}`}>
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <SectionLabel>{label}</SectionLabel>
            </div>
            <div>{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] tracking-tight text-white/75">
      {children}
    </span>
  )
}

function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <span className="relative font-mono text-meta uppercase tracking-[0.14em] text-white/30">
        {label}
      </span>
    </div>
  )
}

function Decision({ num, title, children }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-7">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[13px] tabular-nums text-indigo-300/70">{num}</span>
        <h3 className="font-display text-h3 font-medium text-white">{title}</h3>
      </div>
      <p className="mt-3 text-body text-white/60">{children}</p>
    </article>
  )
}

function Outcome({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
      <span className="text-body text-white/70">{children}</span>
    </div>
  )
}

export default function CaseStudyBancoBogota() {
  return (
    <div className="min-h-screen bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <BackBar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.22), transparent)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <Reveal>
            <SectionLabel>Enterprise Fintech · Colombia</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-[20ch] text-balance font-display text-display font-semibold text-white">
              Rebuilding Digital Investing at Colombia’s Largest Bank
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[48ch] text-balance text-lead text-white/60">
              Led the design transformation of an analog investment product into a digital
              flow — aligning brand, risk and product stakeholders across a national
              banking institution.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>+30% digital CDT openings</Chip>
              <Chip>12 steps → 3</Chip>
              <Chip>Colombia’s largest bank</Chip>
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
          <Reveal delay={120} variant="scale">
            <ImagePlaceholder label="Hero image" className="aspect-[16/9] w-full" />
          </Reveal>
        </div>
      </section>

      {/* BUSINESS CONTEXT */}
      <Section label="Context">
        <p className="text-body text-white/70 md:text-lead md:text-white/70">
          Banco de Bogotá is Colombia’s largest bank, operating under strict financial regulation
          with millions of retail customers. The CDT (Certificado de Depósito a Término) is one of
          its core savings products — but its acquisition process was entirely analog: branch
          visits, physical forms, manual processing. The bank had a clear business target: increase
          digital CDT openings to reduce operational cost and capture a growing segment of
          digitally-native investors.
        </p>
      </Section>

      {/* CHALLENGE */}
      <Section label="Challenge">
        <div className="space-y-5 text-body text-white/70">
          <p>
            The existing digital flow had 12 steps and a 70% abandonment rate at the document
            upload stage. The root cause wasn’t the upload screen — it was that brand, risk, and
            product teams had each added requirements without a shared model of the experience. The
            process reflected internal org structure, not customer decision-making.
          </p>
          <p>
            My challenge: create a design model that three stakeholder groups with competing
            priorities could align on — within a complex banking environment that resists change.
          </p>
        </div>
        <div className="mt-8">
          <ImagePlaceholder label="Flow diagram / before-after" className="aspect-[16/9] w-full" />
        </div>
      </Section>

      {/* MY ROLE */}
      <Section label="Role">
        <p className="text-body text-white/70">
          I led the design end-to-end: research, strategic framing, stakeholder alignment, component
          systematization within the bank’s design system, and MVP delivery. I worked directly with
          product, risk, legal, and brand teams — facilitating alignment sessions and making the
          design case for simplification inside a highly complex banking environment.
        </p>
      </Section>

      {/* KEY DECISIONS */}
      <Section label="Key decisions">
        <div className="space-y-4">
          <Decision num="01" title="Lead with simulation, not legal copy">
            The original flow opened with terms and conditions. I proposed leading with a returns
            calculator so users could see their gains before any legal language. This required two
            working sessions to align the risk team around the idea that user education reduces, not
            increases, regulatory risk.
          </Decision>
          <Decision num="02" title="Collapse 12 steps into 3">
            The 12-step flow existed because each internal team had added requirements sequentially.
            I mapped every step to its owner, then facilitated a session where each team had to
            justify why their requirement couldn’t be embedded elsewhere. We reached 3 steps with
            progressive disclosure — zero regulatory requirements removed.
          </Decision>
          <Decision num="03" title="Systematize, don’t just design">
            Rather than designing one-off screens, I extended reusable components within the bank’s
            existing design system so the CDT work could scale to other financial products.
          </Decision>
        </div>
      </Section>

      {/* FINAL EXPERIENCE */}
      <Section label="Final experience">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ImagePlaceholder label="Screen 1" className="aspect-[9/16]" />
          <ImagePlaceholder label="Screen 2" className="aspect-[9/16]" />
          <ImagePlaceholder label="Screen 3" className="aspect-[9/16]" />
        </div>
        <p className="mt-6 font-mono text-meta uppercase tracking-[0.12em] text-white/45">
          Mobile-first. Simulation-led. Regulatorily compliant.
        </p>
      </Section>

      {/* OUTCOMES */}
      <Section label="Outcomes">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Outcome>+30% increase in digital CDT openings post-launch</Outcome>
          <Outcome>12-step flow reduced to 3, full compliance maintained</Outcome>
          <Outcome>70% abandonment at document upload resolved</Outcome>
          <Outcome>Components systematized for future product work</Outcome>
        </div>
      </Section>

      {/* REFLECTION */}
      <Section label="Reflection">
        <p className="text-balance font-display text-h3 font-normal leading-relaxed text-white/85 md:text-[1.375rem]">
          The most important work in this project happened in alignment sessions, not in Figma. The
          decisions that had the most impact each required convincing someone in the organization
          that a simpler way was possible within the bank’s constraints. That’s the work a Lead does
          that a Senior doesn’t.
        </p>
      </Section>

      {/* NEXT PROJECT LINK */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <Link
            to="/"
            className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/[0.16] md:p-8"
          >
            <span className="font-mono text-eyebrow uppercase text-white/35">Next</span>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-display text-h3 font-medium text-white">
                Simplifying Merchant Payment Adoption at Global Scale
              </span>
              <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
