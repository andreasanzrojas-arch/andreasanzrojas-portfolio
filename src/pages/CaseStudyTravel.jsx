import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyTravel() {
  return (
    <CaseStudyCSIA
      tag="UX Design · Mobile · Travel · AI"
      title="Designing Complex Itinerary Flows for a Decision-Heavy Booking Experience"
      summary="Led the UX/product design of a mobile-first travel platform connecting users with AI-curated itineraries and partner travel businesses. Designed end-to-end: research, IA, interaction design, design system, and full prototype."
      heroImage="/assets/projects/travel-adventures/hero.png"
      heroAlt="Travel Adventures platform hero screen showing AI-curated itinerary discovery on mobile"
      client="Personal project"
      role="Lead Product Designer"
      chips={['B2B2C platform — users + partner travel businesses']}
      context="Lead Product Designer. Research strategy, competitive analysis, IA, interaction patterns, Figma design system, clickable prototype."
      signal="Travel planning suffers from decision fatigue — too many options, generic recommendations, bloated booking flows. Added complexity: the platform is B2B2C, serving end users (genuine travel discovery) and partner businesses (paid placement and bookings). Design had to balance authentic discovery with commercial conversion."
      influence="Research mapped traveler archetypes, friction points, and competitive gaps across the booking journey."
      influenceBullets={[
        'Contextual interviews and card-sorting: traveler archetypes (Adventurous, Planner, Spontaneous)',
        'Hotjar funnel analysis of drop-off in itinerary selection',
        '3 personas with behavioral drivers, budget sensitivity, decision-making patterns',
        'Journey mapping with friction points in browsing and booking confirmation',
        'Heuristic evaluation of Airbnb, Kayak, and Google Travel',
        'Design Thinking workshop with stakeholders',
      ]}
      researchImages={[
        {
          src: '/assets/projects/travel-adventures/research-1.png',
          alt: 'Travel Adventures user research showing traveler archetype card-sorting results',
        },
        {
          src: '/assets/projects/travel-adventures/research-2.png',
          alt: 'Travel Adventures persona and journey mapping research artifacts',
        },
      ]}
      artifactImages={false}
      decisions={[
        {
          num: '01',
          title: 'AI personalization UX',
          body: 'Dates + interests + travel style → ranked itineraries. Progressive filtering vs. infinite scroll.',
        },
        {
          num: '02',
          title: 'Partner content integration',
          body: 'Card hierarchy gives partners visibility without breaking discovery — core B2B2C tension solved through placement logic.',
        },
        {
          num: '03',
          title: 'Adaptive layouts',
          body: 'Mobile-first fluid grid extended to tablet and wearable form factors.',
        },
        {
          num: '04',
          title: 'Carbon footprint per itinerary',
          body: 'Surfaced underserved eco-conscious segment — differentiation through values, not just price.',
        },
        {
          num: '05',
          title: 'Modular design system',
          body: 'Reusable components cut dev time — architecture positioned for partner marketplace expansion.',
        },
        {
          num: '06',
          title: 'Accessibility-first',
          body: 'High-contrast modes, optimized tap targets, keyboard navigation from the start.',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/travel-adventures/design-system.png',
          alt: 'Travel Adventures modular design system with reusable UI components',
        },
        {
          src: '/assets/projects/travel-adventures/solution.png',
          alt: 'Travel Adventures solution overview showing AI-curated itinerary selection flow',
        },
        {
          src: '/assets/projects/travel-adventures/screens-1.png',
          alt: 'Travel Adventures mobile screens showing itinerary browsing experience',
        },
        {
          src: '/assets/projects/travel-adventures/screens-2.png',
          alt: 'Travel Adventures mobile screens showing booking confirmation flow',
        },
      ]}
      galleryImages={[
        {
          src: '/assets/projects/travel-adventures/mobile-1.png',
          alt: 'Travel Adventures mobile home screen with AI-curated destination cards',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-2.png',
          alt: 'Travel Adventures mobile itinerary detail with partner content integration',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-3.png',
          alt: 'Travel Adventures mobile screen showing personalized travel style filters',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-4.png',
          alt: 'Travel Adventures mobile screen showing carbon footprint per itinerary',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-5.png',
          alt: 'Travel Adventures mobile booking flow with progressive disclosure',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-6.png',
          alt: 'Travel Adventures mobile confirmation screen with trip summary',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-7.png',
          alt: 'Travel Adventures mobile partner business profile screen',
        },
        {
          src: '/assets/projects/travel-adventures/mobile-8.png',
          alt: 'Travel Adventures mobile screen showing adaptive layout on compact device',
        },
        {
          src: '/assets/projects/travel-adventures/results.png',
          alt: 'Travel Adventures prototype testing results showing retention and satisfaction metrics',
        },
      ]}
      outcomes={[
        'Higher retention in prototype testing',
        'Higher satisfaction for ease of use',
        'Design system reduced UI development time',
        'Eco-conscious segment unlocked',
        'Architecture positioned for partner marketplace expansion',
      ]}
      prototype="https://www.figma.com/proto/3kLLunNyYft6xrJzphfqQi/Travel-Adventures?page-id=31%3A10939&node-id=4004-485&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4004%3A485"
      nextProject={{
        title: "Rebuilding Digital Investing at Colombia's Largest Bank",
        href: '/work/banco-de-bogota',
      }}
    />
  )
}
