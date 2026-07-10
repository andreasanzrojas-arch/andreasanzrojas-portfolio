import CaseStudyCSIA from '../components/CaseStudyCSIA'
import AppHubMarquee from '../components/AppHubMarquee'
import SEO from '../components/SEO'

export default function CaseStudyHuge() {
  return (
    <>
      <SEO
        title="Redesigning the UX Architecture of Google's Global App Discovery Hub"
        description="Redesigned the information architecture of Google for Education's App Hub — turning a catalog of 108 apps into a guided discovery journey for three distinct user types. Led at Huge."
        image="/assets/projects/huge/hub-hero.png"
        url="https://andreasanzrojas.com/work/huge"
      />
      <CaseStudyCSIA
      heroAfter={
        <div className="mx-auto max-w-6xl px-0 pt-2 pb-0">
          <p className="mb-3 px-6 font-mono text-[10px] uppercase tracking-widest text-white/30 md:px-10">
            Live product
          </p>
          <AppHubMarquee />
        </div>
      }
      tag="Education · Web · Enterprise Platform"
      title="Redesigning the UX Architecture of Google's Global App Discovery Hub"
      summary="Sole UX designer at Huge, embedded with the Google for Education team. Owned the full UX architecture of a platform serving three fundamentally different user types — administrators, educators, and developers — through a single entry point connecting 108+ ed-tech apps globally."
      heroVariant="huge"
      heroImage="/assets/projects/huge/hero.png"
      heroAlt="Google for Education App Hub — live at edu.google.com"
      client="Google for Education"
      clientDisclaimer="Designed at Huge agency"
      role="UX Designer"
      chips={['Information Architecture · UX Research · Content Strategy']}
      context="The Google for Education App Hub is the central discovery platform for 108+ ed-tech applications — connecting administrators, educators, and developers to the tools that power Google's global education ecosystem. In 2024, the platform had three structural problems: no role-based entry points for its three distinct user types, a catalog with sort-only navigation and no filter logic, and integration type labels that were technically accurate but opaque to most users."
      myRole="Embedded as the sole UX designer at Huge, working directly with Google's product and marketing stakeholders. Owned the full UX architecture from a 20+ point heuristic audit of the existing experience through final UX handoff — including audience segmentation, information architecture, filter taxonomy, content hierarchy, and page flow. UI implementation was carried out within Google's design system by a separate team."
      signal="Three completely different people land on the same page. An IT administrator managing app governance across 500 schools. A teacher looking for a tool that works with Classroom by tomorrow morning. A developer evaluating API compatibility for an integration build. In 2024, all three arrived at the same undifferentiated App Hub — no role-based entry points, no paths aligned to their goals, and 108+ apps in a catalog with sort-only navigation and no filter logic. The page was organized around what Google offers. Not around who actually uses it — or why."
      signalImages={[
        {
          src: '/assets/projects/huge/before-hero.png',
          alt: 'Old App Hub hero — generic headline, single Explore apps dropdown, no audience segmentation',
          label: 'App Hub hero — undifferentiated, all audiences in one flow',
        },
        {
          src: '/assets/projects/huge/before-catalog.png',
          alt: 'Old All Apps page — Sort by only, no filters, no integration labels',
          label: 'All Apps — Sort by only, no filters or discovery paths',
        },
      ]}
      influence="Two inputs made the structural problem visible before a single wireframe was drawn."
      influenceBullets={[
        'A heuristic UX audit of the existing page documented 20+ structural issues: no above-the-fold differentiation between audience types, a catalog with sort-only navigation and no filtering, integration type labels that were technically accurate but opaque to most users, and section layouts that created scroll fatigue without hierarchy. The audit made every subsequent decision traceable to specific evidence.',
        'Best-practice research across leading catalog products — app stores, SaaS marketplaces, developer portals, content libraries — established the benchmark: at scale, discovery requires separating "what kind of user am I" from "what do I need today." No successful directory conflates these two questions.',
      ]}
      artifact="The design system was Google's. The architecture was the work. The deliverable wasn't a set of individual screens — it was the sequence and logic of a page that had to guide three fundamentally different users through the same URL to the right destination. Each section does specific cognitive work in preparation for the next: the hero signals the value proposition immediately; the audience segments help users self-identify; the integration type cards translate technical labels into concrete outcomes; the filter catalog gives users the tools to navigate once they know what they're looking for. Strip any one of those sections out of sequence and the page collapses into the same problem it had before: 108 options, no entry point, and three user types with nothing in common."
      decisions={[
        {
          num: '01',
          title: 'Three-audience segmentation above the fold',
          body: 'The page had one URL and three completely different user types. An IT administrator evaluating institutional compliance doesn\'t share a mental model with a teacher looking for a classroom tool or a developer building an API integration. The first structural decision was to lead with explicit self-identification: three parallel columns — Administrators, Educators, Developers/Partners — each with its own headline, description, and a "Discover apps" CTA that links directly to the catalog pre-filtered for that audience. This turns the segmentation from a layout choice into a functional shortcut: the moment a user identifies with a column, they have a path to a catalog that already reflects their context. The architecture decision underneath this is that the page should reduce the search space before showing the catalog, not after.',
        },
        {
          num: '02',
          title: 'Filter taxonomy ordered by decision priority',
          body: 'Before: 108+ apps, a single "Sort by" dropdown, and no filtering system. Users could reorder the list, but had no way to narrow it — every visitor saw the same undifferentiated catalog of every app in the library. The redesign addressed this in two moves. First, a five-dimension horizontal filter bar replaced the dropdown — Integration type, Institution type, Subject, Category, and Language — ordered by the sequence administrators and educators actually use to evaluate apps. Integration type leads because compatibility with existing tools is the first question in any institutional decision. Second, the catalog moved from a single continuous scroll to paginated sets. Asking users to scroll through 108+ apps without filtering is a navigation failure; pagination combined with filtering means users land on a manageable, relevant set rather than an infinite list they have to manually scan.',
        },
        {
          num: '03',
          title: 'Integration explainer as prerequisite, not decoration',
          body: 'The filter system had five integration type labels — App Licensing, Classroom Add-ons, SIS Integration, Classroom API, Share to Classroom. Technically accurate. Opaque to most users. An educator or administrator who doesn\'t work inside the ed-tech ecosystem daily doesn\'t know the difference between a Classroom Add-on and a Classroom API — and if they don\'t know, they won\'t filter by it. The solution wasn\'t a glossary. It was a section of three illustrated cards, each translating one integration type into a concrete visual outcome: "Seamlessly integrate teaching tools" shows an Add-ons panel with real apps listed. "Streamline class and grade management" shows a SIS connection flow — Select your SIS, Connect to Google. "Easily activate, provision, and manage apps" shows a License Usage dashboard. The section appears before the catalog. The architectural decision: users need to understand what they\'re filtering by before the filters are useful. Comprehension has to precede action.',
        },
        {
          num: '04',
          title: 'Editorial curation alongside search — solving the blank-slate problem',
          body: 'A filter system assumes intent. Most users don\'t arrive with it. An educator landing on the App Hub without a specific app in mind — just a vague need, a recommendation from a colleague, or pure exploration — faces a blank-slate problem: filtering requires knowing what you\'re looking for, but the intent hasn\'t formed yet. The "Discover trailblazing apps" editorial section creates an alternative discovery path. A rotating spotlight of notable or newly integrated apps gives users a starting point that doesn\'t require prior knowledge. The architectural logic: two coexisting discovery modes must exist in parallel — filter for users with specific criteria, browse for users who don\'t yet know what\'s possible. One without the other leaves half the audience without a path.',
        },
        {
          num: '05',
          title: 'In-page navigation as a wayfinding layer',
          body: 'A page this long — hero, audience segments, integration education, catalog — creates a navigation problem of its own. Users who arrive via a direct link or mid-page search result land without context for what surrounds them. The solution was a secondary sticky navigation bar that appears once the user scrolls past the hero: "Browse all apps · What\'s new · Resources." It gives users a persistent map of the page\'s major sections and lets them jump directly to the catalog without reading everything that precedes it. The UX decision: don\'t force every user through the full top-to-bottom sequence. Some users need the education layer; others already know what they\'re looking for and need a shortcut. The sticky nav makes the page\'s architecture visible and navigable rather than something users have to discover by scrolling.',
          href: 'https://edu.google.com/intl/ALL_us/resources/get-started/apps/',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/huge/screen-audiences.png',
          alt: 'App Hub — three parallel entry points for Administrators, Educators, and Developers',
        },
        {
          src: '/assets/projects/huge/screen-filters.png',
          alt: 'App library filter panel — Integration type, Institution type, Subject, Category, Language ordered by decision priority',
        },
        {
          src: '/assets/projects/huge/screen-integrations.png',
          alt: 'Apps with seamless integrations — three integration type cards explaining what each does and who it helps',
        },
        {
          src: '/assets/projects/huge/screen-trailblazing.png',
          alt: 'Discover trailblazing apps — editorial curation section featuring Wayground, Padlet, Discovery Education, Tinkercad',
        },
        {
          src: '/assets/projects/huge/screen-filters.png',
          alt: 'App Hub sticky in-page navigation — Browse all apps, What\'s new, Resources',
        },
      ]}
      decisionVariant="inline"
      artifactImages={false}
      outcomes={[
        "The redesigned App Hub is live at edu.google.com as the primary discovery platform for 108+ ed-tech integrations across Google for Education's global network.",
        "The three-audience architecture, filter taxonomy, and integration explainer structure the page's current information architecture since launch.",
        'The platform connects administrators, educators, and developers across every major region — the structural decisions made during this project serve users in schools worldwide.',
      ]}
      liveUrl="https://edu.google.com/intl/ALL_us/resources/get-started/apps/"
      nextProject={{
        number: '02',
        client: 'Banco de Bogotá',
        title: "Designing the Digital Onboarding Experience for Colombia's Largest Bank",
        href: '/work/banco-de-bogota',
      }}
    />
    </>
  )
}
