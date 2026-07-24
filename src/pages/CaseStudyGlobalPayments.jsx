import CaseStudyCSIA from '../components/CaseStudyCSIA'
import SEO from '../components/SEO'

const FIGMA_FILE =
  'https://www.figma.com/proto/67d6mjusCraKbgFnS6xTv3/Bank-01-Globalpayments---Adquisici%C3%B3n'
const figma = (nodeId) =>
  `${FIGMA_FILE}?page-id=31%3A10939&node-id=${nodeId}&scaling=scale-down&content-scaling=fixed&starting-point-node-id=${nodeId}`

export default function CaseStudyGlobalPayments() {
  return (
    <>
      <SEO
        title="One App. Four Merchant Capabilities. Zero Branch Visits."
        description="Designed the end-to-end merchant banking platform for a major bank via Mastercard — POS acquisition, address verification, online marketplace, loyalty, and biometric security."
        image="/assets/projects/globalpayments/screens-overview.png"
        url="https://andreasanzrojas.com/work/mastercard"
      />
      <CaseStudyCSIA
        tag="Banking · Enterprise · Global Payments"
        title="One App. Four Merchant Capabilities. Zero Branch Visits."
        summary="Designed the end-to-end merchant banking platform — POS terminal acquisition, business-address verification, online marketplace, loyalty rewards, and biometric security in a single mobile experience. Led UX research, interaction design, and high-fidelity prototype from discovery to handoff."
        heroImage="/assets/projects/globalpayments/gp-home-dashboard.png"
        heroAlt="GlobalPayments merchant banking platform — acquisition, marketplace, loyalty and biometric flows"
        client="Mastercard"
        clientDisclaimer="Name changed · Client confidential"
        role="Senior Product Experience Designer"
        chips={['Designed to move merchant activation from multi-day branch process to mobile self-service']}
        context="A major bank needed to modernize how small businesses and enterprises access merchant banking services. Getting a POS terminal (datáfono) required branch visits and physical paperwork. Business-address verification was manual and error-prone. Selling online meant using unrelated third-party platforms the bank had no visibility into. The loyalty program existed but was invisible. The goal: consolidate four critical merchant needs — POS acquisition, online marketplace, loyalty, and contextual help — into a single self-service mobile platform."
        myRole="Senior Product Experience Designer (end-to-end). I owned the full UX process — discovery research, co-facilitation of the Design Thinking workshop alongside a dedicated facilitator, information architecture, interaction design, and high-fidelity prototype. I collaborated with product, compliance, and engineering teams across the bank to align on business and regulatory constraints before any screen was designed."
        signal="The problem wasn't that merchants didn't want digital banking services. It was that the bank's services were fragmented across four separate acquisition paths — none of them mobile, all of them requiring branch visits or physical paperwork. A small business owner who needed a POS terminal, wanted to sell online, needed to manage their business address, and was eligible for a loyalty program had to initiate four separate processes with four separate timelines. The opportunity was to unify all four into a single mobile onboarding journey — one that a merchant could complete in a single session without leaving their business."
        influence="Research exposed where merchants were failing — and why."
        influenceBullets={[
          'Project personas used to guide design decisions: Sienna (small-business merchant archetype — speed and simplicity) and Mateo (company-manager archetype — compliance and control). Sienna appears throughout the prototype.',
          'Journey mapping exposed friction across discovery, document submission, business-address verification, terminal selection, and post-activation.',
          'Key insight: most merchants were unaware the bank offered an online marketplace — they were paying for third-party platforms instead',
          'Design Thinking workshop with product and stakeholders: 15 ideas generated → 5 selected for prototyping',
        ]}
        researchImages={[]}
        artifact="The bank had four critical merchant services — POS terminal acquisition, business-address verification, online marketplace, loyalty rewards — and four completely separate processes to access them, none of them mobile. The design wasn't a series of screens. It was the architecture of a single guided onboarding flow that routes a merchant from first contact to first activated service without ever visiting a branch. Each decision in the flow addresses a specific reason merchants stalled before activation: clear address-evidence guidance reduces ambiguity about what to submit; guided terminal selection reduces wrong-device choices; Face ID and fingerprint enrollment lowers friction for later authenticated actions; marketplace setup sits inside the same high-intent session; and loyalty makes completion feel like a beginning, not an endpoint. Strip any one of those decisions out and you reintroduce a point of complexity in the journey."
        artifactImages={false}
        decisions={[
          {
            num: '01',
            title: 'Document and video-based business address verification',
            body: 'Business-address verification was required during onboarding. Instead of leaving merchants to guess what evidence the bank needed, the flow guides them to prepare a document confirming the business address and a short video showing the business together with that document. Document and video capture sit inside the mobile onboarding experience, so the compliance requirement is expressed as a clear preparation checklist rather than an ambiguous request. The evidence reduced ambiguity about what the merchant needed to provide before continuing.',
            href: figma('4034-2560'),
            img: {
              src: '/assets/projects/globalpayments/gp-d01-ubicacion.png',
              alt: 'Ubicación del negocio — document and video guidance for business-address verification',
            },
          },
          {
            num: '02',
            title: 'Guided POS terminal selection',
            body: 'The bank offered three POS terminal models with different connectivity, transaction capacity, and price points. Presenting them as equivalent technical options made it hard for merchants to choose the right fit. The guided selection flow maps each merchant\'s profile (business type, transaction volume, connectivity) to a recommendation shown with a "Recomendado" badge, while still showing all three options for merchants who want to choose independently. The architectural decision: the system should have a recommendation, not just options.',
            href: figma('4058-12792'),
            img: {
              src: '/assets/projects/globalpayments/gp-d02-terminal.png',
              alt: 'POS terminal selection — Selecciona tu terminal with three datáfono options',
            },
          },
          {
            num: '03',
            title: 'Loyalty and gamification engine',
            body: 'A points-based loyalty system makes post-activation engagement visible inside the product. Merchants see their Bronze-tier status and balance, the benefits attached to that tier, and a concrete path to Silver through challenges with exact point values. Points, rewards, and level-up actions stay in-app rather than as a separate program merchants have to discover later.',
            href: figma('4066-15021'),
            mediaLayout: 'hero-pair-support',
            imgs: [
              {
                src: '/assets/projects/globalpayments/gp-d03-loyalty-status.png',
                alt: 'Loyalty status — Eres nivel Bronce with 150 puntos balance',
                caption: 'Bronze status',
              },
              {
                src: '/assets/projects/globalpayments/gp-d03-loyalty-benefits.png',
                alt: 'Tus beneficios — end-of-month bonuses, preferential advice, and early promotions',
                caption: 'Bronze benefits',
              },
              {
                src: '/assets/projects/globalpayments/gp-d03-loyalty-plata.png',
                alt: 'Subir de nivel — challenges and point values to reach nivel Plata',
                caption: 'Path to Silver',
              },
            ],
          },
          {
            num: '04',
            title: 'Face ID and fingerprint enrollment',
            body: 'Biometric security is available in the product so merchants can enable Face ID and fingerprint for lower-friction authentication. The Biométricos screen explains cardless payment and in-app transaction management, with independent toggles for each method. Enrollment lives in the security settings surface — accessible after authentication — rather than as a separate deferred task merchants have to invent for themselves.',
            href: figma('4074-16972'),
            img: {
              src: '/assets/projects/globalpayments/gp-d03-biometric.png',
              alt: 'Biométricos settings — Face ID and fingerprint toggles enabled',
            },
          },
          {
            num: '05',
            title: 'Online marketplace embedded in onboarding',
            body: 'Research showed many merchants did not know the bank offered an online marketplace and were paying third-party platforms instead. Marketplace setup was treated as a discovery problem, not an upsell: the value proposition appears inside onboarding, merchants choose a storefront style (Clásico, Moderno, or Personalizado), and the flow ends in a confirmed store-creation state. Embedding this path in the same high-intent session creates a direct route from POS activation to a merchant storefront the bank already provided but was not communicating.',
            href: figma('4063-2388'),
            mediaLayout: 'hero-pair-support',
            imgs: [
              {
                src: '/assets/projects/globalpayments/gp-d05-marketplace-intro.png',
                alt: 'Marketplace value proposition — Vende tus productos en el marketplace',
                caption: 'Discovery',
              },
              {
                src: '/assets/projects/globalpayments/gp-d05-marketplace-styles.png',
                alt: 'Storefront style selection — Clásico, Moderno, Personalizado',
                caption: 'Customization',
              },
              {
                src: '/assets/projects/globalpayments/gp-d05-marketplace-done.png',
                alt: 'Store created — Felicitaciones Sienna confirmation',
                caption: 'Completion',
              },
            ],
          },
          {
            num: '06',
            title: 'Contextual support embedded in the flow',
            body: 'Help is accessible from within the product experience rather than as a separate support destination. From the authenticated home screen, a persistent help trigger opens a choice of phone, email, or chat — so merchants can get assistance without being redirected to an external support center. Support stays attached to the same session where friction appears.',
            href: figma('4076-17649'),
            mediaLayout: 'equal-pair',
            imgs: [
              {
                src: '/assets/projects/globalpayments/gp-d06-support-home.png',
                alt: 'Authenticated home with persistent help trigger in the header',
                caption: 'Help in product',
              },
              {
                src: '/assets/projects/globalpayments/gp-d04-help.png',
                alt: 'Ayuda modal — phone, email, and chat support options',
                caption: 'Channel choice',
              },
            ],
          },
        ]}
        decisionImages={[]}
        galleryImages={[]}
        outcomes={[
          'Enabled merchants to complete acquisition through a self-service mobile flow instead of a multi-day branch process',
          'Created a path for marketplace storefront setup inside the same onboarding journey',
          'Integrated Face ID and fingerprint enrollment to reduce friction in later authenticated actions',
          'Embedded phone, email, and chat support inside the product experience at the point of need',
          'Consolidated fragmented merchant services — acquisition, marketplace, loyalty, and support — into one guided mobile experience',
        ]}
        prototype={`${FIGMA_FILE}?page-id=31%3A10939&node-id=4008-11342&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4008-11342`}
        nextProject={{
          number: '04',
          client: 'Mastercard · Digital Banking',
          title: 'Modernizing Mobile Banking for Everyday Customers',
          href: '/work/monoma',
        }}
      />
    </>
  )
}
