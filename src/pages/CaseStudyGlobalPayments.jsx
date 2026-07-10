import CaseStudyCSIA from '../components/CaseStudyCSIA'
import SEO from '../components/SEO'

export default function CaseStudyGlobalPayments() {
  return (
    <>
      <SEO
        title="One App. Four Merchant Capabilities. Zero Branch Visits."
        description="Designed the end-to-end merchant banking platform for a major bank via Mastercard — POS acquisition, fiscal validation, online marketplace, loyalty, and biometric security in a single mobile flow."
        image="/assets/projects/globalpayments/screens-overview.png"
        url="https://andreasanzrojas.com/work/mastercard"
      />
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
      signal="The problem wasn't that merchants didn't want digital banking services. It was that the bank's services were fragmented across four separate acquisition paths — none of them mobile, all of them requiring branch visits or physical paperwork. A small business owner who needed a POS terminal, wanted to sell online, needed to manage their fiscal address, and was eligible for a loyalty program had to initiate four separate processes with four separate timelines. The opportunity was to unify all four into a single mobile onboarding journey — one that a merchant could complete in a single session without leaving their business."
      influence="Research exposed where merchants were failing — and why."
      influenceBullets={[
        'Personas: Sienna (small business owner — needs speed and simplicity) and Mateo (company manager — needs compliance and control)',
        'Journey mapping revealed 5 critical drop-off points: discovery, document submission, fiscal address validation, terminal selection, and post-activation abandonment',
        'Key insight: most merchants were unaware the bank offered an online marketplace — they were paying for third-party platforms instead',
        'Design Thinking workshop with product and stakeholders: 15 ideas generated → 5 selected for prototyping',
      ]}
      researchImages={[]}
      artifact="The bank had four critical merchant services — POS terminal acquisition, fiscal address validation, online marketplace, loyalty rewards — and four completely separate processes to access them, none of them mobile. The design wasn't a series of screens. It was the architecture of a single guided onboarding flow that routes a merchant from first contact to first activated service without ever visiting a branch. Each decision in the flow solves a specific reason why merchants were dropping off before activation: the map interface resolves the compliance step that generated the most form errors; the guided terminal selection eliminates wrong-device returns; the biometric setup at onboarding rather than first use means security never becomes a separate task; and the loyalty engine makes the completion moment feel like a beginning, not an endpoint. Strip any one of those decisions out and you don't just lose a feature — you reintroduce a drop-off point."
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'Map-based fiscal address validation',
          body: 'Fiscal address validation — verifying a merchant\'s registered physical business address for compliance — was the highest drop-off step in the original acquisition flow. The reason wasn\'t that merchants didn\'t have a business address. It was that the form asked for a street-level text entry that didn\'t match how small business owners think about their location, and any mismatch with the bank\'s compliance database triggered a manual review that could take days. The design decision was to replace the text form with a map confirmation: merchants see a pin on their business location and confirm or adjust it visually. The compliance data is captured identically; the cognitive load is replaced with a single visual verification. Drop-off at the fiscal step dropped significantly. The insight: most form errors at this step were attention errors, not data errors.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008%3A11342',
          img: { src: '/assets/projects/globalpayments/gp-d01-location.png', alt: 'Map-based fiscal address validation — merchant locates business on map' },
        },
        {
          num: '02',
          title: 'Guided POS terminal selection',
          body: 'The bank offered three POS terminal models with different connectivity, transaction capacity, and price points. The original flow presented all three as equivalent options with technical specs — and merchants regularly selected wrong-fit devices, leading to returns and re-activation processes that added days to merchant onboarding. The guided selection flow maps each merchant\'s profile (business type, transaction volume, connectivity) to a recommendation shown with a "Recomendado" badge, while still showing all three options for merchants who want to choose independently. The architectural decision: the system should have a recommendation, not just options. Merchants who follow the recommendation require less post-activation support.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4058-12792&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4058%3A12792',
          img: { src: '/assets/projects/globalpayments/gp-d02-terminal.png', alt: 'POS terminal selection — Selecciona tu terminal with three datáfono options' },
        },
        {
          num: '03',
          title: 'Biometric setup at onboarding',
          body: 'Security setup — Face ID, fingerprint — is consistently treated as a separate task in financial apps: something you configure in settings after you\'ve already onboarded. The consequence is that most users never complete it, and the platform defaults to PIN-based authentication for all sensitive actions. The design decision was to integrate biometric setup as a required step during onboarding — not optional, not in settings, not a prompt shown later. A merchant who completes biometric setup during their first session has frictionless approval for every subsequent action: payment confirmation, marketplace management, account access. Built in during onboarding means it\'s never a separate task the user defers and forgets.',
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
          title: 'In-flow contextual help',
          body: 'Financial onboarding flows typically surface help content in one of two patterns: a static FAQ at the end, or a "?" icon that opens a modal the user has already passed the point where they needed it. Both patterns fail because they decouple help from the moment of confusion. The in-flow help design embeds contextual assistance at the exact three steps where drop-off was highest in research: fiscal validation, terminal selection, and document submission. At each step, a collapsible help panel surfaces the one or two most common questions for that step — not a general FAQ. Merchants get answers without leaving the flow; the bank avoids support call volume at the steps that generated the most.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4054-11763&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4054%3A11763',
          img: { src: '/assets/projects/globalpayments/gp-d04-help.png', alt: 'In-flow contextual help — collapsible assistance at high drop-off steps' },
        },
        {
          num: '06',
          title: 'Loyalty & gamification engine',
          body: 'A points-based loyalty system rewards merchants for completing onboarding milestones, activating their online marketplace, publishing products, and hitting transaction goals. Level progression (Bronce → Plata → Oro) makes engagement post-activation trackable and motivating.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4066-15675&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4066%3A15675',
          img: { src: '/assets/projects/globalpayments/gp-d05-loyalty.png', alt: 'Loyalty dashboard — 150 puntos, nivel Bronce, benefits and level progression' },
        },
        {
          num: '07',
          title: 'Online marketplace embedded in onboarding',
          body: 'Research revealed that most merchants were unaware the bank offered an online marketplace. They were paying third-party platforms — Rappi, MercadoLibre — for storefront services the bank already provided at no additional cost. The marketplace onboarding wasn\'t an upsell. It was a service discovery problem: merchants who didn\'t know it existed couldn\'t choose to use it. Embedding the marketplace setup step inside the same onboarding flow — immediately after POS activation, when the merchant is already in a high-intent session — means the discovery moment happens at the right time. A guided setup flow takes them from zero to a live product listing: category, geographic reach, store configuration. The architectural decision: don\'t treat it as a feature. Treat it as a channel the bank was already providing but not communicating.',
          href: 'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n?page-id=31%3A10939&node-id=4048-11590&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4048%3A11590',
          img: { src: '/assets/projects/globalpayments/frames/Marketplace__2003-11072.png', alt: 'Online marketplace setup — guided store configuration during onboarding' },
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
        number: '03',
        client: 'Mastercard',
        title: 'Designing the Full Digital Banking Experience for One of Latin America\'s Largest Banks',
        href: '/work/monoma',
      }}
    />
    </>
  )
}
