import CaseStudyCSIA from '../components/CaseStudyCSIA'
import SEO from '../components/SEO'

export default function CaseStudyMonoma() {
  return (
    <>
      <SEO
        title="Full Mobile Banking Experience for One of Latin America's Largest Banks"
        description="Designed the complete mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and real-time transactions. Led research synthesis, UX design, prototyping, and a full component system."
        image="/assets/projects/monoma/hero.png"
        url="https://andreasanzrojas.com/work/monoma"
      />
      <CaseStudyCSIA
      tag="Banking · Mobile · Latin America"
      title="Designing a Full Mobile Banking Experience for One of Latin America's Largest Banks"
      summary="Designed the end-to-end mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and real-time transactions. Led research synthesis, UX design, high-fidelity prototyping, and a full component design system."
      heroVariant="monoma"
      heroAlt="Monoma Banco Nacional mobile banking app"
      client="Mastercard"
      clientDisclaimer="Name changed · Client confidential"
      role="Lead Product Designer"
      chips={['End-to-end UX + UI · Research to design system']}
      context="Banco Nacional is one of Latin America's largest commercial banks. In the early 2020s, the bank's mobile app was losing ground to digital-native competitors: credit card issuance required branch visits and physical documentation, the payment flow spanned 6+ steps, and the app lacked the self-service banking capabilities that younger, mobile-first users expected. The bank engaged Mastercard to design a full mobile banking experience — covering credit card issuance, biometric onboarding, fiscal address validation, tap-to-pay, and cross-sell surfaces — from research through final UI handoff."
      myRole="Lead Product Designer end-to-end, embedded through Mastercard. Led UX research synthesis, interaction design, and full UI visual execution — including information architecture, all 8 core flows, and a 40+ component Figma design system. Worked directly with Banco Nacional's product stakeholders across multiple review and alignment cycles."
      signal="Banco Nacional's mobile app was losing ground to digital-native competitors. Getting a credit card required a branch visit. Payment flows were too long. Card management was scattered across three disconnected sections. The bank needed a redesign that enabled full digital card issuance, reduced in-branch traffic, and deepened daily engagement — without adding UI complexity."
      influence="Client-provided research data shaped every design decision."
      influenceBullets={[
        'Synthesized 15 user interviews and 50 customer surveys into two core personas and a journey map',
        'Built two personas: Filipa (professional, values speed and control) and Carlos (student, needs quick transfers)',
        'Journey mapping revealed the key gap: no path to a credit card without visiting a branch',
        'Key insight: trust and speed were the two non-negotiable drivers — every design decision was tested against both',
        'Co-facilitated a Google Sprint: 20 ideas → 5 selected for prototyping',
      ]}
      artifact="Eight core design decisions — each tied to a measurable friction point in the original product."
      decisions={[
        {
          num: '01',
          title: 'End-to-end digital card issuance',
          body: 'The full credit card request — from identity verification to approval — happens inside the app. No branch visit, no paperwork, no waiting days for confirmation. The entire acquisition flow was designed from scratch.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4048-27499&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4048%3A27499',
        },
        {
          num: '02',
          title: 'Geolocation address validation',
          body: 'Fiscal address confirmed through a map interface — users drop a pin instead of filling a form. Removes the most error-prone step in the card request and aligns with how users actually think about their address.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4012-11458&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4012%3A11458',
        },
        {
          num: '03',
          title: 'Flexible identity verification',
          body: 'Users choose how to prove their identity: selfie or official ID document scan. Either path completes inline in seconds — replacing the in-branch identity check without reducing compliance.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4007-650&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4007%3A650',
        },
        {
          num: '04',
          title: 'Card personalization before shipment',
          body: 'Before the card ships, users pick their color and design. A tactile, personal moment built into the digital flow — making ownership feel real before the physical card arrives.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4045-26725&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4045%3A26725',
        },
        {
          num: '05',
          title: 'Virtual card at approval',
          body: 'Card approved → virtual card instantly available. Users add it to Google Pay or Apple Pay and start transacting online while the physical card is still in transit.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4048-27499&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4048%3A27499',
        },
        {
          num: '06',
          title: 'In-app shipment tracking',
          body: 'Live delivery status shown inside the banking app after card issuance — no external link, no SMS. End-to-end visibility without leaving the banking experience.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4012-1811&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4012%3A1811',
        },
        {
          num: '07',
          title: 'NFC contactless payment',
          body: 'One tap to pay — phone or card, NFC or QR. The payment flow handles retail, transit, and restaurants without switching apps or unlocking a physical wallet.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4006-10583&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4006%3A10583',
        },
        {
          num: '08',
          title: 'Cross-sell at activation',
          body: 'After the first transaction, the app surfaces relevant banking products based on behavior — savings accounts, insurance, or loyalty products. Business goals designed into the UX flow, not bolted on after.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4160-5556&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4160%3A5556',
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
        'Full credit card issuance flow available digitally — zero branch visits required',
        'Virtual card active at approval — users transact before physical card arrives',
        'Payment flow: 6+ steps → 3 (select · confirm · pay)',
        'Design system: 40+ Figma components covering all banking surfaces, ready for loyalty and analytics expansion',
      ]}
      prototype="https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4001-10227&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4001%3A10227"
      nextProject={{
        number: '04',
        client: 'Travel Adventures',
        title: 'Designing Complex Itinerary Flows for a Decision-Heavy Booking Experience',
        href: '/work/travel-adventures',
      }}
    />
    </>
  )
}
