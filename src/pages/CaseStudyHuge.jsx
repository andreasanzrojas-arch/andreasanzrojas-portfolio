import CaseStudyCSIA from '../components/CaseStudyCSIA'

export default function CaseStudyHuge() {
  return (
    <CaseStudyCSIA
      tag="Education · Web · Enterprise Platform"
      title="Redesigning the UX Architecture of Google's Global App Discovery Hub"
      summary="Sole UX designer at Huge, responsible for the full structural redesign of Google for Education's App Hub — the central discovery platform connecting 108+ ed-tech apps with administrators, educators, and developers worldwide."
      heroVariant="huge"
      heroImage="/assets/projects/huge/hero.png"
      heroAlt="Google for Education App Hub — live at edu.google.com"
      client="Google for Education"
      clientDisclaimer="Designed at Huge agency"
      role="UX Designer"
      chips={['Information Architecture · UX Research · Content Strategy']}
      context="Sole UX designer at Huge, embedded with the Google for Education team. Owned the full UX architecture of the App Hub refresh — from heuristic audit and structural decisions to audience segmentation, filter taxonomy, and page flow. UI implementation was handled within Google's design system by a separate team. Worked directly with Google's education product and marketing stakeholders to align the redesign with platform goals."
      signal="The App Hub had four documented structural problems. First: no audience differentiation. Administrators, educators, and developers arrived at the same undifferentiated hero — a generic 'The power of great apps and Google' headline with a single 'Explore apps' dropdown button. The three audience pathways did exist in the old design, but were buried inside a carousel section below the fold — invisible to anyone who didn't scroll far enough, and functioning as passive content rather than navigation. Second: the filter system existed but failed. Integration type labels had no tooltips or explanations. Age ranges mixed student grades (K–5, 6–8) with user roles (Admins/Staff, Educators) in the same filter. The categories list had 22 items with no internal search. The languages filter had 40+ options with no grouping or search. Third: the 'All Apps' page had no filters whatsoever — only a basic Sort by (A–Z/Z–A) dropdown for 48+ apps. Fourth: integration pathway content used identical visual structures stacked vertically — a documented scroll fatigue issue with no hierarchy to differentiate them."
      influence="Two inputs shaped every structural decision."
      influenceBullets={[
        'Heuristic UX audit of the existing page — annotated 20+ UX issues across the full App Hub before the redesign began: audience clarity gaps, filter taxonomy failures, navigation dead ends, and CTA inconsistencies. The audit formed the evidence base for each architectural decision and determined prioritization.',
        'Best-practice research on filterable repository experiences — studied how leading catalog and directory products (app stores, SaaS marketplaces, content libraries) structure discovery, filter hierarchy, and editorial curation at scale. This shaped both the filter taxonomy and the decision to add a curation layer alongside search.',
      ]}
      artifact="Four structural decisions — each a direct response to a documented audit finding."
      decisions={[
        {
          num: '01',
          title: 'Three-audience segmentation above the fold',
          body: 'The audit documented that the three audience pathways (Administrators, Educators, Developers) existed in the old design — but were buried in a carousel section below the fold, functioning as passive benefits content rather than navigation. Anyone who arrived with a specific role in mind had no way to self-identify above the fold. The redesign moves these pathways to the top of the page as explicit entry points: "Manage apps at scale," "Flexible teaching tools," "Transform learning." The architecture makes the page\'s value proposition immediately legible regardless of who arrives — without requiring users to scroll to discover whether the page is relevant to them.',
        },
        {
          num: '02',
          title: 'Filter taxonomy for 108+ app catalog',
          body: 'The audit identified three specific filter failures: integration types had no explanations (users couldn\'t understand what "SIS Integration" or "Classroom API" meant without context), age ranges mixed student grades with user roles in the same filter dimension, and the categories list had 22 items with no internal search. The redesign resolved each: Integration type leads the filter hierarchy because compatibility (how an app connects to existing tools) is the first decision administrators make — before subject or category. Clear label hierarchy eliminates the role/grade confusion. Filter dimensions are reduced and made scannable. Integration type is given priority because without understanding it, the catalog is not navigable.',
        },
        {
          num: '03',
          title: 'Integration explainer as a UX decision — not marketing copy',
          body: 'The audit found that integration pathway sections used identical visual structures stacked vertically, creating scroll fatigue with no hierarchy to differentiate them. More critically: the filter labels for integration types ("App Licensing," "Classroom Add-ons," "SIS Integration," "Classroom API," "Share to Classroom") were technically accurate but completely opaque to most users. The redesign solution: distill each integration type into a utility-first structure — what it does → who it helps → where to start — before the user reaches the catalog. The "One platform: seamless, simple, and safe" section exists because the filter labels are meaningless without this prerequisite. It\'s a UX decision that makes the rest of the page functional.',
        },
        {
          num: '04',
          title: 'Editorial curation layer alongside search/filter',
          body: 'The audit documented that the old "All Apps" page had only a Sort by (A–Z/Z–A) dropdown for 48+ apps — no filters, no curation, no discovery path for users who didn\'t already know what they were looking for. Filtering alone creates a blank-slate problem: it only surfaces apps the user already knows to search for. The "Discover trailblazing apps" editorial section introduces a curation layer — a spotlight of notable or newly integrated apps — that works alongside filtering. This reflects a deliberate content architecture decision: discovery requires both filtering (for users with specific needs) and curation (for users who don\'t yet know what\'s possible). The two modes coexist rather than compete.',
        },
      ]}
      decisionImages={[
        {
          src: '/assets/projects/huge/screen-audiences.png',
          alt: 'Google for Education App Hub — three-audience segmentation: Administrators, Educators, Developers',
        },
        {
          src: '/assets/projects/huge/screen-filters.png',
          alt: 'App library filter panel showing Integration type, Institution type, Subject, Category, and Language dimensions',
        },
        {
          src: '/assets/projects/huge/screen-integrations.png',
          alt: 'One platform section explaining Classroom add-ons, SIS roster sync, and App Licensing for administrators',
        },
        {
          src: '/assets/projects/huge/screen-trailblazing.png',
          alt: 'Discover trailblazing apps editorial section featuring Wayground, Padlet, Discovery Education, and Tinkercad',
        },
      ]}
      decisionVariant="inline"
      artifactImages={false}
      outcomes={[
        'Live at edu.google.com/resources/get-started/apps — part of Google for Education\'s global platform serving millions of educators and administrators',
        '108+ partner apps discoverable through a structured filter taxonomy spanning 5 integration types, 3 institution types, 18+ subjects, and 20+ content categories',
        'Three-audience architecture replaced a single undifferentiated flow — administrators, educators, and developers each have a clear entry point on first visit',
        'UX architecture delivered as sole designer at Huge, based on a formal heuristic audit of the existing experience — with UI implementation carried out within Google\'s design system by a separate team',
      ]}
      nextProject={{
        number: '02',
        client: 'Banco de Bogotá',
        title: "Designing the Digital Onboarding Experience for Colombia's Largest Bank",
        href: '/work/banco-de-bogota',
      }}
    />
  )
}
