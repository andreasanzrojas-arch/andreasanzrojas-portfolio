import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyBancoBogota() {
  return (
    <CaseStudyCSIA
      tag="Banking · Colombia · 2021–2022"
      title="Rebuilding Digital Investing at Colombia's Largest Bank"
      summary="End-to-end redesign of Banco de Bogotá's CDT product — turning a 12-step analog process into a digital flow. Led research, UX design, visual UI, and post-launch validation."
      heroImage="/assets/projects/banco-bogota/bdb-landing.png"
      heroAlt="Banco de Bogotá CDT digital investment simulator"
      client="Banco de Bogotá"
      role="Lead Product Designer"
      chips={['+30% digital CDT openings post-launch', '12 → 3 steps']}
      context="End-to-end Product Designer. I owned the full design process — from initial research and stakeholder alignment through UX design, prototyping, and post-launch data capture. I also led the visual UI design — from component definition to final screens. Collaborated with risk, compliance, brand, and product teams across Banco de Bogotá using Design Thinking methodology."
      signal="CDTs (Certificates of Deposit) were a cornerstone of Colombian banking, but the process at Banco de Bogotá — one of the country's largest traditional banks — was entirely analog. Customers visited branches, filled out paper forms, and waited days for confirmation. The bank was losing investment volume to digital-native competitors. Goal: design a digital experience that educates users, reduces friction, and drives adoption — without compromising regulatory compliance."
      influence="Research grounded the redesign in real user behavior and compliance constraints."
      influenceBullets={[
        'Applied Design Thinking methodology from discovery through validation',
        '40 qualitative interviews and card-sorting sessions to segment users by risk profile and financial literacy',
        'Journey mapping revealed a 12-step fully analog process: branch visits, physical paperwork, and multi-day waiting times',
        'Key finding: the document burden was the main barrier — customers had to gather and physically present multiple documents just to open a CDT',
        'Built 3 personas with distinct financial literacy levels and trust thresholds',
        'Aligned risk, compliance, brand, and product stakeholders before any screens were designed',
        'Used Hotjar heatmaps post-launch to measure user behavior and created conversion funnels to validate drop-off patterns',
      ]}
      researchImages={[
        {
          src: '/assets/projects/banco-bogota/bdb-journey-map.png',
          alt: 'CDT user journey map showing the 12-step analog process',
        },
      ]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: '3-step digital flow',
          body: 'The 12-step analog process was redesigned into 3 steps: Simulate, Validate, Confirm. What required a branch visit, physical documents, and days of waiting now takes minutes in the app.',
        },
        {
          num: '02',
          title: 'Simulate your investment',
          body: 'A simulation tool on the landing screen lets users see projected returns before committing. Addressed decision anxiety and increased intent to complete.',
        },
        {
          num: '03',
          title: 'Transparent conditions',
          body: 'Legal terms and rates surfaced inline at the confirmation step — not buried in a PDF. Trust built without adding friction.',
        },
        {
          num: '04',
          title: 'Auto-renewal transparency',
          body: 'CDT customers were automatically re-invested at maturity without explicit consent — a major source of complaints. The digital flow gives users full control: a clear renewal toggle at confirmation, and the ability to manage renewals directly from the app.',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/banco-bogota/bdb-landing.png',
          alt: 'CDT landing screen showing the digital investment flow entry point',
        },
        {
          src: '/assets/projects/banco-bogota/bdb-simulator.png',
          alt: 'CDT investment simulator showing projected returns for different terms',
        },
        {
          src: '/assets/projects/banco-bogota/bdb-confirm.png',
          alt: 'CDT confirmation screen with rates, conditions inline, and auto-renewal toggle',
        },
        {
          src: '/assets/projects/banco-bogota/bdb-email.png',
          alt: 'CDT confirmation email with full breakdown and renewal management link',
        },
      ]}
      galleryImages={[
        {
          src: '/assets/projects/banco-bogota/bdb-account.png',
          alt: 'Account selection screen with pre-filled data — no forms, no documents',
        },
      ]}
      outcomes={[
        '+30% digital CDT openings post-launch',
        '12-step analog process → 3 digital steps: Simulate · Validate · Confirm',
        '0 physical documents required — fully digital',
        'Auto-renewal complaints reduced — users now manage renewals from the app',
      ]}
      nextProject={{
        title: "Simplifying Merchant Payment Adoption at Global Scale",
        href: '/work/mastercard',
      }}
    />
  )
}
