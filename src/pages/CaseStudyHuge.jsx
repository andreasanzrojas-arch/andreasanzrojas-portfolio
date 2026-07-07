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
      context="Sole UX designer at Huge, embedded with the Google for Education team. Owned the full UX architecture of the App Hub refresh — from structural decisions and audience segmentation to filter taxonomy and page flow. UI implementation was handled within Google's design system by a separate team. Worked directly with Google's education product and marketing stakeholders to align the redesign with platform goals."
      signal="The App Hub had grown into an unfocused page that tried to serve three fundamentally different audiences — school administrators managing institutional app decisions, educators looking for classroom tools, and developers building integrations — without a clear structure for any of them. Simultaneously, 108+ partner apps needed to be discoverable through a catalog that had no consistent filtering logic. The redesign challenge was architectural: how do you create a single entry point that immediately orients three distinct user types, while making a catalog of 108+ apps genuinely navigable?"
      influence="Two inputs shaped every structural decision."
      influenceBullets={[
        'Best-practice research on filterable repository experiences — studied how leading catalog and directory products (app stores, SaaS marketplaces, content libraries) structure discovery, filter hierarchy, and content curation at scale',
        'Audience mapping: the three stakeholders have non-overlapping jobs. Administrators need institutional governance. Educators need classroom utility. Developers need technical and business context. The single-flow structure was the core UX failure to resolve',
      ]}
      artifact="Four structural decisions that resolved the audience clarity and discovery problems."
      decisions={[
        {
          num: '01',
          title: 'Three-audience segmentation above the fold',
          body: 'The page previously addressed all three audiences in one undifferentiated flow. The redesign leads with three parallel pathways: Administrators ("Manage apps at scale"), Educators ("Flexible teaching tools"), Developers ("Transform learning"). Each segment links to a tailored discovery path. The architecture makes the page\'s value proposition immediately legible regardless of who arrives — without requiring users to self-select through generic navigation.',
        },
        {
          num: '02',
          title: 'Filter taxonomy for 108+ app catalog',
          body: 'The app library needed to be navigable at scale without becoming overwhelming. The filter system organizes discovery across five dimensions: Integration type, Institution type (Primary / Secondary / Higher Ed), Subject, Category, and Language. Integration type leads the hierarchy — it answers "how does this app connect to the tools you already use" before "what subject does it cover." This ordering reflects how administrators and educators actually evaluate apps: compatibility first, content second.',
        },
        {
          num: '03',
          title: 'Integration explainer as a UX decision — not marketing copy',
          body: 'Google\'s five integration types (App Licensing, Classroom Add-ons, SIS Integration, Classroom API, Share to Classroom) were technically accurate but not scannable. The redesign distilled each integration into a utility-first structure: what it does → who it helps → where to start. The "One platform: seamless, simple, and safe" section exists because without it, the filter labels alone were meaningless to most users. The explainer is a prerequisite to the catalog, not decoration.',
        },
        {
          num: '04',
          title: 'Editorial curation layer alongside search/filter',
          body: 'Filtering alone creates a blank-slate problem — it only surfaces apps the user already knows to look for. The "Discover trailblazing apps" editorial section introduces a curation layer: a rotating spotlight of notable or newly integrated apps. This reflects a deliberate content architecture decision: discovery requires both filtering (for users with specific needs) and curation (for users who don\'t yet know what\'s possible). The two modes coexist rather than compete.',
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
        'UX architecture delivered as sole designer at Huge, with UI implementation carried out within Google\'s design system by a separate team',
      ]}
      nextProject={{
        number: '02',
        client: 'Banco de Bogotá',
        title: 'Designing the Digital Onboarding Experience for Colombia\'s Largest Bank',
        href: '/work/banco-de-bogota',
      }}
    />
  )
}
