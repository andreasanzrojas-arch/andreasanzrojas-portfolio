import Reveal from '../components/Reveal'
import { Link } from '../lib/router'

const researchPoints = [
  '40 qualitative interviews and card-sorting sessions to segment user intent — risk-averse savers vs. growth-oriented investors',
  '3 personas built with distinct financial literacy levels and trust thresholds',
  'Journey mapping revealed a 12-step analog process with 70% abandonment at the document upload stage',
  'Stakeholder alignment sessions with risk, compliance, and product teams using Design Thinking to align on scope and constraints',
]

const decisions = [
  {
    num: '01',
    title: 'Progressive disclosure',
    body: 'Collapsed the 12-step flow into 3 decision points. Complexity surfaces only when the user needs it — not upfront.',
  },
  {
    num: '02',
    title: 'Simulate Your Investment',
    body: 'Designed a simulation tool on the landing screen so users could see projected returns before committing. Addressed decision anxiety and increased intent to complete.',
  },
  {
    num: '03',
    title: 'Transparent conditions',
    body: 'Legal terms and rates surfaced inline at the confirmation step — not buried in a PDF. Trust built without adding friction.',
  },
]

const impactPoints = [
  '+30% increase in digital CDT openings post-launch',
  'Reduced branch operational load (fewer in-person CDT requests)',
  'Launched as MVP with roadmap for automated renewals and personalized offers',
  'Established the design system foundation for future digital investment products at Banco de Bogotá',
]

export default function BancoBogota() {
  return (
    <div className="case-study-shell">
      <header className="case-study-backbar">
        <Link to="/" className="case-study-backlink">
          <span aria-hidden="true">←</span> Work
        </Link>
      </header>

      <main className="case-study-page">
        <section className="case-study-hero">
          <Reveal>
            <p className="case-study-tags">Banking · Colombia · Mobile · 2021–2022</p>
          </Reveal>
          <Reveal delay={50}>
            <h1 className="case-study-headline">
              Rebuilding Digital Investing at Colombia&apos;s Largest Bank
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="case-study-subline">
              End-to-end redesign of Banco de Bogotá&apos;s CDT product — turning a 12-step analog
              process into a mobile-first digital flow.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="case-study-pills">
              <span className="case-study-pill">+30% digital CDT openings post-launch</span>
              <span className="case-study-pill case-study-pill--muted">
                No public prototype — internal project
              </span>
            </div>
          </Reveal>
        </section>

        <section className="case-study-section">
          <Reveal>
            <h2 className="section-label">Context</h2>
            <p className="case-study-body">
              CDTs (Certificates of Deposit) are a cornerstone of Colombian retail banking. At Banco
              de Bogotá — one of the country&apos;s largest traditional banks — the process was
              entirely analog: customers visited branches, filled out paper forms, and waited days
              for confirmation. The bank was losing investment volume to digital-native competitors.
              The ask: design a mobile-first experience that educates users, reduces friction, and
              drives adoption — without compromising regulatory compliance.
            </p>
          </Reveal>
        </section>

        <section className="case-study-section">
          <Reveal>
            <h2 className="section-label">My role</h2>
            <p className="case-study-body">
              End-to-end Product Designer. Led research, information architecture, interaction
              design, and delivery in close collaboration with risk, compliance, brand, and product
              stakeholders.
            </p>
          </Reveal>
        </section>

        <section className="case-study-section">
          <Reveal>
            <h2 className="section-label">Research &amp; Discovery</h2>
            <p className="case-study-body">
              I led a comprehensive research phase before any screen was designed:
            </p>
            <ul className="case-study-list">
              {researchPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="case-study-note">
              Note on Hotjar: heatmap analysis was conducted after the digital product launched —
              not during the analog research phase — to validate drop-off patterns in the new flow and
              inform future iterations.
            </p>
          </Reveal>
        </section>

        <section className="case-study-section">
          <Reveal>
            <h2 className="section-label">Key design decisions</h2>
            <div className="case-study-decisions">
              {decisions.map((decision) => (
                <article key={decision.num} className="case-study-decision-card">
                  <span className="case-study-decision-num">{decision.num}</span>
                  <h3 className="case-study-decision-title">{decision.title}</h3>
                  <p className="case-study-decision-body">{decision.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="case-study-section">
          <Reveal>
            <h2 className="section-label">Impact</h2>
            <ul className="case-study-impact-list">
              {impactPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <nav className="case-study-bottom-nav" aria-label="Case study navigation">
          <Link to="/" className="case-study-nav-link">
            ← Work
          </Link>
          <Link to="/work/mastercard" className="case-study-nav-link case-study-nav-link--next">
            Next project →
          </Link>
        </nav>
      </main>
    </div>
  )
}
