import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyGlobalPayments() {
  return (
    <CaseStudyCSIA
      tag="Banking · Enterprise · Global Payments"
      title="One App. Four Merchant Capabilities. Zero Branch Visits."
      summary="Designed the end-to-end merchant banking platform — POS terminal acquisition, fiscal address validation, online marketplace, loyalty rewards, and biometric security in a single mobile experience. Led UX research, interaction design, and high-fidelity prototype from discovery to handoff."
      heroImage="/assets/projects/globalpayments/hero.png"
      heroAlt="GlobalPayments merchant banking platform — acquisition, marketplace, loyalty and biometric flows"
      client="Mastercard"
      clientDisclaimer="Name changed · Client confidential"
      role="Lead Product Designer"
      chips={['Merchant activation reduced from days to minutes']}
      context="A major bank needed to modernize how small businesses and enterprises access merchant banking services. Getting a POS terminal (datáfono) required branch visits and physical paperwork. Fiscal address validation was manual and error-prone. Selling online meant using unrelated third-party platforms the bank had no visibility into. The loyalty program existed but was invisible. The goal: consolidate four critical merchant needs — POS acquisition, online marketplace, loyalty, and contextual help — into a single self-service mobile platform."
      myRole="Lead Product Designer (end-to-end). I owned the full UX process — discovery research, co-facilitation of the Design Thinking workshop alongside a dedicated facilitator, information architecture, interaction design, and high-fidelity prototype. I collaborated with product, compliance, and engineering teams across the bank to align on business and regulatory constraints before any screen was designed."
      signal="Small business merchants had no single path to access the bank's services. Four needs, four separate processes — all requiring branch visits or manual steps. The opportunity was to unify merchant acquisition, digital commerce, loyalty, and support into one guided mobile flow that takes a merchant from application to first payment without ever visiting a branch."
      influence="Research exposed where merchants were failing — and why."
      influenceBullets={[
        'Personas: Sienna (small business owner — needs speed and simplicity) and Mateo (company manager — needs compliance and control)',
        'Journey mapping revealed 5 critical drop-off points: discovery, document submission, fiscal address validation, terminal selection, and post-activation abandonment',
        'Key insight: most merchants were unaware the bank offered an online marketplace — they were paying for third-party platforms instead',
        'Design Thinking workshop with product and stakeholders: 15 ideas generated → 5 selected for prototyping',
      ]}
      researchImages={[]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'Map-based fiscal address validation',
          body: 'The fiscal compliance step — verifying the merchant\'s registered physical business address — was the top drop-off point in the old process. Dense form fields were replaced with a map interface: merchants confirm their business location visually, not manually. Regulatory compliance stays intact; friction drops significantly.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008%3A11342',
          img: { src: '/assets/projects/globalpayments/gp-d01-location.png', alt: 'Map-based fiscal address validation — merchant locates business on map' },
        },
        {
          num: '02',
          title: 'Guided POS terminal selection',
          body: 'Merchants choose from 3 datáfono types matched to their business model and transaction volume. A "Recomendado" badge surfaces the best option based on their profile — reducing post-activation returns and wrong-device complaints.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4058-12792&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4058%3A12792',
          img: { src: '/assets/projects/globalpayments/gp-d02-terminal.png', alt: 'POS terminal selection — Selecciona tu terminal with three datáfono options' },
        },
        {
          num: '03',
          title: 'Biometric setup at onboarding',
          body: 'Face ID and fingerprint authentication configured once — during onboarding — and reused across the entire platform: payment approvals, marketplace management, and account access. Security built in, not bolted on.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4074-16972&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4074%3A16972',
          img: { src: '/assets/projects/globalpayments/gp-d03-biometric.png', alt: 'Biometric settings — Face ID and fingerprint toggles enabled' },
        },
        {
          num: '04',
          title: 'Multi-channel contextual support',
          body: 'Support surfaced at every complex step — not as a static FAQ but as an inline choice: phone, email, or chat, contextually triggered at each friction point. Merchants get answers without leaving the flow, reducing support volume without adding screen complexity.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4054-11763&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4054%3A11763',
          img: { src: '/assets/projects/globalpayments/gp-d04-help.png', alt: 'Multi-channel support — phone, email and chat options inline' },
        },
        {
          num: '05',
          title: 'Loyalty & gamification engine',
          body: 'A points-based loyalty system rewards merchants for completing onboarding milestones, activating their online marketplace, publishing products, and hitting transaction goals. Level progression (Bronce → Plata → Oro) makes engagement post-activation trackable and motivating.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4066-15675&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4066%3A15675',
          img: { src: '/assets/projects/globalpayments/gp-d05-loyalty.png', alt: 'Loyalty dashboard — 150 puntos, nivel Bronce, benefits and level progression' },
        },
        {
          num: '06',
          title: 'Unified merchant home dashboard',
          body: 'After completing onboarding, merchants land on a single dashboard showing their account, store metrics, marketplace status, and loyalty points. Four previously disconnected systems — acquisition, commerce, loyalty, and support — surface in one view. The platform feels complete from day one.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4048-11590&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4048%3A11590',
          img: { src: '/assets/projects/globalpayments/gp-d06-marketplace.png', alt: 'Merchant home dashboard — account, Tu tienda metrics, Marketplace and Lealtad in one view' },
        },
      ]}
      decisionImages={[]}
      galleryImages={[]}
      outcomes={[
        'Merchant activation reduced from a multi-day branch process to a self-service mobile flow',
        'Online marketplace adoption increased — merchants reached digital storefront setup through the same onboarding journey',
        'Biometric authentication configured inline at onboarding — no separate session required',
        'Customer service surfaced contextually at every high-friction step — chat, phone, and email support tailored to the needs of each user type',
        'Scalable platform architecture supports future payment product rollouts without redesign',
      ]}
      prototype="https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments-%2F-Adquisici%C3%B3n?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008%3A11342"
      nextProject={{
        title: "Redesigning the Digital Banking Experience for One of Latin America's Largest Banks",
        href: '/work/monoma',
      }}
    />
  )
}
