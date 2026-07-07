import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyTravelAdventures() {
  return (
    <CaseStudyCSIA
      tag="Travel · Mobile · B2B2C Platform"
      title="Designing a Travel Platform That Resolves the Tension Between Discovery and Commerce"
      summary="Led product design of a B2B2C travel platform — from research and IA to a 40+ screen Figma prototype and full component system. Designed four core flows: discovery, package booking, agency marketplace, and personal trip planning."
      heroVariant="travel-adventures"
      heroAlt="Travel Adventures mobile app"
      client="Travel Adventures"
      role="Lead Product Designer"
      chips={['End-to-end UX + UI · Research to design system']}
      context="Lead Product Designer end-to-end. Defined research strategy, led competitive analysis, designed IA and high-fidelity UI across four core flows. Built the Figma component library and delivered the full clickable prototype."
      signal="Travel planning has two failure modes: for users, decision fatigue — too many options, too generic, too fragmented across apps. For travel agencies, invisibility — no qualified discovery channel, no differentiated positioning. The platform had to solve both simultaneously. The core design challenge: make agencies feel like expert guides, not intermediaries, while keeping the user experience genuinely exploratory — not a sales funnel."
      influence="Three research inputs shaped every architecture and flow decision."
      influenceBullets={[
        'Contextual interviews and card-sorting: built 3 traveler archetypes — Adventurous, Planner, Spontaneous — with behavioral drivers, budget sensitivity, and decision patterns',
        '3 personas mapped to distinct booking behaviors, trip durations, and agency trust levels',
        'Journey mapping across the full booking flow revealed friction in browsing, city selection, and payment confirmation',
        'Key tension resolved in research: "Without Travel Agency" toggle was necessary to preserve user autonomy while agencies remain the primary revenue model',
      ]}
      artifact="Five design decisions across four flows — each resolving a specific tension between user freedom and platform guidance."
      decisions={[
        {
          num: '01',
          title: 'Day-by-day trip organization',
          body: 'Each destination in the package breaks down into a named day range — Day 1-2, Day 3-4 — with a curated hotel and activity selection already in place. Bangkok opens with the Mandarin Oriental and Ayutthaya Temple. The user never faces a blank itinerary: the platform pre-structures discovery as an editorial experience, not a search problem.',
          href: 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4004-485&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4004%3A485',
        },
        {
          num: '02',
          title: 'Collaborative trip sharing',
          body: 'After selecting an agency, users are prompted: "Do you want to share this trip?" — inviting people to co-plan and co-book. The social layer is woven into the flow, not bolted on after. Turns a personal planning tool into a shared experience, increasing engagement before purchase.',
          href: 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4040-14643&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4040%3A14643',
        },
        {
          num: '03',
          title: 'Empty state as invitation',
          body: '"Create stunning travel boards. Visualize your dream destinations, plan every detail, and turn your adventures into reality with just one click." The zero-state converts to aspiration — not a dead end. The first action a user takes is naming something they want, not filling a form.',
          href: 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4069-28177&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4069%3A28177',
        },
        {
          num: '04',
          title: 'Trip naming as ownership',
          body: 'Users don\'t just browse trips — they build them. The creation flow lets users materialize a future trip by adding a destination photo, a name ("Holidays 2025"), and travel dates in one screen. Each element does specific work: the photo makes it visual, the name makes it personal, the dates make it concrete. The result is a collection of named, dated, personalized plans — not a vague saved search.',
          href: 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4069-28177&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4069%3A28177',
        },
        {
          num: '05',
          title: 'Trips done: the memory archive',
          body: '"Panamá 2024, March 20–31." Past trips surface as a visual archive alongside future ones. The app persists beyond the booking moment — users return to browse past trips, plan upcoming ones, and share boards. Retention built into the product structure.',
          href: 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4069-28177&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4069%3A28177',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/travel-adventures/ta-d01-days.png',
          alt: 'Bangkok Day 1-2 itinerary screen — Fri 4 Apr to Sun 6 Apr 2025, Mandarin Oriental hotel and Ayutthaya Temple activity',
        },
        {
          src: '/assets/projects/travel-adventures/ta-d02-agency-share.png',
          alt: 'Choose an Agency for your Trip with Do you want to share this trip? bottom sheet and Share invite link option',
        },
        {
          src: '/assets/projects/travel-adventures/ta-d03-trips-empty.png',
          alt: 'Trips screen Future Travels empty state — Create a Travel board CTA with open road background image',
        },
        {
          src: '/assets/projects/travel-adventures/ta-d04-trip-name.png',
          alt: 'Holidays 2025 trip naming screen with tropical beach background, date range 20/07–31/07/2025 and keyboard',
        },
        {
          src: '/assets/projects/travel-adventures/ta-d05-trips-done.png',
          alt: 'Trips done tab showing Panamá 2024 card From March 20 to March 31 with tropical beach thumbnail',
        },
      ]}
      galleryImages={[
        {
          src: '/assets/projects/travel-adventures/ta-star-agencies.png',
          alt: 'Travel agencies marketplace — grid of agency cards with ratings and specialties',
        },
        {
          src: '/assets/projects/travel-adventures/ta-star-agency-detail.png',
          alt: 'Tribe Travels agency detail — full agency profile with trips, photos and contact',
        },
        {
          src: '/assets/projects/travel-adventures/ta-star-route.png',
          alt: 'Route builder — visual map with waypoints, days and itinerary structure',
        },
        {
          src: '/assets/projects/travel-adventures/ta-star-payment.png',
          alt: 'Booking payment screen — trip summary with secure checkout flow',
        },
      ]}
      decisionVariant="inline"
      artifactImages={false}
      outcomes={[
        'Trip board feature increased return visits in prototype testing — users came back to plan, not just to book',
        'Collaborative sharing modal introduced a social layer that drove group booking intent from the first session',
        'Empty state redesign reduced perceived dead-ends — users proceeded to trip creation without drop-off',
        'Design system: 40+ Figma components across discovery, booking, agency, and trip management surfaces',
      ]}
      prototype="https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4004-485&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4004%3A485"
      nextProject={{
        number: '04',
        client: 'Mastercard',
        title: "Designing the Full Digital Banking Experience for One of Latin America's Largest Banks",
        href: '/work/monoma',
      }}
    />
  )
}
