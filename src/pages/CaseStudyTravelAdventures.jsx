import CaseStudyCSIA from '../components/CaseStudyCSIA'
import SEO from '../components/SEO'

const FIGMA_FILE = 'https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures'
const figma = (nodeId) =>
  `${FIGMA_FILE}?page-id=31%3A10939&node-id=${nodeId}&scaling=scale-down&content-scaling=fixed&starting-point-node-id=${nodeId}`

export default function CaseStudyTravelAdventures() {
  return (
    <>
      <SEO
        title="Designing a Travel Platform That Resolves the Tension Between Discovery and Commerce"
        description="Independent product design challenge leading the end-to-end design of a B2B2C travel platform — from research and IA to a high-fidelity Figma prototype and component system."
        image="/assets/projects/travel-adventures/ta-d01-days.png"
        url="https://andreasanzrojas.com/work/travel-adventures"
      />
      <CaseStudyCSIA
      tag="Travel · Mobile · B2B2C Platform"
      title="Designing a Travel Platform That Resolves the Tension Between Discovery and Commerce"
      summary="Independent product design challenge to lead the end-to-end design of a B2B2C travel platform — from research and IA to a high-fidelity Figma prototype and component system. Designed four core flows: discovery, package booking, agency marketplace, and personal trip planning."
      heroVariant="travel-adventures"
      heroAlt="Bangkok Day 1–2 itinerary — curated hotel and activities in a day-by-day package view"
      client="Travel Adventures"
      role="Independent Product Design Challenge"
      chips={['End-to-end UX + UI · Research to design system']}
      context="Travel Adventures originated as an independent product design challenge — an opportunity to explore and lead the design of a complex B2B2C travel platform connecting travelers with curated agencies and package tours. The product serves two sides of a marketplace: travelers who need both inspiration (browsing, discovery, trip planning) and trust-based booking (agency selection, payment, itinerary), and travel agencies that need a digital presence to showcase packages and acquire clients. The central design problem was a structural tension: discovery is exploratory and emotional, but booking is intentional and high-stakes. The platform needed to hold both without collapsing into a generic search-and-book flow."
      myRole="Independent Product Designer end-to-end. Defined research strategy, led competitive analysis, and designed the full information architecture and interaction model — from traveler-facing discovery and booking flows to the agency-side marketplace surfaces. Delivered a high-fidelity Figma prototype covering discovery, booking, trip management, agency browsing, and payment flows, plus a component-level design system."
      signal="Travel planning has two failure modes: for users, decision fatigue — too many options, too generic, too fragmented across apps. For travel agencies, invisibility — no qualified discovery channel, no differentiated positioning. The platform had to solve both simultaneously. The core design challenge: make agencies feel like expert guides, not intermediaries, while keeping the user experience genuinely exploratory — not a sales funnel."
      influence="Three research inputs shaped every architecture and flow decision."
      influenceBullets={[
        'Contextual interviews and card-sorting: built traveler archetypes — Adventurous, Planner, Spontaneous — with behavioral drivers, budget sensitivity, and decision patterns',
        'Personas mapped to distinct booking behaviors, trip durations, and agency trust levels',
        'Journey mapping across the full booking flow revealed friction in browsing, city selection, and payment confirmation',
        'Key tension resolved in research: "Without Travel Agency" toggle was necessary to preserve user autonomy while agencies remain the primary revenue model',
      ]}
      artifact="Five design decisions across four flows — each resolving a specific tension between user freedom and platform guidance."
      decisions={[
        {
          num: '01',
          title: 'Day-by-day trip organization',
          body: 'Each destination in the package breaks down into a named day range — Day 1-2, Day 3-4 — with a curated hotel and activity selection already in place. Bangkok opens with the Mandarin Oriental and Ayutthaya Temple. The user never faces a blank itinerary: the platform pre-structures discovery as an editorial experience, not a search problem.',
          href: figma('4017-11000'),
          featured: true,
        },
        {
          num: '02',
          title: 'Collaborative trip sharing',
          body: 'After selecting an agency, users are prompted: "Do you want to share this trip?" — inviting people to co-plan and co-book. The social layer is woven into the flow, not bolted on after. Turns a personal planning tool into a shared experience, increasing engagement before purchase.',
          href: figma('4194-17398'),
        },
        {
          num: '03',
          title: 'Empty state as invitation',
          body: '"Create stunning travel boards. Visualize your dream destinations, plan every detail, and turn your adventures into reality with just one click." The zero-state converts to aspiration — not a dead end. The first action a user takes is naming something they want, not filling a form.',
          href: figma('4069-28203'),
        },
        {
          num: '04',
          title: 'Trip naming as ownership',
          body: 'Users don\'t just browse trips — they build them. The creation flow lets users materialize a future trip by adding a destination photo, a name ("Holidays 2025"), and travel dates in one screen. Each element does specific work: the photo makes it visual, the name makes it personal, the dates make it concrete. The result is a collection of named, dated, personalized plans — not a vague saved search.',
          href: figma('4102-13480'),
        },
        {
          num: '05',
          title: 'Trips done: the memory archive',
          body: '"Panamá 2024, March 20–31." Past trips surface as a visual archive alongside future ones. The app persists beyond the booking moment — users return to browse past trips, plan upcoming ones, and share boards. Retention built into the product structure.',
          href: figma('4181-14105'),
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
          src: '/assets/projects/travel-adventures/ta-d01-days.png',
          alt: 'Bangkok day-by-day itinerary screen',
          caption: 'Discover',
        },
        {
          src: '/assets/projects/travel-adventures/ta-star-flight.png',
          alt: 'Choose your flight — Bogotá to Bangkok, Airbus A380, Premium Economy',
          caption: 'Book',
        },
        {
          src: '/assets/projects/travel-adventures/ta-star-agencies.png',
          alt: 'Travel Agencies marketplace — specialized luxury, adventure, and group agencies',
          caption: 'Agency',
        },
        {
          src: '/assets/projects/travel-adventures/ta-d04-trip-name.png',
          alt: 'Holidays 2025 trip board naming with destination photo and travel dates',
          caption: 'Manage',
        },
      ]}
      decisionVariant="inline"
      artifactImages={false}
      outcomes={[
        'Designed trip boards as a persistent planning surface — so the product supports return planning, not only one-time booking',
        'Embedded collaborative sharing into the agency-selection moment, making group co-planning part of the core flow',
        'Treated the empty trips state as an invitation to create, directing first action toward naming a trip rather than a blank form',
        'Delivered a component-level design system covering discovery, booking, agency, and trip management surfaces',
      ]}
      prototype={figma('4017-11000')}
      reflection="This project reinforced that complex products are rarely improved by subtracting capability. The work is to organize competing workflows — discovery, booking, agency selection, personal trip planning — so they feel like one system instead of four parallel apps. Travelers needed flexibility without losing orientation; agencies needed visibility without turning the experience into a sales funnel. The durable lesson was architectural: when screens are designed as parts of a shared information model, clarity and choice can coexist. Isolated screens optimize locally. Systems decide what the product becomes."
    />
    </>
  )
}
