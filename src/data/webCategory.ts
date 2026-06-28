export interface WebProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  screenImage: string;
}

export const webCategoryContent = {
  title: 'Website Design',
  titleWatermark: 'website design',
  pageTitle: 'Web Product Design & Digital Experience',
  intro:
    'Web product design is where business strategy, user psychology, and visual craft converge. As a Senior Product Designer, I approach every web product with a single question: does this experience help users accomplish their goals while driving the outcomes the business needs? From marketing websites and SaaS landing pages to complex web applications and multi-page product platforms, I design web experiences that are visually compelling, conversion-optimized, accessibility-compliant, and built to perform across every device and screen size.',
  definitionLead:
    'Web Product Design is the end-to-end discipline of planning, designing, and validating the visual and interactive experience of websites and web-based products — spanning information architecture, UI design, UX strategy, responsive design, performance optimization, and SEO-aligned content structure. It bridges graphic design, user experience, and product thinking to deliver cohesive, goal-driven digital presences.',
  definitionPillars: [
    {
      title: 'Layout & Visual Hierarchy',
      text: 'Designing purposeful page layouts that guide user attention, establish clear content priority, and drive users toward key conversion actions — using grid systems, whitespace, and typographic hierarchy as core tools.',
    },
    {
      title: 'Visual Identity & UI Design',
      text: 'Crafting cohesive visual design systems including color palettes, typography scales, iconography, imagery direction, and UI components — all aligned to brand identity and designed for consistency across every page and state.',
    },
    {
      title: 'User Interface (UI) Design',
      text: 'Building pixel-perfect, component-driven web interfaces that are visually engaging, interaction-ready, and developed with design tokens and reusable Figma component libraries for scalable design-to-development handoff.',
    },
    {
      title: 'User Experience (UX) Strategy',
      text: 'Mapping end-to-end user journeys across the web product — identifying friction points, optimizing navigation architecture, and designing flows that reduce cognitive load and increase task completion rates.',
    },
    {
      title: 'Responsive & Adaptive Design',
      text: 'Designing fully responsive web experiences that adapt seamlessly across desktop, tablet, and mobile breakpoints — ensuring consistent usability and visual quality regardless of device or screen resolution.',
    },
    {
      title: 'Information Architecture & Content Strategy',
      text: 'Structuring website content, navigation systems, and page hierarchies to match user mental models — making it easy for visitors to find information, understand value propositions, and take action.',
    },
    {
      title: 'Interactivity & Micro-interactions',
      text: 'Designing meaningful hover states, transitions, scroll behaviors, animated elements, and interactive components that elevate product feel, provide feedback, and guide user engagement.',
    },
    {
      title: 'Performance-Aware Design',
      text: 'Designing with page speed and Core Web Vitals in mind — optimizing image strategies, lazy loading patterns, skeleton screens, and asset efficiency to deliver fast, smooth web experiences.',
    },
    {
      title: 'Search Engine Optimization (SEO) Alignment',
      text: 'Structuring web product content with semantic hierarchy, keyword-aligned headings, accessible alt text, and metadata best practices — ensuring the product is discoverable and ranks effectively in search engines.',
    },
    {
      title: 'Accessibility (WCAG 2.1 AA)',
      text: 'Designing inclusive web experiences that meet accessibility standards — including color contrast ratios, keyboard navigation, screen reader compatibility, focus states, and ARIA label implementation.',
    },
  ],
  bodyParagraphs: [
    'Web product design is a strategic business function, not just a visual exercise. A well-designed web product builds trust within seconds, communicates value clearly, converts visitors into users or customers, and retains them through consistent, delightful experiences.',
    'My web product design process begins with discovery — understanding the target audience, their goals, and their barriers, alongside the business objectives the web product needs to achieve. From there I define the information architecture and content strategy, design wireframes and user flows, and move through iterative high-fidelity design cycles validated by user testing and stakeholder feedback.',
    'Every web product I design is delivered with comprehensive Figma specs, responsive component documentation, design tokens, and developer-ready assets — ensuring seamless handoff and accurate implementation across engineering teams.',
  ],
  workExamplesHeading: 'Website Design',
  workExamplesScript: 'here is the work examples of webpage / website',
  heroIllustration: '/images/web/hero-illustration.png',
  closingQuote:
    'Every web product in this portfolio began with a business problem and a user need — not a visual style. My role as a Product Designer is to bridge those two realities: designing web experiences that are strategically purposeful, visually excellent, and technically executable. From information architecture to final pixel, each project here reflects a commitment to product thinking, design craft, and measurable digital outcomes.',
};

