import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyGlobalPayments() {
  return (
    <CaseStudyCSIA
      tag="Fintech · Enterprise · Global Payments"
      title="Simplifying Merchant Payment Adoption at Global Scale"
      summary="Designed the merchant acquisition module for a global payment platform — enabling small businesses and enterprises to onboard onto payment infrastructure, select POS terminals, and complete fiscal compliance verification. Led the full UX process from research to high-fidelity prototype."
      heroImage="/assets/projects/globalpayments/hero.png"
      heroAlt="GlobalPayments merchant onboarding platform hero screen showing the acquisition dashboard"
      client="Mastercard"
      clientDisclaimer="Name changed · Client confidential"
      role="Lead Product Designer"
      chips={['Merchant activation reduced from days to minutes']}
      context="Lead Product Designer (end-to-end). Facilitated Design Thinking workshop with product team and stakeholders."
      signal="Small businesses faced fragmented, time-consuming onboarding. Multiple touchpoints, unclear document submission, and manual terminal matching led to low activation rates and high support volume. Goal: get merchants from signup to first payment in minutes, not days."
      influence="Research grounded the redesign in real merchant behavior and compliance constraints."
      influenceBullets={[
        '12 in-depth merchant interviews + survey of 40 small business owners',
        'Personas: Sienna (small business owner, needs speed) and Mateo (company manager, needs compliance)',
        'Journey map: Discovery → Onboarding → Document Submission → Terminal Selection → Setup Completion',
        'Design Thinking workshop: 15 ideas → 5 for prototyping',
      ]}
      researchImages={[
        {
          src: '/assets/projects/globalpayments/screens-overview.png',
          alt: 'Merchant onboarding journey overview showing discovery through setup completion',
        },
      ]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'Map-based location verification',
          body: 'Compliance made visual and guided — merchants confirm their business location without navigating dense forms.',
        },
        {
          num: '02',
          title: 'Guided terminal selection',
          body: 'Merchants choose from 3 terminal types matched to their business type and transaction volume. A "Recomendado" badge reduced wrong-device selections post-activation.',
        },
        {
          num: '03',
          title: 'Biometric onboarding',
          body: 'Face ID and fingerprint authentication without extra friction at critical verification steps.',
        },
        {
          num: '04',
          title: 'Celebratory confirmation state',
          body: 'Reinforced completion and encouraged first transaction — turning onboarding into a milestone, not a chore.',
        },
        {
          num: '05',
          title: 'Contextual in-app help',
          body: 'Support surfaced at every complex step — reducing drop-off without increasing support ticket volume.',
        },
        {
          num: '06',
          title: 'Loyalty & gamification engine',
          body: 'A points-based system that rewards merchants for completing onboarding milestones, publishing products, and reaching transaction goals — increasing platform engagement post-activation.',
        },
        {
          num: '07',
          title: 'Merchant marketplace onboarding',
          body: 'Guided flow for merchants to set up their digital storefront — selecting product scope, business reach, and store template. Reduced marketplace setup time and improved first-sale conversion.',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/globalpayments/mobile-1.png',
          alt: 'Mobile merchant onboarding screen with map-based location verification',
        },
        {
          src: '/assets/projects/globalpayments/gp-terminal-selection.png',
          alt: 'Terminal selection screen showing NN Terminal BP, Terminal BP, and Paga todo BP options',
        },
        {
          src: '/assets/projects/globalpayments/mobile-3.png',
          alt: 'Mobile screen showing biometric verification step in merchant onboarding',
        },
        {
          src: '/assets/projects/globalpayments/success.png',
          alt: 'Merchant dashboard showing sales, marketplace and loyalty after onboarding',
        },
        {
          src: '/assets/projects/globalpayments/terminal-benefits.png',
          alt: 'Contextual in-app help screen showing terminal analytics and service benefits',
        },
        {
          src: '/assets/projects/globalpayments/lealtad.png',
          alt: 'Loyalty dashboard showing 150 merchant points, level progression, and challenges',
        },
        {
          src: '/assets/projects/globalpayments/marketplace.png',
          alt: 'Merchant marketplace showing store template selection — Clásico, Moderno, Personalizado',
        },
      ]}
      galleryImages={[
        {
          src: '/assets/projects/globalpayments/screens-2.png',
          alt: 'Merchant onboarding screens showing fiscal compliance verification steps',
        },
        {
          src: '/assets/projects/globalpayments/results.png',
          alt: 'Project results summary showing improved merchant activation metrics',
        },
      ]}
      outcomes={[
        'Reduced merchant activation from multi-day to minutes',
        'Increased adoption rates Q1 post-launch',
        'Improved terminal match rate post-activation',
        'Scalable foundation for future payment solution rollouts',
      ]}
      prototype="https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments-%2F-Adquisici%C3%B3n?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008%3A11342"
      nextProject={{
        title: "Redesigning the Digital Banking Experience for One of Latin America's Largest Banks",
        href: '/work/monoma',
      }}
    />
  )
}
