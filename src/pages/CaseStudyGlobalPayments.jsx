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
      signal="Small business merchants had no single path to access the bank's services. Four needs, four separate processes — none of them mobile. The opportunity was to unify merchant acquisition, digital commerce, loyalty, and support into one guided flow that takes a merchant from application to first payment without ever visiting a branch."
      influence="Research exposed where merchants were failing — and why."
      influenceBullets={[
        '12 in-depth merchant interviews across small business owners and company managers',
        'Survey of 40 merchants to validate friction points and rank priorities',
        'Personas: Sienna (small business owner — needs speed and simplicity) and Mateo (company manager — needs compliance and control)',
        'Journey mapping revealed 5 critical drop-off points: discovery, document submission, fiscal address validation, terminal selection, and post-activation abandonment',
        'Key insight: most merchants were unaware the bank offered an online marketplace — they were paying for third-party platforms instead',
        'Design Thinking workshop with product and stakeholders: 15 ideas generated → 5 selected for prototyping',
      ]}
      researchImages={[
        {
          src: '/assets/projects/globalpayments/screens-overview.png',
          alt: 'Merchant onboarding journey map showing the 5 critical friction points across the acquisition flow',
        },
      ]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'Map-based fiscal address validation',
          body: 'The fiscal compliance step — verifying the merchant\'s registered physical business address — was the top drop-off point in the old process. Dense form fields were replaced with a map interface: merchants confirm their business location visually, not manually. Regulatory compliance stays intact; friction drops significantly.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008%3A11342',
        },
        {
          num: '02',
          title: 'Guided POS terminal selection',
          body: 'Merchants choose from 3 datáfono types matched to their business model and transaction volume. A "Recomendado" badge surfaces the best option based on their profile — reducing post-activation returns and wrong-device complaints.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4058-12792&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4058%3A12792',
        },
        {
          num: '03',
          title: 'Biometric setup at onboarding',
          body: 'Face ID and fingerprint authentication configured once — during onboarding — and reused across the entire platform: payment approvals, marketplace management, and account access. Security built in, not bolted on.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4074-16972&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4074%3A16972',
        },
        {
          num: '04',
          title: 'Celebratory activation state',
          body: 'Completing onboarding is a business milestone. A celebratory confirmation screen marks the moment — reinforcing progress, surfacing the next available action, and encouraging first transaction within the same session.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4076-17649&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4076%3A17649',
        },
        {
          num: '05',
          title: 'Contextual in-app help',
          body: 'Instead of a static FAQ, help is surfaced inline at every complex step — fiscal validation, terminal selection, document submission. Merchants get answers without leaving the flow, reducing support calls without adding screen complexity.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4054-11763&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4054%3A11763',
        },
        {
          num: '06',
          title: 'Loyalty & gamification engine',
          body: 'A points-based loyalty system rewards merchants for completing onboarding milestones, activating their online marketplace, publishing products, and hitting transaction goals. Engagement post-activation goes from zero to trackable.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4066-15675&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4066%3A15675',
        },
        {
          num: '07',
          title: 'Online marketplace onboarding',
          body: 'The bank offered merchants their own digital storefront — but most had never heard of it. A guided setup flow embedded in the same app takes merchants from zero to their first online product listing: business category, geographic reach, store configuration. Same platform, new revenue channel.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4048-11590&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4048%3A11590',
        },
      ]}
      decisionImages={[]}
      galleryImages={[
        {
          src: '/assets/projects/globalpayments/screens-2.png',
          alt: 'Merchant platform screens showing fiscal validation, terminal selection, and marketplace setup',
        },
        {
          src: '/assets/projects/globalpayments/results.png',
          alt: 'Project outcomes — activation speed, marketplace adoption, and biometric setup completion',
        },
      ]}
      outcomes={[
        'Merchant activation reduced from a multi-day branch process to a self-service mobile flow',
        'Online marketplace adoption increased — merchants reached digital storefront setup through the same onboarding journey',
        'Biometric authentication configured inline at onboarding — no separate session required',
        'Contextual help reduced dependency on support calls at every high-friction step',
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