export const webProjects: WebProject[] = [
  {
    slug: 'web-01',
    name: 'Travel & Tourism Web Platform',
    tagline: 'Destination Discovery',
    description:
      'Designed an immersive travel discovery web product featuring destination browsing, itinerary planning interfaces, and trip booking flows — with a focus on visual storytelling, content hierarchy, and conversion-optimized call-to-action placement.',
    thumbnail: '/images/web/travel-tourism.png',
    screenImage: '/images/web/travel-tourism.png',
  },
  {
    slug: 'web-02',
    name: 'FinTech SaaS Marketing & Product Website',
    tagline: 'Financial Technology',
    description:
      'Designed a high-converting SaaS product website for a financial technology platform — including hero section design, feature communication layouts, social proof sections, and lead generation flows optimized for B2B buyer conversion.',
    thumbnail: '/images/web/fintech-saas.png',
    screenImage: '/images/web/fintech-saas.png',
  },
  {
    slug: 'web-03',
    name: 'Restaurant & Food Discovery Platform',
    tagline: 'Food & Hospitality',
    description:
      'Designed a visually rich food and restaurant discovery web product — including menu browsing interfaces, location-based search, and online ordering flows — balancing appetizing visual design with efficient task completion.',
    thumbnail: '/images/web/restaurant-food.png',
    screenImage: '/images/web/restaurant-food.png',
  },
  {
    slug: 'web-04',
    name: 'EdTech Learning & Courses Platform',
    tagline: 'Education Technology',
    description:
      'Designed an educational technology web product featuring course discovery, instructor profiles, curriculum layouts, and learner onboarding flows — prioritizing clarity, trust signals, and conversion from visitor to enrolled student.',
    thumbnail: '/images/web/edtech-learning.png',
    screenImage: '/images/web/edtech-learning.png',
  },
  {
    slug: 'web-05',
    name: 'Entertainment & Media Web Platform',
    tagline: 'Streaming & Content',
    description:
      'Designed a dark-mode entertainment content platform featuring editorial layouts, media content browsing, and immersive visual storytelling — optimized for engagement, content discovery, and time-on-site metrics.',
    thumbnail: '/images/web/entertainment-media.png',
    screenImage: '/images/web/entertainment-media.png',
  },
  {
    slug: 'web-06',
    name: 'SaaS / Tech Company Marketing Website',
    tagline: 'B2B Marketing',
    description:
      'Designed a B2B SaaS company marketing website including product feature communication, pricing page design, customer case study layouts, and demo request conversion flows — aligned to enterprise buyer decision journeys.',
    thumbnail: '/images/web/saas-marketing.png',
    screenImage: '/images/web/saas-marketing.png',
  },
  {
    slug: 'web-07',
    name: 'Healthcare & Medical Services Platform',
    tagline: 'Patient Experience',
    description:
      'Designed a professional healthcare web product featuring doctor discovery, appointment booking flows, service information architecture, and trust-building design elements — prioritizing accessibility, clarity, and patient confidence.',
    thumbnail: '/images/web/healthcare-medical.png',
    screenImage: '/images/web/healthcare-medical.png',
  },
  {
    slug: 'web-08',
    name: 'Photography & Creative Portfolio Platform',
    tagline: 'Creative Showcase',
    description:
      'Designed a visually striking portfolio and creative showcase web product — featuring full-bleed imagery layouts, project case study structures, and minimal navigation systems that let the creative work take center stage.',
    thumbnail: '/images/web/photography-portfolio.png',
    screenImage: '/images/web/photography-portfolio.png',
  },
  {
    slug: 'web-09',
    name: 'E-Commerce & Cycling Retail Platform',
    tagline: 'Retail E-Commerce',
    description:
      'Designed an e-commerce web product for a cycling and outdoor retail brand — including product discovery, category browsing, product detail page design, and checkout flow optimization — focused on reducing purchase friction and increasing conversion rate.',
    thumbnail: '/images/web/ecommerce-cycling.png',
    screenImage: '/images/web/ecommerce-cycling.png',
  },
];

export function getWebProject(slug: string): WebProject | undefined {
  return webProjects.find((p) => p.slug === slug);
}
