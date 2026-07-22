// Placeholder content for the design prototype.
// Copy, metrics and imagery are PROVISIONAL — the goal is to evaluate
// hierarchy, layout, rhythm and perceived seniority, not final wording.

export const nav = {
  name: 'Andrea Sanz Rojas',
  links: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: { label: 'Resume', href: '#' },
}

export const hero = {
  eyebrow: 'Senior product design across fintech, banking, and AI-native workflows.',
  // Shorter single-line label for mobile only — same meaning, lighter visual weight
  eyebrowMobile: 'Senior product design in fintech & AI',
  name: 'Andrea Sanz Rojas',
  portrait: '/assets/andrea-portrait.jpg',
  // Leadership positioning statement (placeholder)
  headline: 'Leading complex product design at global scale.',
  sub: 'I help ambitious teams turn complex product problems into clear, scalable digital experiences — aligning design, systems and business goals.',
  ctas: [
    { label: 'See selected work', anchor: 'selected-work', style: 'primary' },
    { label: 'Get in touch', anchor: 'contact', style: 'secondary' },
  ],
}

export const marquee = [
  { image: '/assets/projects/huge/hero.png', link: '/work/huge' },
  { image: '/assets/projects/banco-bogota/bdb-landing.png', link: '/work/banco-de-bogota' },
  { image: '/assets/mastercard/hero.jpg', link: '/work/mastercard' },
  { image: '/assets/projects/monoma/mobile-3.png', link: '/work/monoma' },
  { image: '/assets/projects/travel-adventures/ta-star-agencies.png', link: '/work/travel-adventures' },
]

export const heroImages = [
  {
    src: '/assets/projects/huge/hero.png',
    alt: 'Google for Education App Hub',
    projectName: 'Google for Education · App Hub',
    brand: 'google',
    bg: '#ffffff',
    href: '/work/huge',
  },
  {
    src: '/assets/projects/banco-bogota/bdb-landing.png',
    alt: 'Banco de Bogotá CDT digital investing',
    projectName: 'Banco de Bogotá · CDT',
    brand: 'bancobogota',
    bg: '#ffffff',
    href: '/work/banco-de-bogota',
  },
  {
    src: '/assets/projects/globalpayments/gp-home-dashboard-card.png',
    alt: 'GlobalPayments merchant onboarding',
    projectName: 'GlobalPayments · Merchant',
    brand: 'globalpayments',
    bg: '#f5f5f5',
    href: '/work/mastercard',
  },
  {
    src: '/assets/projects/monoma/monoma-home-card.png',
    alt: 'Monoma digital banking',
    projectName: 'Monoma · Digital Banking',
    brand: 'monoma',
    bg: '#ffffff',
    href: '/work/monoma',
  },
  {
    src: '/assets/projects/travel-adventures/ta-discover-home-card.png',
    alt: 'Travel Adventures booking prototype',
    projectName: 'Travel Adventures',
    brand: 'travel',
    bg: '#f0f4f8',
    href: '/work/travel-adventures',
  },
]

export const credibility = {
  brands: ['huge', 'google', 'mastercard', 'bancobogota', 'imaginamos'],
  meta: 'Fintech · Banking · Global Education',
}

export const currently = 'Currently at Huge · Google'

export const principles = [
  {
    number: '01',
    statement: 'Clarity before craft.',
    description:
      'Mapped a 12-step analog CDT process before Figma. Research on 70% abandonment at upload reframed the entire brief.',
  },
  {
    number: '02',
    statement: 'Great design creates shared language.',
    description:
      'Built a component library across 30+ Mastercard client brands — shared language between UX, engineering, and brand.',
  },
  {
    number: '03',
    statement: 'The best decisions leave visible reasoning.',
    description:
      'Documented auto-renewal as a trust-breaking moment with research behind it. The fix became one of the launch\'s most celebrated features.',
  },
]

