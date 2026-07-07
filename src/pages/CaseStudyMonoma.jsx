import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyMonoma() {
  return (
    <CaseStudyCSIA
      tag="Banking · Fintech · Mobile"
      title="Designing a Full Mobile Banking Experience for One of Latin America's Largest Banks"
      summary="Designed the end-to-end mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and real-time transactions. Led research synthesis, UX design, high-fidelity prototyping, and a full component design system."
      heroVariant="monoma"
      heroAlt="Monoma Banco Nacional mobile banking app"
      client="Mastercard"
      clientDisclaimer="Name changed · Client confidential"
      role="Lead Product Designer"
      chips={['End-to-end UX + UI · Research to design system']}
      context="Lead Product Designer end-to-end. Led UX research synthesis, interaction design, and full UI visual design — from component definition to final screens. Delivered high-fidelity prototype and Figma component system. Co-facilitated a Google Sprint workshop with the product team and client stakeholders."
      signal="Banco Nacional's mobile app was losing ground to digital-native competitors. Getting a credit card required a branch visit. Payment flows were too long. Card management was scattered across three disconnected sections. The bank needed a redesign that enabled full digital card issuance, reduced in-branch traffic, and deepened daily engagement — without adding UI complexity."
      influence="Client-provided research data shaped every design decision."
      influenceBullets={[
        'Analyzed 15 user interviews and 50 customer surveys provided by the client team',
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
        },
        {
          num: '02',
          title: 'Geolocation address validation',
          body: 'Fiscal address confirmed through a map interface — users drop a pin instead of filling a form. Removes the most error-prone step in the card request and aligns with how users actually think about their address.',
        },
        {
          num: '03',
          title: 'Flexible identity verification',
          body: 'Users choose how to prove their identity: selfie or official ID document scan. Either path completes inline in seconds — replacing the in-branch identity check without reducing compliance.',
        },
        {
          num: '04',
          title: 'Card personalization before shipment',
          body: 'Before the card ships, users pick their color and design. A tactile, personal moment built into the digital flow — making ownership feel real before the physical card arrives.',
        },
        {
          num: '05',
          title: 'Virtual card at approval',
          body: 'Card approved → virtual card instantly available. Users add it to Google Pay or Apple Pay and start transacting online while the physical card is still in transit.',
        },
        {
          num: '06',
          title: 'In-app shipment tracking',
          body: 'Live delivery status shown inside the banking app after card issuance — no external link, no SMS. End-to-end visibility without leaving the banking experience.',
        },
        {
          num: '07',
          title: 'NFC contactless payment',
          body: 'One tap to pay — phone or card, NFC or QR. The payment flow handles retail, transit, and restaurants without switching apps or unlocking a physical wallet.',
          href: 'https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4001-10227&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4001%3A10227',
        },
        {
          num: '08',
          title: 'Cross-sell at activation',
          body: 'After the first transaction, the app surfaces relevant banking products based on behavior — savings accounts, insurance, or loyalty products. Business goals designed into the UX flow, not bolted on after.',
        },
      ]}
      decisionImages={[
        null,
        null,
        null,
        null,
        {
          src: '/assets/projects/monoma/results-3.png',
          alt: 'Monoma home screen showing virtual credit card "Tu Tarjeta de Crédito" active and ready to use',
        },
        null,
        {
          src: '/assets/projects/monoma/results-1.png',
          alt: 'NFC contactless payment — Acerca tu celular al lector screen with one-tap payment',
        },
        null,
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
        title: 'Designing Complex Itinerary Flows for a Decision-Heavy Booking Experience',
        href: '/work/travel-adventures',
      }}
    />
  )
}
