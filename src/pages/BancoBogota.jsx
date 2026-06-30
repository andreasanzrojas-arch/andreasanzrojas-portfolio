import { Link } from '../lib/router'

const images = {
  research1:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/783ca3ea-61de-491c-987f-55d483b38ea0/Captura+de+pantalla+2025-03-10+a+las+8.43.59%E2%80%AFp.%E2%80%AFm..png',
  research2:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6b419d96-b7fb-46bc-ab05-9028d8bc5b4d/Captura+de+pantalla+2025-03-10+a+las+9.10.15%E2%80%AFp.%E2%80%AFm..png',
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
            src="https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2f16d675-2b06-448a-828b-e36663233340/Captura+de+pantalla+2025-03-10+a+las+8.44.05%E2%80%AFp.%E2%80%AFm..png"
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
              End-to-end Product Designer. Led research, IA, interaction design, and delivery.
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
          <p className="cs-body">
            Before opening Figma, I led a comprehensive research phase to understand both user needs
            and business constraints:
          </p>
          <ul className="cs-list">
            <li>
              40 qualitative interviews and card-sorting sessions to segment user intent —
              risk-averse savers vs. growth-oriented investors
            </li>
            <li>3 personas built with distinct financial literacy levels and trust thresholds</li>
            <li>
              Journey mapping revealed a 12-step fully analog process — customers had to visit
              branches, complete paper forms, and wait days for confirmation. There was no digital
              flow to abandon.
            </li>
            <li>
              Stakeholder alignment sessions with risk, compliance, and product teams using Design
              Thinking to align on scope
            </li>
          </ul>
          <p className="cs-body cs-note">
            Note: Hotjar heatmap analysis was conducted after the digital product launched — not
            during the analog research phase — to validate drop-off patterns in the new flow and
            inform future iterations.
          </p>
        </section>

        <div className="cs-img-grid-2">
          <img src={images.research1} alt="CDT flow research" className="cs-img" />
          <img src={images.research2} alt="CDT journey mapping" className="cs-img" />
        </div>

        <section className="cs-section">
          <p className="cs-label">Key design decisions</p>
          <div className="cs-decisions">
            <div className="cs-decision">
              <span className="cs-decision-num">01</span>
              <h3>3-step digital flow</h3>
              <p>
                The 12-step analog branch process was redesigned as a 3-step digital flow. What
                used to require a branch visit, paper forms, and days of waiting now happens
                entirely in the app.
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
          </div>
        </section>

        <section className="cs-section">
          <p className="cs-label">The flow</p>
          <p className="cs-body">
            A 12-step analog branch process redesigned into 3 digital steps.
          </p>

          <div className="cs-flow-grid">
            <div className="cs-flow-item">
              <span className="cs-flow-step">01</span>
              <p className="cs-flow-caption">Simulate your investment</p>
              <p className="cs-flow-desc">
                Users enter amount, term and salary range — the system shows 3 personalised CDT
                options with projected returns before any commitment.
              </p>
              <div className="cs-flow-laptop-wrap">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/09486141-cb32-4fa0-8f2e-de5b958bd4e1/Captura+de+pantalla+2025-03-10+a+las+9.03.28%E2%80%AFp.%E2%80%AFm..png"
                  alt="CDT simulator showing 3 investment options with rates"
                  className="cs-flow-laptop-img"
                />
              </div>
            </div>

            <div className="cs-flow-item">
              <span className="cs-flow-step">02</span>
              <p className="cs-flow-caption">Confirm data &amp; select account</p>
              <p className="cs-flow-desc">
                Personal data pre-filled from the bank&apos;s records. User selects the account to
                fund the CDT — no forms, no branch required.
              </p>
              <div className="cs-flow-laptop-wrap">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6654e242-6ff5-4e3a-b31d-a1e433d1e7ee/Captura+de+pantalla+2025-03-10+a+las+9.06.19%E2%80%AFp.%E2%80%AFm..png"
                  alt="Account selection screen for CDT transfer"
                  className="cs-flow-laptop-img"
                />
              </div>
            </div>

            <div className="cs-flow-item">
              <span className="cs-flow-step">03</span>
              <p className="cs-flow-caption">Review conditions &amp; open CDT</p>
              <p className="cs-flow-desc">
                Full CDT summary shown before final confirmation — rates, maturity date, returns,
                and auto-renewal toggle. Transparency built into the flow, not a PDF.
              </p>
              <div className="cs-flow-laptop-wrap">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/b8da4f57-01f0-4a93-a4d3-b6b642d86b43/Captura+de+pantalla+2025-03-10+a+las+9.05.07%E2%80%AFp.%E2%80%AFm..png"
                  alt="CDT summary screen with auto-renewal toggle"
                  className="cs-flow-laptop-img"
                />
              </div>
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
              <span className="cs-impact-desc">steps reduced with progressive disclosure</span>
            </div>
            <div className="cs-impact-item">
              <span className="cs-impact-num">MVP</span>
              <span className="cs-impact-desc">launched with roadmap for automated renewals</span>
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
