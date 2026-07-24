import CaseStudyCSIA from '../components/CaseStudyCSIA'
import SEO from '../components/SEO'

const FIGMA_FILE = 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA'
const figma = (nodeId) =>
  `${FIGMA_FILE}?page-id=31%3A10939&node-id=${nodeId}&scaling=scale-down&content-scaling=fixed&starting-point-node-id=${nodeId}`

export default function CaseStudyMonoma() {
  return (
    <>
      <SEO
        title="Full Mobile Banking Experience for One of Latin America's Largest Banks"
        description="Designed the complete mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and daily banking surfaces."
        image="/assets/projects/monoma/hero.png"
        url="https://andreasanzrojas.com/work/monoma"
      />
      <CaseStudyCSIA
        tag="Banking · Mobile · Latin America"
        title="Designing a Full Mobile Banking Experience for One of Latin America's Largest Banks"
        summary="Designed the end-to-end mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and daily banking surfaces. Owned research synthesis, UX design, high-fidelity prototyping, and the Figma component system for the surfaces in scope."
        heroVariant="monoma"
        heroAlt="Monoma Banco Nacional mobile banking app"
        client="Mastercard"
        clientDisclaimer="Name changed · Client confidential"
        role="Senior Product Experience Designer"
        chips={['Digital card issuance through ownership and daily use — research to UI handoff']}
        context="Banco Nacional needed a mobile banking experience that could issue a credit card end-to-end without a branch visit. Compliance steps — identity and fiscal address — still had to be completed in-app, the virtual card had to become usable at approval, and the new product had to live inside daily banking rather than as a one-off acquisition funnel. Mastercard engaged the design work from research synthesis through final UI handoff."
        myRole="Senior Product Experience Designer end-to-end, embedded through Mastercard. Owned UX research synthesis, interaction design, and full UI visual execution — including information architecture, the core issuance-to-engagement flows, and a Figma component system covering the banking surfaces in scope. Worked directly with Banco Nacional's product stakeholders across multiple review and alignment cycles."
        signal="The strategic gap was not another feature screen — it was a missing product journey. There was no continuous path from applying for a credit card to owning and using it inside the same app. Issuance stopped at the branch. Ownership lived elsewhere. Daily use never absorbed the new product. Closing that gap meant designing issuance, ownership, and daily use as one system."
        influence="Research synthesis set the design criteria — trust and speed — before screens were drawn."
        influenceBullets={[
          'Synthesized client research (interviews and surveys) into two personas used throughout the prototype: Filipa (professional — speed and control) and Carlos (student — quick transfers).',
          'Journey mapping exposed the structural gap: no continuous path to a credit card without a branch visit.',
          'Trust and speed became the two non-negotiable design criteria for every issuance and ownership decision.',
          'Co-facilitated a Google Sprint that narrowed concepts for prototyping with product stakeholders.',
        ]}
        artifact="The product problem was a broken journey, not a missing screen. Getting a credit card required leaving the app; once approved, the card did not reliably reappear as something the customer could manage and use in daily banking. The design work reconnects three stages into one system: issuance that completes compliance and identity in-app, ownership that makes the virtual card usable at approval and visible on home, and daily use that puts payment and further products inside the same authenticated surface. Each decision below reinforces one of those stages — remove any of them and the journey fractures again."
        decisions={[
          {
            num: '01',
            title: 'Digital credit card approval with instant activation',
            body: 'Approval is the ownership moment. The screen confirms the card immediately, puts a usable virtual card in the customer\'s hands, offers Add to Google Wallet, and optionally starts the physical-card request — so value begins at approval instead of waiting for plastic or a branch pickup.',
            href: figma('4048-27499'),
          },
          {
            num: '02',
            title: 'Geolocation address validation',
            body: 'Fiscal address is a compliance gate that often fails when treated as free text. A map pin lets customers confirm location the way they already think about it, reducing mismatch risk while keeping the compliance check inside the digital issuance path.',
            href: figma('4012-11458'),
          },
          {
            num: '03',
            title: 'Flexible identity verification',
            body: 'Identity proof cannot disappear in a digital issuance flow — but it also cannot force a branch visit. Offering selfie or official ID scan as parallel in-app paths preserves compliance while letting customers finish verification without leaving the session.',
            href: figma('4007-650'),
          },
          {
            num: '04',
            title: 'Card design selection before shipment',
            body: 'Before the physical card path continues, customers choose a design from a curated carousel and accept terms. That choice makes the upcoming plastic feel owned in the digital flow — without turning issuance into open-ended customization.',
            href: figma('4045-26725'),
          },
          {
            num: '05',
            title: 'Active card visible on home after approval',
            body: 'A newly approved card fails if it disappears into a separate issuance silo. Surfacing it on the authenticated home with view, block, and settings actions makes ownership continuous with daily banking — the product is managed where the customer already returns.',
            href: figma('4160-5556'),
          },
          {
            num: '06',
            title: 'In-app shipment tracking',
            body: 'Physical delivery creates an anxiety gap after digital approval. Keeping requested / in transit / delivered status — plus a tracking number and a reminder that the virtual card still works — closes that gap without sending customers to an external courier experience.',
            href: figma('4012-1811'),
            featured: true,
          },
          {
            num: '07',
            title: 'NFC contactless payment',
            body: 'Ownership only becomes habitual when paying is immediate. An NFC tap-to-pay surface lets the virtual card move from “approved” to “used” without switching apps or depending on the physical card arriving first.',
            href: figma('4006-10583'),
          },
          {
            num: '08',
            title: 'Additional products surfaced on home',
            body: 'Once the credit card lives on home, the same surface can introduce savings, CDT, Fiducia, and benefits as discoverable entry points. Cross-sell stays attached to daily banking — not a separate campaign after the first transaction.',
            href: figma('4160-5556'),
          },
        ]}
        decisionImages={[
          {
            src: '/assets/projects/monoma/monoma-d01-approval.png',
            alt: '¡Felicitaciones Filipa! Tu Tarjeta de Crédito ha sido aprobada — approval screen with virtual card and Google Wallet button',
          },
          {
            src: '/assets/projects/monoma/monoma-d02-geolocation.png',
            alt: 'Confirma la ubicación — Google Maps interface with red pin at Carrera 14 No. 88-76, Barrio Chicó',
          },
          {
            src: '/assets/projects/monoma/monoma-d03-identity.png',
            alt: '¿Cómo quieres validar tu identidad? — two-option screen: Foto del documento de identidad or Selfie',
          },
          {
            src: '/assets/projects/monoma/monoma-d04-personalization.png',
            alt: 'Personaliza tu Tarjeta — card color carousel showing three design options with terms toggle',
          },
          {
            src: '/assets/projects/monoma/monoma-d05-home.png',
            alt: 'Bienvenida, Filipa — home screen showing active credit card 2345 with View, Block, and Settings actions',
          },
          {
            src: '/assets/projects/monoma/monoma-d06-tracking.png',
            alt: 'Tu tarjeta física se entregará en 1 día — three-step tracking: Tarjeta solicitada, En camino, Entregada',
          },
          {
            src: '/assets/projects/monoma/monoma-d07-nfc.png',
            alt: 'Acerca tu celular al lector — NFC contactless payment screen with Mastercard tap animation',
          },
          {
            src: '/assets/projects/monoma/monoma-d08-crosssell.png',
            alt: 'Home screen showing Abrir otros productos section with CDT, Fiducia, Cuenta de ahorros and Beneficios cross-sell banner',
          },
        ]}
        decisionVariant="inline"
        artifactImages={false}
        outcomes={[
          'Enabled full digital credit card approval with a virtual card ready to use at confirmation',
          'Created in-app visibility for physical-card shipment status while the virtual card remains usable',
          'Designed an NFC contactless payment surface so the virtual card can be used before the physical card arrives',
          'Delivered a Figma component system covering the banking surfaces in scope',
        ]}
        prototype={figma('4001-10227')}
        nextProject={{
          number: '05',
          client: 'Travel Adventures',
          title: 'Designing Complex Itinerary Flows for a Decision-Heavy Booking Experience',
          href: '/work/travel-adventures',
        }}
      />
    </>
  )
}
