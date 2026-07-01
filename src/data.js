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
  eyebrow: 'Senior Product Experience Designer · Visual Design · AI',
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
  { image: '/assets/projects/banco-bogota/bdb-landing.png', link: '/work/banco-de-bogota' },
  { image: '/assets/mastercard/hero.jpg', link: '/work/mastercard' },
  { image: '/assets/projects/monoma/mobile-3.png', link: '/work/monoma' },
  { image: '/assets/travel/hero.jpg', link: '/work/travel-adventures' },
]

export const heroImages = [
  {
    src: '/assets/projects/banco-bogota/bdb-landing.png',
    alt: 'Banco de Bogotá CDT digital investing',
    projectName: 'Banco de Bogotá · CDT',
    brand: 'bancobogota',
    bg: '#ffffff',
    href: '/work/banco-de-bogota',
  },
  {
    src: '/assets/projects/globalpayments/hero.png',
    alt: 'GlobalPayments merchant onboarding',
    projectName: 'GlobalPayments · Merchant',
    brand: 'globalpayments',
    bg: '#f5f5f5',
    href: '/work/mastercard',
  },
  {
    src: '/assets/projects/monoma/android-1.png',
    alt: 'Monoma digital banking',
    projectName: 'Monoma · Digital Banking',
    brand: 'monoma',
    bg: '#ffffff',
    href: '/work/monoma',
  },
  {
    src: '/assets/projects/travel-adventures/hero.png',
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

export const currently = 'Currently at Huge · Google for Education'

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
    "I'm Andrea — a Senior Product Experience Designer combining visual craft, UX rigor, and systems thinking to build digital products that earn confidence.",
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
    id: 'banco-de-bogota',
    index: '01',
    tag: 'Banking · Colombia',
    tags: ['Banking', 'Colombia'],
    title: 'Rebuilding Digital Investing at Colombia’s Largest Bank',
    subtitle: 'CDT Digital — Banco de Bogotá',
    framing: 'End-to-end redesign of CDT digital investment flow.',
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
    index: '02',
    tag: 'Fintech · Enterprise · Global Payments',
    tags: ['Fintech', 'Enterprise', 'Global Payments'],
    title: 'Simplifying Merchant Payment Adoption at Global Scale',
    framing: 'Onboarding redesign for a global payments platform.',
    metric: 'Activation reduced from days to minutes',
    metricLabel: '',
    company: 'Mastercard',
    accent: 'from-[#3A2E2A] to-[#6B4F3A]',
    image: '/assets/mastercard/hero.jpg',
    bg: '#f5f5f5',
    cta: { label: 'View case study →', href: '/work/mastercard' },
    confidentialNote: 'Name changed · Client confidential',
  },
  {
    id: 'monoma',
    index: '03',
    tag: 'Fintech · Banking · Design System',
    title: 'Monoma Banco Nacional',
    framing: 'Mobile banking redesign for a major Latin American bank.',
    metric: '+20% satisfaction post-iteration',
    metricLabel: '',
    company: 'Banco Nacional',
    accent: 'from-[#1A3D2F] to-[#2D5E48]',
    image: '/assets/projects/monoma/mobile-3.png',
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/monoma' },
    confidentialNote: 'Name changed · Client confidential',
  },
  {
    id: 'travel-adventures',
    index: '04',
    tag: 'UX Design · Mobile · Travel · Prototype',
    tags: ['UX Design', 'Mobile', 'Travel', 'Prototype'],
    title: 'Designing Complex Itinerary Flows for Decision-Heavy Booking',
    subtitle: 'Travel Adventures — AI Travel Booking Concept',
    framing: 'Research-to-prototype for an AI travel booking concept.',
    metric: 'Research → Prototype · Figma · Design system',
    metricLabel: '',
    company: 'Personal project',
    accent: 'from-[#2A3A4A] to-[#4A5A6A]',
    image: '/assets/projects/travel-adventures/hero.png',
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

export const tools = ['Figma', 'Cursor', 'Claude', 'ChatGPT', 'Jitter', 'FigJam']

export const methods = ['Design Thinking', 'Google Sprints', 'Scrum', 'Agile', 'Double Diamond']

export const coreSkills = [
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

export const experience = [
  {
    company: 'Huge — Google for Education',
    logoKey: 'huge',
    role: 'Senior Experience Designer',
    dates: 'March 2025–Present',
    context:
      'Leading product design for Google for Education — UX for discoverability, acquisition, and value at global scale. AI-native tools accelerate prototyping and research synthesis.',
    methods: 'Methods: Design Thinking · Agile Sprints · Cross-functional alignment',
  },
  {
    company: 'Mastercard',
    logoKey: 'mastercard',
    role: 'Senior Product Experience Designer',
    dates: 'April 2022–January 2025',
    context:
      'Led design strategy for payment products across LATAM and Europe, impacting 90M+ cardholders. Adapted brand systems for 30+ clients and designed payment flows across markets and compliance environments.',
    methods: 'Methods: Design Thinking · Cross-functional alignment',
  },
  {
    company: 'Banco de Bogotá',
    logoKey: 'bancobogota',
    role: 'Product Designer',
    dates: 'July 2017–April 2022',
    context:
      "Drove digital transformation at one of Colombia's largest banks. Redesigned onboarding flows — reducing drop-off and increasing digital product openings by 30%.",
    methods: 'Methods: Design Thinking · Scrum · Sprint-based delivery',
  },
  {
    company: 'Imaginamos',
    logoKey: 'imaginamos',
    role: 'UX Designer',
    period: 'Mar 2017 – Sep 2017',
    location: 'Colombia',
    description:
      'Designed interfaces for digital clients using Design Thinking — interactive prototypes across web and mobile.',
    tags: ['UX Design', 'Prototyping', 'Design Thinking'],
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
  line: 'Open to Lead and Senior Product Designer roles — remote worldwide, relocation to Europe.',
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
