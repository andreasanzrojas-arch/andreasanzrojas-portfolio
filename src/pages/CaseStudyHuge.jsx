import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyHuge() {
  return (
    <CaseStudyCSIA
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
      artifact="Four structural decisions, each resolving a specific failure in the existing page for a specific user."
      decisions={[
        {
          num: '01',
          title: 'Three-audience segmentation above the fold',
          body: "Before: every user landed in the same place. An administrator managing institutional compliance and a teacher planning for tomorrow's class saw identical content — which means neither found what they needed. The redesign leads with three parallel entry points: Administrators (\"Manage apps at scale\"), Educators (\"Flexible teaching tools\"), Developers (\"Transform learning\"). Each segment sets a distinct path. This is an information architecture decision before it's a UI decision: if a user can't see themselves in the first fold, they leave. Role clarity at the entry point is the prerequisite for every other section on the page.",
        },
        {
          num: '02',
          title: 'Filter taxonomy ordered by decision priority',
          body: 'Before: 108+ apps, a single "Sort by" dropdown, and no filtering system. Users could reorder the list, but had no way to narrow it — every visitor saw the same undifferentiated catalog of every app in the library. The redesign addressed this in two moves. First, a five-dimension horizontal filter bar replaced the dropdown — Integration type, Institution type, Subject, Category, and Language — ordered by the sequence administrators and educators actually use to evaluate apps. Integration type leads because compatibility with existing tools is the first question in any institutional decision. Second, the catalog moved from a single continuous scroll to paginated sets. Asking users to scroll through 108+ apps without filtering is a navigation failure; pagination combined with filtering means users land on a manageable, relevant set rather than an infinite list they have to manually scan.',
        },
        {
          num: '03',
          title: 'Integration explainer as prerequisite, not decoration',
          body: 'The filter system had five integration type labels — App Licensing, Classroom Add-ons, SIS Integration, Classroom API, Share to Classroom. Technically accurate, but opaque to most educators and administrators who don\'t work in the ed-tech ecosystem daily. The UX decision: before the catalog, users needed a scannable section that translates each label into a utility-first structure — what it does, who it helps, where to start. The "Apps with seamless integrations" section is a prerequisite to the filter system, not a marketing block. Without it, users don\'t know what they\'re filtering by — so they don\'t filter at all.',
        },
        {
          num: '04',
          title: 'Editorial curation alongside search — solving the blank-slate problem',
          body: "A filter system assumes users know what they're looking for. Most don't. An educator landing on the App Hub without a specific app in mind faces a blank-slate problem: filtering requires intent, but the intent hasn't formed yet. The \"Discover trailblazing apps\" editorial section solves this by introducing a curation layer — a rotating spotlight of notable or newly integrated apps. The architectural decision is that discovery requires two coexisting modes: filter (for users with specific needs) and browse (for users who don't yet know what's possible). One without the other serves half the audience.",
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
      ]}
      decisionVariant="inline"
      artifactImages={false}
      outcomes={[
        "The redesigned App Hub is live at edu.google.com as the primary discovery platform for 108+ ed-tech integrations across Google for Education's global network.",
        "The three-audience architecture, filter taxonomy, and integration explainer structure the page's current information architecture since launch.",
        'The platform connects administrators, educators, and developers across every major region — the structural decisions made during this project serve users in schools worldwide.',
      ]}
      prototype="https://edu.google.com/intl/ALL_us/resources/get-started/apps/"
      liveUrl="https://edu.google.com/intl/ALL_us/resources/get-started/apps/"
      nextProject={{
        number: '02',
        client: 'Banco de Bogotá',
        title: "Designing the Digital Onboarding Experience for Colombia's Largest Bank",
        href: '/work/banco-de-bogota',
      }}
    />
  )
}
