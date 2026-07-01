import { Link } from '../lib/router'

const images = {
  research1:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/783ca3ea-61de-491c-987f-55d483b38ea0/Captura+de+pantalla+2025-03-10+a+las+8.43.59%E2%80%AFp.%E2%80%AFm..png',
}

export default function BancoBogota() {
  return (
    <div className="case-study-shell">
      <div className="case-study-page">
        <Link to="/" className="cs-back">
          ← Work
        </Link>

        <header className="cs-hero">
          <div className="cs-tags">
            <span>Banking</span>
            <span>Colombia</span>
            <span>Mobile · Web</span>
            <span>2021–2022</span>
          </div>
          <h1 className="cs-headline">Rebuilding Digital Investing at Colombia&apos;s Largest Bank</h1>
          <p className="cs-subline">
            End-to-end redesign of Banco de Bogotá&apos;s CDT product — turning a 12-step analog
            process into a mobile-first digital flow.
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
          <p className="cs-label">Context</p>
          <p className="cs-body">
            CDTs (Certificates of Deposit) are a cornerstone of Colombian retail banking. At Banco de
            Bogotá — one of the country&apos;s largest traditional banks — the process was entirely
            analog: customers visited branches, filled out paper forms, and waited days for
            confirmation. The bank was losing investment volume to digital-native competitors. The
            ask: design a mobile-first experience that educates users, reduces friction, and drives
            adoption — without compromising regulatory compliance.
          </p>
        </section>

        <section className="cs-section cs-meta-grid">
          <div>
            <p className="cs-label">My role</p>
            <p className="cs-body">
              End-to-end Product Designer. I owned the full design process — from initial research
              and stakeholder alignment through UX design, prototyping, and post-launch data capture.
              I collaborated with risk, compliance, brand, and product teams across Banco de
              Bogotá.
            </p>
          </div>
          <div>
            <p className="cs-label">Collaborators</p>
            <p className="cs-body">
              Risk, compliance, brand, and product stakeholders across Banco de Bogotá.
            </p>
          </div>
          <div>
            <p className="cs-label">Methodology</p>
            <p className="cs-body">Design Thinking · Usability Testing</p>
          </div>
        </section>

        <section className="cs-section">
          <p className="cs-label">Research &amp; Discovery</p>
          <ul className="cs-list">
            <li>Applied Design Thinking methodology from discovery through validation</li>
            <li>
              40 qualitative interviews and card-sorting sessions to segment users by risk profile
              and financial literacy
            </li>
            <li>
              Journey mapping revealed a 12-step fully analog process: branch visits, physical
              paperwork, and multi-day waiting times
            </li>
            <li>
              Key finding: the document burden was the main barrier — customers had to gather and
              physically present multiple documents just to open a CDT
            </li>
            <li>Built 3 personas with distinct financial literacy levels and trust thresholds</li>
            <li>
              Aligned risk, compliance, brand, and product stakeholders before any screens were
              designed
            </li>
          </ul>
          <p className="cs-body cs-note">
            Note: Hotjar heatmap analysis was conducted after the digital product launched — not
            during the analog research phase — to validate drop-off patterns in the new flow and
            inform future iterations.
          </p>
        </section>

        <div className="cs-hero-wrap">
          <img src={images.research1} alt="CDT journey mapping" className="cs-img-full" />
        </div>

        <section className="cs-section">
          <p className="cs-label">Key design decisions</p>
          <div className="cs-decisions">
            <div className="cs-decision">
              <span className="cs-decision-num">01</span>
              <h3>3-step digital flow</h3>
              <p>
                The 12-step analog process was redesigned into 3 steps: Simulate, Validate data,
                Confirm. What required a branch visit, physical documents, and days of waiting now
                takes minutes in the app.
              </p>
            </div>
            <div className="cs-decision">
              <span className="cs-decision-num">02</span>
              <h3>Simulate Your Investment</h3>
              <p>
                Designed a simulation tool on the landing screen so users could see projected returns
                before committing. Addressed decision anxiety and increased intent to complete.
              </p>
            </div>
            <div className="cs-decision">
              <span className="cs-decision-num">03</span>
              <h3>Transparent conditions</h3>
              <p>
                Legal terms and rates surfaced inline at the confirmation step — not buried in a PDF.
                Trust built without adding friction.
              </p>
            </div>
            <div className="cs-decision">
              <span className="cs-decision-num">04</span>
              <h3>Auto-renewal transparency</h3>
              <p>
                CDT customers were automatically re-invested at maturity without explicit consent —
                a major source of complaints. The digital flow gives users full control: a clear
                renewal toggle at confirmation, and the ability to cancel auto-renewal directly from
                the app at any time.
              </p>
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
          <p className="cs-label">Impact</p>
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
        </section>

        <div className="cs-next">
          <Link to="/work/mastercard" className="cs-next-link">
            Next project — GlobalPayments →
          </Link>
        </div>
      </div>
    </div>
  )
}
