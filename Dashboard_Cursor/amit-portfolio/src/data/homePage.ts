import type { CategorySlug } from './portfolio';

export interface HomePageContent {
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    socialProof: string;
    bio: string;
    portrait: string;
    trustBar: string[];
  };
  specialization: {
    watermark: string;
    heading: string;
    description: string;
  };
  bentoCards: {
    icon: string;
    title: string;
    description: string;
    wide?: boolean;
  }[];
  process: {
    watermark: string;
    heading: string;
    description: string;
    illustration: string;
  };
  projects: {
    watermark: string;
    heading: string;
    description: string;
  };
  career: {
    watermark: string;
    heading: string;
    description: string;
  };
  about: {
    watermark: string;
    heading: string;
    description: string;
    paragraphs: string[];
    whatIBring: { icon: string; label: string }[];
    skills: string[];
  };
  caseStudy: {
    watermark: string;
    heading: string;
    description: string;
    image: string;
    linkId: string;
    problem: string;
    research: string;
    solution: string;
    outcome: string;
  };
  midPageCta: {
    heading: string;
    description: string;
    buttonLabel: string;
  };
  footerCta: {
    heading: string;
    description: string;
    screenshot: string;
  };
  contact: {
    heading: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    linkedinLabel: string;
    behance: string;
    behanceLabel: string;
    footerNote: string;
    footerLocation: string;
    website: string;
  };
}

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  tenure: string;
  initials: string;
  keyAchievement: string;
  highlights: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  icon: string;
  items: string[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  hoverDescription: string;
  outcomeStat: string;
  metrics: string[];
  badge: string;
  gridMetrics: { icon: string; label: string }[];
  tags: string[];
  slug: CategorySlug;
  number: string;
  placeholder: string;
  accent: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const homePage: HomePageContent = {
  hero: {
    greeting: "Hello, it's me",
    name: 'Amit Tadvi',
    tagline: 'Senior Product Designer · 9+ Years · Aviation · Healthcare · HR Tech',
    socialProof: 'Available for full-time · contract · freelance',
    bio: 'I design enterprise products, mobile apps, and web experiences that turn complexity into clarity — shipped end-to-end from discovery to developer handoff.',
    portrait: '/images/character.png?v=2',
    trustBar: ['AV DEVS', '9+ Years', 'Aviation · Healthcare · HR Tech'],
  },
  specialization: {
    watermark: 'my skillset',
    heading: 'Ship great products',
    description:
      'From ambiguous problem to shipped product — I operate across the full design stack.',
  },
  bentoCards: [
    {
      icon: 'ti-layout-dashboard',
      title: 'Product Design',
      description:
        'End-to-end product design from discovery through high-fidelity Figma specs and developer-ready handoff.',
    },
    {
      icon: 'ti-building-skyscraper',
      title: 'Enterprise SaaS',
      description:
        'ERP, CRM, and multi-module B2B platforms with role-based UX and complex workflows.',
    },
    {
      icon: 'ti-device-mobile',
      title: 'Mobile Design',
      description:
        'iOS and Android apps grounded in Material You, Apple HIG, and usability testing.',
    },
    {
      icon: 'ti-world',
      title: 'Web Product Design',
      description:
        'Responsive, conversion-optimized web experiences built for performance and SEO.',
    },
    {
      icon: 'ti-components',
      title: 'Design Systems',
      description:
        'Scalable component libraries, token-based design systems, and Figma auto-layout architecture that engineering teams love.',
    },
    {
      icon: 'ti-chart-bar',
      title: 'UX Research',
      description:
        'Stakeholder interviews, usability testing, journey mapping, and insight-led iteration.',
    },
  ],
  process: {
    watermark: 'how i work',
    heading: 'Brief to shipped',
    description:
      'A repeatable framework I use across every project — from discovery to developer handoff.',
    illustration: '/images/process-flow.png?v=4',
  },
  projects: {
    watermark: 'recent projects',
    heading: 'Work portfolio',
    description:
      "A selection of enterprise, mobile, and web products I've designed end-to-end.",
  },
  career: {
    watermark: 'experience',
    heading: 'Career',
    description: 'Nine years of shipping product experiences across aviation, healthcare, HR tech, fintech, and education.',
  },
  about: {
    watermark: 'about me',
    heading: 'Designing Products with Purpose',
    description: 'Product designer focused on clarity, systems thinking, and measurable outcomes.',
    paragraphs: [
      'Senior Product Designer with 9+ years owning the full product design lifecycle — from ambiguous problem spaces to polished, shipped products. I thrive at the intersection of user empathy, business strategy, and technical feasibility.',
      "I've built scalable SaaS products, enterprise software, and mobile applications — creating design systems that help teams ship faster without compromising quality.",
    ],
    whatIBring: [
      { icon: 'ti-components', label: 'Systems thinking' },
      { icon: 'ti-users', label: 'Cross-functional collaboration' },
      { icon: 'ti-rocket', label: 'Zero-to-one product experience' },
    ],
    skills: [
      'Product Design',
      'UX Strategy',
      'Design Systems',
      'Figma',
      'Prototyping',
      'User Research',
      'Usability Testing',
      'Information Architecture',
      'Interaction Design',
      'Visual Design',
      'Accessibility (WCAG 2.1)',
      'Agile / Scrum',
      'SaaS',
      'Enterprise Software',
      'Mobile Product Design',
      'B2B Product Design',
      'Data-Informed Design',
    ],
  },
  caseStudy: {
    watermark: 'case study',
    heading: 'Fintech Onboarding Redesign',
    description: 'How research-led iteration reduced drop-off and accelerated time-to-value.',
    image: 'https://picsum.photos/seed/casestudy-mockup/1160/552',
    linkId: 'fintech',
    problem:
      'Users abandoned onboarding at identity verification — unclear progress, redundant steps, and low trust in the flow.',
    research:
      '12 moderated interviews, funnel analytics, and competitive benchmarking revealed verification anxiety and unclear next steps as primary friction points.',
    solution:
      'Restructured the flow into scannable steps, added progress transparency, contextual help, and a unified visual system aligned with the core product.',
    outcome:
      'Reduced onboarding drop-off by 34%, improved completion rate, and shipped in Q3 2024 with positive CSAT on the new experience.',
  },
  midPageCta: {
    heading: "Like what you see? Let's talk.",
    description: 'Open to full-time roles, product contracts, and design consulting.',
    buttonLabel: 'Start a Conversation',
  },
  footerCta: {
    heading: "Let's build something great together.",
    description:
      'Open to senior product design roles, contract work, and design consulting across enterprise, mobile, and web.',
    screenshot: '/images/featured/enterprise-saas.png',
  },
  contact: {
    heading: "Let's build something great together.",
    description: 'Reach out for product design opportunities, collaborations, or portfolio walkthroughs.',
    phone: '+91 98980 86164',
    email: 'amittadvi1412@gmail.com',
    location: 'Vadodara, India',
    linkedin: 'https://www.linkedin.com/in/amitinnovateux/',
    linkedinLabel: 'linkedin.com/in/amitinnovateux',
    behance: 'https://www.behance.net/amittadvi',
    behanceLabel: 'behance.net/amittadvi',
    footerNote: '© 2026 Amit Tadvi. Designed & built with purpose.',
    footerLocation: 'Vadodara, India · Open to remote worldwide',
    website: 'https://avdevs.com',
  },
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Amit brings structure to ambiguity — he translates complex stakeholder requirements into clear product direction and ships polished, accessible interfaces on tight timelines.',
    author: 'Product Lead',
    role: 'Enterprise SaaS · AV DEVS',
  },
  {
    quote:
      'Real-time collaboration with Amit accelerated our design cycles. He provides instant feedback on complex workflows and keeps engineering aligned through clear Figma specs.',
    author: 'Engineering Manager',
    role: 'B2B Platform · ekZero',
  },
  {
    quote:
      'Amit brings clarity to daily product work. Meetings, tasks, and design decisions finally live in one coherent system — collaboration is smoother and decisions happen faster.',
    author: 'Operations Lead',
    role: 'Fintech · Credin',
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Enterprise SaaS Product Design',
    description:
      'Led end-to-end product design for a B2B SaaS platform — from discovery workshops and user research to shipped UI.',
    hoverDescription:
      'Unified multi-module workflows into a scalable design system used across aviation and healthcare products.',
    outcomeStat: '↓ 30% handoff time · Shipped Q2 2024',
    metrics: ['↓ Operational friction', '· Multi-module', '· B2B SaaS'],
    badge: 'Enterprise SaaS',
    gridMetrics: [
      { icon: 'ti-layout-dashboard', label: '8+ Modules' },
      { icon: 'ti-building', label: '3 Industries' },
    ],
    tags: ['Product Design', 'Figma', 'B2B SaaS'],
    slug: 'erp',
    number: '01',
    placeholder: '/images/featured/enterprise-saas.png',
    accent: 'from-slate-900/40 to-brand/10',
  },
  {
    title: 'Mobile Product Design',
    description:
      'Owned the full product design lifecycle for a consumer mobile application, including flows, prototyping, and handoff.',
    hoverDescription:
      'Redesigned core task flows to reduce taps and improve completion rates on mobile-first workflows.',
    outcomeStat: '↑ 22% task completion · Shipped Q1 2024',
    metrics: ['iOS + Android', '· End-to-end', '· High-fidelity'],
    badge: 'Mobile Apps',
    gridMetrics: [
      { icon: 'ti-device-mobile', label: 'iOS + Android' },
      { icon: 'ti-chart-line', label: '↑ 22% completion' },
    ],
    tags: ['Product Design', 'Mobile', 'Prototyping'],
    slug: 'app',
    number: '02',
    placeholder: '/images/featured/mobile-product-design.png',
    accent: 'from-violet-950/40 via-brand/15 to-brand/10',
  },
  {
    title: 'Website Design',
    description:
      'Designed responsive marketing and corporate websites with conversion-focused layouts and mobile-first visual systems.',
    hoverDescription:
      'Balanced brand storytelling with performance-focused page architecture for enterprise clients.',
    outcomeStat: '↑ 18% lead form starts · Shipped Q4 2023',
    metrics: ['Responsive', '· Conversion-focused', '· Figma-to-dev'],
    badge: 'Web Design',
    gridMetrics: [
      { icon: 'ti-world', label: 'Responsive' },
      { icon: 'ti-chart-line', label: '↑ 18% leads' },
    ],
    tags: ['Web Design', 'Visual Design', 'Marketing'],
    slug: 'web-design',
    number: '03',
    placeholder: '/images/featured/website-design.png',
    accent: 'from-slate-900/30 to-brand/10',
  },
  {
    title: 'UX Research & Strategy',
    description:
      'Conducted qualitative and quantitative research programs to directly inform product roadmap decisions.',
    hoverDescription:
      'Synthesized research into actionable product requirements aligned with business KPIs.',
    outcomeStat: '3 roadmap pivots validated · 2023–2024',
    metrics: ['User research', '· Strategy', '· Insights-led'],
    badge: 'UX Research',
    gridMetrics: [
      { icon: 'ti-search', label: 'Discovery' },
      { icon: 'ti-chart-bar', label: '3 pivots validated' },
    ],
    tags: ['UX Research', 'Strategy', 'Discovery'],
    slug: 'research',
    number: '04',
    placeholder: '/images/featured/ux-research-strategy.png',
    accent: 'from-brand/20 to-brand/5',
  },
];