export const about = {
  headline: "I don't design screens. I design decisions.",
  intro:
    "I'm Andrea — a Senior Product Experience Designer combining visual craft, UX rigor, and systems thinking. 8 years across LATAM and Europe designing investment platforms, payment infrastructure, and digital banking — leading design from discovery to delivery, using AI-native workflows to close the gap between brief and outcome.",
  // Shorter mobile-only intro — keeps CTAs in the first viewport under Safari chrome
  introMobile:
    'Senior Product Experience Designer combining visual craft, UX rigor, and systems thinking across fintech, banking, and AI-enabled workflows.',
  bodyBio:
    "8 years across LATAM and Europe — investment platforms, payment infrastructure, digital banking. Products where every interaction carries weight. I've led design from discovery to delivery, adapted systems across 30+ enterprise clients, and integrated AI-native workflows to prototype faster, synthesize smarter, and close the gap between brief and outcome.",
  languages: [
    { name: 'Français', level: '' },
    { name: 'English', level: '' },
    { name: 'Italiano', level: '' },
    { name: 'Español', level: '' },
    { name: 'Português', level: 'LEARNING' },
    { name: 'Deutsch', level: 'ASPIRATIONAL' },
    { name: 'Русский', level: 'ASPIRATIONAL' },
  ],
  availability: 'Open to remote · On-site · Relocation to Europe',
  cta: { label: 'See selected work ↓', href: '#selected-work' },
}

export const stats = [
  { value: '8+', label: 'Years in enterprise product' },
  { value: '3', label: 'Global organizations' },
  { value: '5', label: 'Languages' },
  { value: '30+', label: 'Brand systems adapted · Mastercard' },
]

export const featured = [
  {
    id: 'huge',
    index: '01',
    tag: 'Education · Discovery · Scale',
    tags: ['Education', 'Discovery', 'Scale'],
    title: 'Scaling App Discovery at Google',
    subtitle: 'Google for Education App Hub — via Huge',
    framing:
      'Google for Education App Hub — discovery across an enterprise catalog of 108+ ed-tech apps, designed at Huge for millions of educators worldwide.',
    metric: 'Live at edu.google.com — millions of educators worldwide',
    metricLabel: '',
    company: 'Google for Education',
    confidential: false,
    confidentialNote: 'Designed at Huge',
    accent: 'from-[#1A73E8] to-[#34A853]',
    image: '/assets/projects/huge/hero.png',
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/huge' },
  },
  {
    id: 'banco-de-bogota',
    index: '02',
    tag: 'Banking · Colombia',
    tags: ['Banking', 'Colombia'],
    title: 'Bringing CDT Investing Online for Colombia’s Largest Bank',
    subtitle: 'CDT Digital — Banco de Bogotá',
    framing:
      'The first digital CDT journey for a regulated bank — a clearer path for customers to open a deposit online.',
    metric: '+30% digital CDT openings',
    metricLabel: '',
    company: 'Banco de Bogotá',
    confidential: false,
    confidentialNote: '',
    accent: 'from-[#1B3A57] to-[#2B5278]',
    image: '/assets/projects/banco-bogota/bdb-landing.png',
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/banco-de-bogota' },
  },
  {
    id: 'mastercard',
    index: '03',
    tag: 'Payments · Merchant',
    tags: ['Payments', 'Merchant'],
    title: 'Simplifying Merchant Payment Adoption at Global Scale',
    framing:
      'Merchant acquisition, loyalty, and marketplace — cutting activation from days to minutes inside a complex payments stack.',
    metric: 'Activation reduced from days to minutes',
    metricLabel: '',
    company: 'Mastercard · Enterprise Payments',
    accent: 'from-[#3A2E2A] to-[#6B4F3A]',
    image: '/assets/projects/globalpayments/gp-home-dashboard-card.png',
    bg: '#f5f5f5',
    cta: { label: 'View case study →', href: '/work/mastercard' },
    confidentialNote: 'Client branding anonymized for confidentiality.',
  },
  {
    id: 'monoma',
    index: '04',
    tag: 'Mobile · Banking · Systems',
    tags: ['Mobile', 'Banking', 'Systems'],
    title: 'Modernizing Mobile Banking for Everyday Customers',
    framing:
      'Mobile banking UX and shared component logic for a national bank — coherent journeys, not isolated screens.',
    metric: '+20% satisfaction post-iteration',
    metricLabel: '',
    company: 'Mastercard · Digital Banking',
    accent: 'from-[#1A3D2F] to-[#2D5E48]',
    image: '/assets/projects/monoma/monoma-home-card.png',
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/monoma' },
    confidentialNote: 'Client branding anonymized for confidentiality.',
  },
  {
    id: 'travel-adventures',
    index: '05',
    tag: 'Design Challenge · Craft',
    tags: ['Travel', 'Craft', 'Prototype'],
    title: 'High-Fidelity Flows for Decision-Heavy Travel Planning',
    subtitle: 'Travel Adventures — AI Travel Booking Concept',
    framing:
      'Design challenge exploring itinerary complexity — interaction design, prototyping, and polished product UI.',
    metric: 'High-fidelity prototype · Interaction & visual systems',
    metricLabel: '',
    company: 'Design Challenge',
    accent: 'from-[#2A3A4A] to-[#4A5A6A]',
    image: '/assets/projects/travel-adventures/ta-discover-home-card.png',
    bg: '#f0f4f8',
    cta: { label: 'View case study →', href: '/work/travel-adventures' },
  },
]

