import Reveal from '../components/Reveal'
import { Link } from '../lib/router'
import ProjectImage from '../components/ProjectImage'

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

function StudyImage({ src, alt, className = '' }) {
  return (
    <ProjectImage
      src={src}
      alt={alt}
      className={`rounded-xl border border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] ${className}`}
    />
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

const researchPoints = [
  '40 qualitative interviews and card-sorting sessions segmenting users by risk profile and financial literacy',
  'Hotjar heatmap analysis of existing digital flow',
  'Journey mapping revealed a 12-step analog process with 70% abandonment at document upload',
  '3 personas with distinct trust thresholds and investment experience levels',
  'Double Diamond methodology with brand, risk, and product stakeholders before any screens',
]

export default function CaseStudyBancoBogota() {
  return (
    <div className="min-h-screen bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <BackBar />

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.22), transparent)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <Reveal>
            <SectionLabel>Fintech · Colombia · Banking</SectionLabel>
          </Reveal>
          <Reveal delay={50}>
            <p className="mt-4 text-body text-white/55">Banco de Bogotá</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-[20ch] text-balance font-display text-display font-semibold text-white">
              Rebuilding Digital Investing at Colombia’s Largest Bank
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[52ch] text-balance text-lead text-white/60">
              Led the end-to-end design transformation of Banco de Bogotá&apos;s Certificate of
              Deposit (CDT) product — converting a fully analog, branch-dependent process into a
              digital-first mobile experience. Drove a +30% increase in digital CDT openings within
              the first quarter post-launch.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>+30% digital CDT openings</Chip>
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
          <Reveal delay={120} variant="scale">
            <StudyImage
              src="/assets/projects/banco-bogota/hero.png"
              alt="Banco de Bogotá CDT digital investing hero screen showing the mobile onboarding experience"
              className="aspect-[16/9] w-full"
            />
          </Reveal>
        </div>
      </section>

      <Section label="Context">
        <p className="text-body text-white/70 md:text-lead md:text-white/70">
          Banco de Bogotá is Colombia&apos;s largest bank. The CDT (Certificado de Depósito a
          Término) is one of its core savings products — historically acquired entirely through
          branches. The business objective: convert analog acquisition into a digital-first flow
          without compromising regulatory compliance.
        </p>
      </Section>

      <Section label="Challenge">
        <div className="space-y-5 text-body text-white/70">
          <p>
            CDTs are a cornerstone of Colombian retail banking — but Banco de Bogotá&apos;s digital
            channel was a dead end. Customers visited branches, filled out paper forms, and waited
            days for confirmation. The bank was losing investment volume to digital-native
            competitors. The challenge: design a mobile-first experience that educates, reduces
            friction, and drives adoption without compromising regulatory compliance.
          </p>
        </div>
        <ul className="mt-8 space-y-3 text-body text-white/70">
          {researchPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-300/60" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StudyImage
            src="/assets/projects/banco-bogota/flow-1.png"
            alt="User research flow diagram mapping the CDT onboarding journey and decision points"
            className="aspect-[16/9] w-full"
          />
          <StudyImage
            src="/assets/projects/banco-bogota/flow-2.png"
            alt="Journey map showing the analog CDT process and digital transformation opportunities"
            className="aspect-[16/9] w-full"
          />
        </div>
      </Section>

      <Section label="Role">
        <p className="text-body text-white/70">
          End-to-end Product Designer. Aligned brand, risk, compliance, and product stakeholders
          across a national banking institution.
        </p>
      </Section>

      <Section label="Key decisions">
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StudyImage
            src="/assets/projects/banco-bogota/screens-overview.png"
            alt="Overview of redesigned CDT mobile screens showing the simplified three-step flow"
            className="aspect-[16/9] w-full"
          />
          <StudyImage
            src="/assets/projects/banco-bogota/simulation.png"
            alt="CDT returns simulation tool showing projected investment gains before commitment"
            className="aspect-[16/9] w-full"
          />
        </div>
        <div className="space-y-4">
          <Decision num="01" title="Progressive disclosure">
            12-step flow collapsed into 3 decision points — each step earns the next without
            overwhelming users upfront.
          </Decision>
          <Decision num="02" title="Simulation tool">
            Users see projected returns before committing — education before legal language.
          </Decision>
          <Decision num="03" title="Transparent conditions">
            Rates and legal terms inline at confirmation — no hidden surprises at the finish line.
          </Decision>
          <Decision num="04" title="Educational module">
            &ldquo;Why CDT Digital?&rdquo; answered in-flow — building trust through clarity, not
            copy volume.
          </Decision>
          <Decision num="05" title="Modular design system">
            Figma components aligned to Banco de Bogotá brand tokens — scalable beyond this product.
          </Decision>
        </div>
      </Section>

      <Section label="Final experience">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StudyImage
            src="/assets/projects/banco-bogota/screens-2.png"
            alt="CDT mobile screen showing investment amount selection"
            className="aspect-[9/16] w-full"
          />
          <StudyImage
            src="/assets/projects/banco-bogota/screens-3.png"
            alt="CDT mobile screen showing term duration and rate selection"
            className="aspect-[9/16] w-full"
          />
          <StudyImage
            src="/assets/projects/banco-bogota/screens-4.png"
            alt="CDT mobile screen showing confirmation with transparent terms"
            className="aspect-[9/16] w-full"
          />
          <StudyImage
            src="/assets/projects/banco-bogota/screens-5.png"
            alt="CDT mobile screen showing successful digital deposit confirmation"
            className="aspect-[9/16] w-full"
          />
        </div>
        <p className="mt-6 font-mono text-meta uppercase tracking-[0.12em] text-white/45">
          Mobile-first. Simulation-led. Regulatorily compliant.
        </p>
      </Section>

      <Section label="Outcomes">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Outcome>+30% increase in digital CDT openings post-launch</Outcome>
          <Outcome>Reduced operational overhead for branch staff</Outcome>
          <Outcome>MVP launched with roadmap for automated renewals and personalized offers</Outcome>
        </div>
        <p className="mt-10 font-mono text-meta uppercase tracking-[0.12em] text-white/45">
          Prototype available on request.
        </p>
      </Section>

      <Section label="Reflection">
        <p className="text-balance font-display text-h3 font-normal leading-relaxed text-white/85 md:text-[1.375rem]">
          The most important work in this project happened in alignment sessions, not in Figma. The
          decisions that had the most impact each required convincing someone in the organization
          that a simpler way was possible within the bank&apos;s constraints. That&apos;s the work a
          Lead does that a Senior doesn&apos;t.
        </p>
      </Section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <Link
            to="/work/mastercard"
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