export function getFeaturedProjectTitle(slug: CategorySlug): string | undefined {
  return featuredProjects.find((project) => project.slug === slug)?.title;
}

export const careerTimeline: CareerEntry[] = [
  {
    company: 'AV DEVS Solutions Pvt. Ltd.',
    role: 'Senior Product Designer',
    period: 'Jun 2024 – Present',
    tenure: '1 yr+',
    initials: 'AV',
    keyAchievement:
      'Redesigned enterprise SaaS modules resulting in ~30% faster design-to-dev handoff across aviation and healthcare products.',
    highlights: [
      'Redesigned multi-module enterprise workflows resulting in ~30% improvement in design-to-development handoff efficiency',
      'Defined UX vision and design system in Figma, enabling faster iteration across aviation, healthcare, and HR tech verticals',
      'Facilitated discovery workshops and usability testing that aligned product decisions with measurable user outcomes',
    ],
  },
  {
    company: 'ekZero Enterprise Software Services Pvt. Ltd.',
    role: 'Senior Product Designer',
    period: 'Apr 2023 – May 2024',
    tenure: '1 yr 2 mo',
    initials: 'ek',
    keyAchievement:
      'Led enterprise workflow redesigns with 3–4 iterative cycles per feature, improving usability scores post-launch.',
    highlights: [
      'Redesigned complex enterprise workflows resulting in measurable usability gains across 4 product modules',
      'Drove iterative design cycles based on moderated usability testing and stakeholder feedback',
      'Partnered with engineering for pixel-accurate implementation and design QA in Agile sprints',
    ],
  },
  {
    company: 'Credin – Upkram Technologies Pvt. Ltd.',
    role: 'Product Designer',
    period: 'Jul 2021 – Apr 2023',
    tenure: '1 yr 10 mo',
    initials: 'CR',
    keyAchievement:
      'Redesigned fintech onboarding flows, reducing conversion drop-off and improving cross-platform consistency.',
    highlights: [
      'Redesigned onboarding flows resulting in reduced drop-off and improved conversion on the lending platform',
      'Established a shared component library ensuring visual consistency across web and mobile',
      'Conducted user research and competitive analysis to guide feature prioritization',
    ],
  },
  {
    company: 'Kanan International Pvt. Ltd.',
    role: 'Product Designer',
    period: 'Jan 2020 – May 2021',
    tenure: '1 yr 5 mo',
    initials: 'KI',
    keyAchievement:
      'Redesigned education platform experiences, improving engagement and usability for client-facing products.',
    highlights: [
      'Redesigned digital education products resulting in improved engagement and task completion rates',
      'Delivered end-to-end design solutions from concept to launch with product and engineering teams',
    ],
  },
  {
    company: 'Blackfox Media Pvt. Ltd.',
    role: 'UX/Product Designer',
    period: 'May 2016 – Sep 2019',
    tenure: '3 yrs 5 mo',
    initials: 'BF',
    keyAchievement:
      'Established design workflows and reusable UI patterns across digital media product lines.',
    highlights: [
      'Redesigned UX for digital media products with consistent visual standards across product lines',
      'Built reusable UI patterns and documentation that accelerated delivery across projects',
    ],
  },
  {
    company: 'Trace VFX Solutions India Pvt. Ltd.',
    role: 'Roto Artist',
    period: 'Nov 2015 – Apr 2016',
    tenure: '6 mo',
    initials: 'TV',
    keyAchievement: 'Delivered frame-accurate VFX rotoscoping for post-production projects on tight deadlines.',
    highlights: ['Delivered frame-accurate visual effects rotoscoping for post-production projects'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discover & Research',
    icon: 'ti-search',
    items: ['User interviews & stakeholder alignment workshops', 'Competitive analysis and JTBD synthesis'],
  },
  {
    num: '02',
    title: 'Define & Design',
    icon: 'ti-pencil',
    items: ['Information architecture, flows, and wireframes', 'High-fidelity UI, prototyping, and design systems'],
  },
  {
    num: '03',
    title: 'Validate & Test',
    icon: 'ti-flask',
    items: ['Moderated and unmoderated usability testing', 'Accessibility audits (WCAG 2.1 AA) and heuristic evaluation'],
  },
  {
    num: '04',
    title: 'Build & Ship',
    icon: 'ti-package',
    items: ['Developer handoff with Figma Dev Mode', 'Agile delivery with design QA and implementation review'],
  },
  {
    num: '05',
    title: 'Measure & Iterate',
    icon: 'ti-chart-line',
    items: ['Product analytics and KPI tracking', 'Continuous iteration from user feedback and CSAT data'],
  },
];
