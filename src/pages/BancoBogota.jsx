import { Link } from '../lib/router'
import SEO from '../components/SEO'

const images = {
  research1:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/783ca3ea-61de-491c-987f-55d483b38ea0/Captura+de+pantalla+2025-03-10+a+las+8.43.59%E2%80%AFp.%E2%80%AFm..png',
}

export default function BancoBogota() {
  return (
    <div className="case-study-shell">
      <SEO
        title="Rebuilding Digital Investing at Colombia's Largest Bank"
        description="End-to-end redesign of Banco de Bogotá's CDT product — turning a 12-step analog process into a 3-step digital flow."
        image="/assets/projects/banco-bogota/bdb-landing.png"
        url="https://andreasanzrojas.com/work/banco-de-bogota"
      />
      <div className="case-study-page">
        <Link to="/" className="cs-back">
          ← Work
        </Link>

        <header className="cs-hero">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
            Banking · Colombia · 2021–2022
          </p>
          <h1 className="cs-headline">Rebuilding Digital Investing at Colombia&apos;s Largest Bank</h1>
          <p className="cs-subline">
            End-to-end redesign of Banco de Bogotá&apos;s CDT product — turning a 12-step analog
            process into a digital flow.
          </p>
          <div className="cs-impact-pill">+30% digital CDT openings post-launch</div>
        </header>

        <div className="cs-hero-wrap">
          <img
            src="/assets/projects/banco-bogota/bdb-landing.png"
            alt="Banco de Bogotá CDT simulator"
            className="cs-img-full"
          />
        </div>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Context
              </span>
            </div>
            <div>
              <p className="cs-body">
                CDTs (Certificates of Deposit) are a cornerstone of Colombian banking. At Banco de
                Bogotá — one of the country&apos;s largest traditional banks — the process was entirely
                analog: customers visited branches, filled out paper forms, and waited days for
                confirmation. The bank was losing investment volume to digital-native competitors. The
                ask: design a digital experience that educates users, reduces friction, and drives
                adoption — without compromising regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                My role
              </span>
            </div>
            <div>
              <p className="cs-body">
                End-to-end Product Designer. I owned the full design process — from initial research
                and stakeholder alignment through UX design, prototyping, and post-launch data capture.
                I collaborated with risk, compliance, brand, and product teams across Banco de
                Bogotá. I also led the visual UI design — from component definition to final screens.
              </p>
              <p className="cs-label">Collaborators</p>
              <p className="cs-body">
                Risk, compliance, brand, and product stakeholders across Banco de Bogotá.
              </p>
              <p className="cs-label">Methodology</p>
              <p className="cs-body">Design Thinking · Usability Testing</p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Signal
              </span>
            </div>
            <div>
              <p className="cs-body">
                CDTs are one of Colombia&apos;s most common savings instruments — and Banco de
                Bogotá&apos;s most complained-about digital product. The complaint wasn&apos;t the
                product itself. It was the experience around it: an analog process that required
                branch visits for something inherently simple, legal terms that surprised users after
                they&apos;d already committed, and a renewal mechanic that re-invested savings without
                explicit consent. The opportunity wasn&apos;t to digitize a 12-step process. It was to
                redesign the sequence of information so that users understood, decided, and committed
                without needing a teller to explain what they were signing.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Influence
              </span>
            </div>
            <div>
              <p className="cs-body">
                Research revealed three root causes — not one — behind the drop-off rate and complaint
                volume.
              </p>
              <ul className="cs-list mt-6">
                <li>
                  40 qualitative interviews and card-sorting sessions segmented users by risk profile,
                  financial literacy, and prior CDT experience
                </li>
                <li>
                  Journey mapping exposed the 12-step process in full: 4 physical touchpoints, 2 document
                  handoffs, and a 3–5 day wait before confirmation — at each step, a potential
                  abandonment
                </li>
                <li>
                  Key finding 1: users were not afraid of CDTs — they were afraid of not understanding
                  what they were committing to. Comprehension anxiety, not product complexity, was the
                  primary barrier
                </li>
                <li>
                  Key finding 2: the auto-renewal mechanic was discovered post-maturity by most users
                  — never during the opening process
                </li>
                <li>
                  Key finding 3: users with low financial literacy used the bank&apos;s own staff as a
                  translation layer — &quot;the teller explains it.&quot; Digital had to replace that
                  explanation layer, not remove it
                </li>
                <li>
                  Built 3 personas with distinct financial literacy levels, risk thresholds, and CDT
                  history to define which UX decisions mattered most for each segment
                </li>
                <li>
                  Post-launch: Hotjar heatmaps and conversion funnels validated that the simulation
                  step had the highest engagement and the lowest drop-off of any screen in the flow
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="cs-hero-wrap">
          <img src={images.research1} alt="CDT journey mapping" className="cs-img-full" />
        </div>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Artifact
              </span>
            </div>
            <div>
              <p className="cs-body">
                The design system and brand guidelines were Banco de Bogotá&apos;s. The architecture
                was the work. A CDT is one of the highest-trust financial decisions a retail customer
                makes — handing over savings for a fixed term. The digital experience had to earn that
                trust in three steps without a branch visit, a teller, or physical paperwork to provide
                reassurance. Each decision in the flow addresses a specific trust barrier: the simulator
                resolves uncertainty before commitment; the auto-populated account data eliminates form
                anxiety; the inline legal terms build confidence without requiring a separate document;
                and the renewal toggle closes the loop on the one complaint that eroded trust the most.
                Remove any one of those elements and you don&apos;t just lose a feature — you
                reintroduce the exact fear that was keeping users in branches.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Key design decisions
              </span>
            </div>
            <div>
              <div className="cs-decisions">
                <div className="cs-decision">
                  <span className="cs-decision-num">01</span>
                  <h3>3-step digital flow</h3>
                  <p>
                    The original process had 12 steps because it was designed around compliance and
                    back-office requirements, not user behavior. Customers gathered physical documents,
                    visited a branch, waited for a teller, filled out paper forms, and received
                    confirmation days later. The redesign inverted the logic: start with what the user
                    needs to know (how much will I earn?) before asking for anything. The resulting
                    3-step structure — Simulate · Validate · Confirm — puts the value proposition first
                    and defers every compliance requirement to the moment where context makes it feel
                    necessary, not bureaucratic. A 12-to-3 step reduction is the headline. The real
                    decision was reordering the sequence so the first screen answers a financial
                    question, not a form.
                  </p>
                </div>
                <div className="cs-decision">
                  <span className="cs-decision-num">02</span>
                  <h3>Simulate Your Investment</h3>
                  <p>
                    Most users approaching a CDT for the first time don&apos;t know if it&apos;s the
                    right decision for them. They have a savings amount and a vague sense that a CDT
                    earns more than a savings account — but no concrete number to compare against.
                    Placing a simulation tool on the first screen before any commitment or data entry
                    does specific cognitive work: it converts the product from abstract (a certificate
                    you open) into concrete (a projected return in pesos on a specific date). The design
                    decision was to make this simulator visible and interactive before the user&apos;s
                    identity or account information is ever requested. A user who sees COP 450,000 in
                    earned interest over 180 days has already made the psychological decision to
                    continue — the rest of the flow is confirmation, not persuasion.
                  </p>
                </div>
                <div className="cs-decision">
                  <span className="cs-decision-num">03</span>
                  <h3>Transparent conditions</h3>
                  <p>
                    Financial products in Colombia have historically buried legal conditions in
                    footnotes, supplementary PDFs, and physical documents handed over at branch closing.
                    This created a learned behavior among users: skip the terms, sign the paper. The
                    risk: when conditions surprise users later — rates, penalties, renewal logic — trust
                    collapses. The design decision was to surface the rate, term, and conditions inline
                    at the confirmation step — not as a link to a document, but as readable,
                    human-language summary text visible on the same screen where the user confirms.
                    Legal accuracy stays intact; legibility replaces legalese. Trust is built not by
                    hiding complexity, but by making it readable at the moment it&apos;s most relevant.
                  </p>
                </div>
                <div className="cs-decision">
                  <span className="cs-decision-num">04</span>
                  <h3>Auto-renewal transparency</h3>
                  <p>
                    Auto-renewal was the single most common source of CDT complaints at Banco de
                    Bogotá. Customers reached maturity expecting their funds — and discovered the bank
                    had already re-invested them for another full term without explicit consent. The
                    previous UX had no renewal state visible during the opening flow. Users could only
                    discover the default after the fact. The design decision was to make renewal intent
                    visible and editable at the moment of opening: a clear toggle at the confirmation
                    step — not buried in settings — lets users choose their renewal behavior before they
                    commit. Post-launch, the same toggle appears in the app for active CDTs, so users
                    can change their mind during the term. This closes the information gap that generated
                    the complaint in the first place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <p className="cs-label">The flow</p>
          <p className="cs-body">
            A 12-step analog branch process redesigned into 3 digital steps.
          </p>

          <div className="cs-step-row">
            <div className="cs-step-content">
              <span className="cs-flow-step">01</span>
              <h3 className="cs-step-title">Simulate your investment</h3>
              <p className="cs-step-desc">
                The user enters investment amount, term, and salary range. The system returns 3
                personalised CDT options with projected returns — empowering the decision before any
                commitment.
              </p>
            </div>
            <div className="cs-step-img-wrap cs-step-img-wrap--simulator">
              <img
                src="/assets/projects/banco-bogota/bdb-simulator.png"
                alt="CDT simulator"
                className="cs-step-img"
              />
            </div>
          </div>

          <div className="cs-step-row">
            <div className="cs-step-content">
              <span className="cs-flow-step">02</span>
              <h3 className="cs-step-title">Confirm data &amp; select account</h3>
              <p className="cs-step-desc">
                Personal data is pre-filled from existing bank records. The user selects the account
                to fund the CDT. No forms, no documents, no branch visit.
              </p>
            </div>
            <div className="cs-step-img-wrap">
              <img
                src="/assets/projects/banco-bogota/bdb-account.png"
                alt="Account selection"
                className="cs-step-img"
              />
            </div>
          </div>

          <div className="cs-step-row">
            <div className="cs-step-content">
              <span className="cs-flow-step">03</span>
              <h3 className="cs-step-title">Review conditions &amp; open CDT</h3>
              <p className="cs-step-desc">
                Full CDT summary before final confirmation: rate, maturity date, projected returns,
                and an explicit auto-renewal toggle. Conditions visible in the flow — not buried in
                a PDF.
              </p>
            </div>
            <div className="cs-step-img-wrap">
              <img
                src="/assets/projects/banco-bogota/bdb-confirm.png"
                alt="CDT summary and conditions"
                className="cs-step-img"
              />
            </div>
          </div>

          <div className="cs-email-showcase">
            <div className="cs-email-text">
              <span className="cs-flow-step">Closing the loop</span>
              <h3 className="cs-step-title">Confirmation email</h3>
              <p className="cs-step-desc">
                Once the CDT is created, users receive a full breakdown by email — investment amount,
                rate, maturity date, and a direct link to manage auto-renewal. Transparency
                doesn&apos;t end at confirmation.
              </p>
            </div>
            <div className="cs-email-img-wrap">
              <img
                src="/assets/projects/banco-bogota/bdb-email.png"
                alt="CDT confirmation email"
                className="cs-email-img"
              />
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-indigo-300/70">
                Impact
              </span>
            </div>
            <div>
              <div className="cs-impact-grid">
                <div className="cs-impact-item">
                  <span className="cs-impact-num">+30%</span>
                  <span className="cs-impact-desc">digital CDT openings post-launch</span>
                </div>
                <div className="cs-impact-item">
                  <span className="cs-impact-num">12 → 3</span>
                  <span className="cs-impact-desc">
                    analog steps reduced to: Simulate · Validate · Confirm
                  </span>
                </div>
                <div className="cs-impact-item">
                  <span className="cs-impact-num">0</span>
                  <span className="cs-impact-desc">physical documents required — fully digital</span>
                </div>
                <div className="cs-impact-item">
                  <span className="cs-impact-num">↓</span>
                  <span className="cs-impact-desc">
                    auto-renewal complaints — users now manage renewals from the app
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <Link
              to="/work/mastercard"
              className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/[0.16] md:p-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/35">
                Next
              </span>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xl font-medium text-white">
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
    </div>
  )
}
