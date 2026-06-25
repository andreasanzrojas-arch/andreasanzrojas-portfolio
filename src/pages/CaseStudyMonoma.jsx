import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyMonoma() {
  return (
    <CaseStudyCSIA
      tag="Fintech · Banking · Design System"
      title={"Redesigning the Digital Banking Experience for One of Latin America's Largest Banks"}
      summary="Redesigned the end-to-end digital banking experience — covering onboarding, card management, payment flows, and personalization. Increased onboarding completion, reduced transaction time, and grew monthly active usage."
      heroVariant="monoma"
      heroAlt="Monoma Banco Nacional"
      client="Mastercard"
      clientDisclaimer="Name changed · Client confidential"
      role="Product Designer"
      chips={['+20% satisfaction after usability-driven iteration']}
      context="Product Designer (end-to-end). Led research, facilitated co-design workshop, delivered high-fidelity prototype and full design system in Figma."
      signal="The mobile app was losing ground to digital-native competitors. Onboarding was confusing, card management was buried, payment flows were bloated. The business needed design to increase transaction volume and deepen engagement — not just fix usability."
      influence="Research revealed where trust, speed, and control mattered most across the banking journey."
      influenceBullets={[
        '15 interviews + 50 customer surveys',
        'Personas: Filipa (professional, values speed and control) and Carlos (student, needs quick transfers)',
        'Journey map: Discovery → Onboarding → Daily Use → Payments',
        'Empathy map: trust, time-efficiency, and feeling in control as core drivers',
        'Google Sprint ideation: 20 ideas → 5 prototyped',
      ]}
      researchImages={[
        {
          src: '/assets/projects/monoma/mobile-1.png',
          alt: 'Monoma mobile banking research screen showing user interview insights',
        },
        {
          src: '/assets/projects/monoma/mobile-2.png',
          alt: 'Monoma mobile banking journey map from discovery through daily payments',
        },
      ]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'Guided onboarding',
          body: 'Progress indicators at every step — users always know where they are and what comes next.',
        },
        {
          num: '02',
          title: '3-step payment flow',
          body: 'Collapsed from 6+ steps — fewer taps, same compliance, faster transactions.',
        },
        {
          num: '03',
          title: 'Card personalization module',
          body: 'PIN, preferences, and identity settings in one flow — not buried in settings.',
        },
        {
          num: '04',
          title: 'Home screen redesign',
          body: 'Bottom navigation and restructured hierarchy — daily actions within thumb reach.',
        },
        {
          num: '05',
          title: 'Full design system',
          body: 'Figma components for all surfaces — ready for loyalty, analytics, and future features.',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/monoma/mobile-3.png',
          alt: 'Monoma guided onboarding screen with progress indicators',
        },
        {
          src: '/assets/projects/monoma/mobile-4.png',
          alt: 'Monoma simplified 3-step payment flow on mobile',
        },
        {
          src: '/assets/projects/monoma/mobile-5.png',
          alt: 'Monoma card personalization module with PIN and preference settings',
        },
        {
          src: '/assets/projects/monoma/mobile-6.png',
          alt: 'Monoma redesigned home screen with bottom navigation',
        },
      ]}
      iteration={{
        title: 'Testing & iteration',
        bullets: [
          '60% of users couldn\'t find personalization options → moved from settings to Home screen → +20% satisfaction in follow-up testing.',
        ],
        images: [
          {
            src: '/assets/projects/monoma/iteration-1.png',
            alt: 'Monoma usability test iteration showing personalization options in settings',
          },
          {
            src: '/assets/projects/monoma/iteration-2.png',
            alt: 'Monoma revised design with personalization moved to the home screen',
          },
        ],
      }}
      galleryImages={[
        {
          src: '/assets/projects/monoma/results-1.png',
          alt: 'Monoma results screen showing improved onboarding completion metrics',
        },
        {
          src: '/assets/projects/monoma/results-2.png',
          alt: 'Monoma results screen showing reduced transaction time',
        },
        {
          src: '/assets/projects/monoma/results-3.png',
          alt: 'Monoma results screen showing increased monthly active usage',
        },
        {
          src: '/assets/projects/monoma/final.png',
          alt: 'Monoma final high-fidelity prototype of the redesigned banking experience',
        },
      ]}
      outcomes={[
        'Increased onboarding completion',
        'Reduced average transaction time',
        'Grew monthly transactions per user',
        'Scalable design system ready for loyalty and analytics features',
      ]}
      prototype="https://www.figma.com/proto/hs0CyG5ofnkNaZWDWawFii/MONOMA?page-id=31%3A10939&node-id=4001-10227&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4001%3A10227"
      nextProject={{
        title: 'Designing Complex Itinerary Flows for a Decision-Heavy Booking Experience',
        href: '/work/travel-adventures',
      }}
    />
  )
}