export const capabilities = [
  {
    label: 'AI-Augmented Workflows',
    body: 'I use Claude for research synthesis, Cursor for rapid prototyping, and ChatGPT for content strategy. What used to take 2 weeks of discovery now takes 3 days — without cutting corners on quality.',
  },
]

export const process = {
  intro: "My process adapts to the project. The discipline behind it doesn't.",
  steps: [
    {
      label: 'Context & Discovery',
      description:
        'User research, competitive analysis, and stakeholder alignment. Frame the real problem before opening Figma.',
    },
    {
      label: 'Strategy & Design',
      description:
        'Frame decisions before pixels. Rapid iteration across flows, components, and edge cases.',
    },
    {
      label: 'Test & Validate',
      description:
        'Usability testing and data-informed refinement. Every test argues for the next design decision.',
    },
    {
      label: 'Deliver & Impact',
      description:
        'Handoff with specs, tokens, and annotations — then measure adoption, conversion, and satisfaction.',
    },
  ],
}

export const tools = ['Figma', 'Cursor', 'Claude', 'ChatGPT', 'Jitter']

export const methods = ['Design Thinking', 'Google Sprints', 'Double Diamond', 'Scrum', 'Agile']

export const coreSkills = [
  { label: 'Product Experience Design', description: 'End-to-end product design from research to high-fidelity' },
  { label: 'Product Strategy', description: 'Defining product direction and priorities' },
  { label: 'UX Research', description: 'Interviews, heatmaps, journey mapping' },
  { label: 'Interaction Design', description: 'Flows, micro-interactions, prototyping' },
  { label: 'Systems & Components', description: 'Component libraries, tokens, and scalable Figma systems' },
  { label: 'Prototyping', description: 'Clickable flows and interaction specs' },
  { label: 'Design Thinking', description: 'Double Diamond, problem framing' },
  { label: 'Google Sprints', description: '5-day sprint facilitation' },
  { label: 'Stakeholder Management', description: 'Alignment across product, tech and business' },
  { label: 'Cross-functional Collaboration', description: 'Partnering with engineering and product' },
  { label: 'Inclusive Design', description: 'Designing for diverse users — contrast, legibility, keyboard navigation, and inclusive interaction patterns.' },
  { label: 'AI-Assisted Workflows', description: 'Claude, ChatGPT, Cursor as daily tools' },
  { label: 'Mobile', description: 'iOS and Android native patterns' },
  { label: 'Web', description: 'Responsive web product design' },
  { label: 'Fintech', description: '8+ years in financial products' },
  { label: 'Banking', description: 'Retail and enterprise banking UX' },
]

