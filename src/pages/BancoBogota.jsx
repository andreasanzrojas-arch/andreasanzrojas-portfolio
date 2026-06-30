import { Link } from '../lib/router'

const images = {
  hero: 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2f16d675-2b06-448a-828b-e36663233340/Captura+de+pantalla+2025-03-10+a+las+8.44.05%E2%80%AFp.%E2%80%AFm..png',
  screen1:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/783ca3ea-61de-491c-987f-55d483b38ea0/Captura+de+pantalla+2025-03-10+a+las+8.43.59%E2%80%AFp.%E2%80%AFm..png',
  screen2:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6b419d96-b7fb-46bc-ab05-9028d8bc5b4d/Captura+de+pantalla+2025-03-10+a+las+9.10.15%E2%80%AFp.%E2%80%AFm..png',
  screen3:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/889e4967-4939-4819-a24b-b1828e070c96/Captura+de+pantalla+2025-03-21+a+las+3.00.51%E2%80%AFp.%E2%80%AFm..png',
  screen4:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/e62e7cf3-395d-4496-b41d-39d8a10e7b69/Captura+de+pantalla+2025-03-10+a+las+9.11.39%E2%80%AFp.%E2%80%AFm..png',
  screen5:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/09486141-cb32-4fa0-8f2e-de5b958bd4e1/Captura+de+pantalla+2025-03-10+a+las+9.03.28%E2%80%AFp.%E2%80%AFm..png',
  screen6:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/b8da4f57-01f0-4a93-a4d3-b6b642d86b43/Captura+de+pantalla+2025-03-10+a+las+9.05.07%E2%80%AFp.%E2%80%AFm..png',
  screen7:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/3b4f5c6e-55bb-4f3f-b88f-2b1e3aefc267/Captura+de+pantalla+2025-03-10+a+las+9.07.45%E2%80%AFp.%E2%80%AFm..png',
  screen8:
    'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6654e242-6ff5-4e3a-b31d-a1e433d1e7ee/Captura+de+pantalla+2025-03-10+a+las+9.06.19%E2%80%AFp.%E2%80%AFm..png',
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

        <img src={images.hero} alt="CDT Banco de Bogotá simulator" className="cs-img-full" />

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
              Journey mapping revealed a 12-step analog process with 70% abandonment at the document
              upload stage
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
          <img src={images.screen1} alt="CDT flow research" className="cs-img" />
          <img src={images.screen2} alt="CDT journey mapping" className="cs-img" />
        </div>

        <section className="cs-section">
          <p className="cs-label">Key design decisions</p>
          <div className="cs-decisions">
            <div className="cs-decision">
              <span className="cs-decision-num">01</span>
              <h3>Progressive disclosure</h3>
              <p>
                Collapsed the 12-step flow into 3 decision points. Complexity surfaces only when
                the user needs it — not upfront.
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

        <img src={images.screen3} alt="CDT simulator tool" className="cs-img-full" />
        <div className="cs-img-grid-2">
          <img src={images.screen4} alt="CDT account selection" className="cs-img" />
          <img src={images.screen5} alt="CDT product conditions" className="cs-img" />
        </div>
        <div className="cs-img-grid-2">
          <img src={images.screen6} alt="CDT educational content" className="cs-img" />
          <img src={images.screen7} alt="CDT confirmation screen" className="cs-img" />
        </div>
        <img src={images.screen8} alt="CDT final flow" className="cs-img-full" />

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