// Curated, Lead-level capabilities — editorial (label + one-line), not a tag cloud.
export const coreCapabilities = [
  {
    label: 'Product Strategy',
    description: 'Framing the real problem and setting a direction teams can scale.',
  },
  {
    label: 'Systems Thinking',
    description: 'Designing information architecture and interaction logic before screens.',
  },
  {
    label: 'Design Systems at Scale',
    description: 'Component libraries and tokens adapted across 30+ enterprise brands.',
  },
  {
    label: 'AI-Native Workflows',
    description:
      'Embedding AI across research, strategy, UX writing, design exploration, prototyping, documentation, and delivery.',
  },
  {
    label: 'Research & Discovery',
    description:
      'User interviews, journey mapping, and insight synthesis that shape product direction.',
  },
  {
    label: 'Stakeholder Alignment',
    description: 'Building alignment across product, engineering, business, and design.',
  },
  {
    label: 'Interaction & Prototyping',
    description: 'High-fidelity interfaces, interaction design, and production-ready prototypes.',
  },
  {
    label: 'Fintech & Banking Domain',
    description:
      'Enterprise payments, regulated banking, digital investment products, and financial platforms.',
  },
]

export const experience = [
  {
    company: 'Huge — Google',
    logoKey: 'huge',
    role: 'Senior Experience Designer',
    dates: 'March 2025–Present',
    current: true,
    impact:
      'Designing product experiences for Google for Education and YouTube Blog — intuitive experiences for educators and global audiences.',
    context:
      'Designing product experiences for Google for Education and YouTube Blog — creating intuitive experiences for educators and global audiences. AI-native tools accelerate prototyping and research synthesis.',
    methods: 'Methods: Design Thinking · Agile Sprints · Cross-functional alignment',
  },
  {
    company: 'Mastercard',
    logoKey: 'mastercard',
    role: 'Senior Product Experience Designer',
    dates: 'April 2022–January 2025',
    impact:
      'Led enterprise payment design across LATAM and Europe — multi-market products, workshops, and design systems adapted for 30+ clients.',
    context:
      'Led enterprise payment design across LATAM and Europe — multi-market products, workshops, and design systems adapted for 30+ clients serving 90M+ cardholders.',
    methods: 'Methods: Design Thinking · Cross-functional alignment',
  },
  {
    company: 'Banco de Bogotá',
    logoKey: 'bancobogota',
    role: 'Product Designer',
    dates: 'Aug 2017–April 2022',
    impact:
      'Designed digital banking experiences across investments, authentication, security, and financial products, including CDT Digital (+30% digital openings).',
    context:
      'Designed digital banking experiences across investments, authentication, security, and financial products, including CDT Digital (+30% digital openings).',
    methods: 'Methods: Design Thinking · Scrum · Sprint-based delivery',
  },
  {
    company: 'Imaginamos',
    logoKey: 'imaginamos',
    role: 'UX Designer',
    period: 'Mar 2017–Aug 2017',
    location: 'Colombia',
    impact:
      'Designed web and mobile products for startups and enterprise clients, from concept to high-fidelity experiences.',
    description:
      'Designed web and mobile products for startups and enterprise clients, from concept to high-fidelity experiences.',
    tags: ['UX Design', 'Prototyping'],
  },
]

export const focus = {
  statement:
    'I design for the level of the business and the org — framing the problem, aligning the room, and setting a direction teams can scale.',
  stats: [
    { value: '8+', label: 'Years leading product design' },
    { value: '3', label: 'Global organizations' },
    { value: 'Fintech', label: 'Banking & payments domains' },
  ],
}

export const pov = {
  label: 'How I lead',
  body: [
    'I start with the hardest question, not the first screen — what is actually worth solving, and why does it matter to the business?',
    'From there I align stakeholders around a clear direction, design the system rather than the page, and stay accountable to outcomes long after launch.',
  ],
}

export const secondary = {
  label: 'More work',
  items: [],
}

export const footer = {
  cta: 'Let’s work on something that matters.',
  line: 'Currently designing enterprise products. Open to the next meaningful challenge.',
  email: 'andreasanzrojas@gmail.com',
  links: [
    { label: 'Email', href: 'mailto:andreasanzrojas@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/andrea-sanz-rojas-66329a106' },
  ],
  contact: [
    { label: 'andreasanzrojas@gmail.com', href: 'mailto:andreasanzrojas@gmail.com' },
    {
      label: 'linkedin.com/in/andrea-sanz-rojas-66329a106',
      href: 'https://linkedin.com/in/andrea-sanz-rojas-66329a106',
    },
  ],
  human: 'Off the clock: jewelry design, travel, and the future of fintech.',
}
