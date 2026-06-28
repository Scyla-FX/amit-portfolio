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
    name: 'Acuity Scheduling Platform',
    tagline: 'Booking & Scheduling',
    description:
      'Designed Acuity, a flexible scheduling software platform to help businesses manage appointments seamlessly. Features include automated booking flows, calendar integrations, and client management interfaces focused on usability.',
    thumbnail: '/images/web/acuity-thumbnail.jpg',
    screenImage: '/images/web/acuity-preview.jpg',
  },
  {
    slug: 'web-02',
    name: 'Nicktio Online Payment Platform',
    tagline: 'Financial Technology',
    description:
      'Designed Nicktio, a quickest and easiest online payment platform for businesses. Includes a conversion-optimized hero section, seamless account creation flows, and clear value communication for personal and business needs.',
    thumbnail: '/images/web/fintech-saas-thumbnail.jpg',
    screenImage: '/images/web/fintech-saas-preview.jpg',
  },
  {
    slug: 'web-03',
    name: 'Mangan Food Discovery Platform',
    tagline: 'Food & Hospitality',
    description:
      'Designed Mangan, a visually rich culinary platform exploring authentic Indonesian cuisine. Includes engaging recipe showcases, interactive menu browsing interfaces, and conversion-focused food ordering flows.',
    thumbnail: '/images/web/mangan-thumbnail.jpg',
    screenImage: '/images/web/mangan-preview.jpg',
  },
  {
    slug: 'web-04',
    name: 'TechVantage Workflow Platform',
    tagline: 'B2B SaaS',
    description:
      'Designed TechVantage Solutions, a cutting-edge SaaS platform aimed at streamlining business workflows. Features include productivity dashboards, team collaboration tools, and scalable architecture communication.',
    thumbnail: '/images/web/techvantage-thumbnail.jpg',
    screenImage: '/images/web/techvantage-preview.jpg',
  },
  {
    slug: 'web-05',
    name: 'Xinder Art Portfolio Platform',
    tagline: 'Creative Portfolio',
    description:
      'Designed Xinder, a platform to search and discover the work of the best artists. Features immersive dark-mode layouts, category-based browsing, and striking visual hierarchy to let the art speak for itself.',
    thumbnail: '/images/web/xinder-thumbnail.jpg',
    screenImage: '/images/web/xinder-preview.jpg',
  },
  {
    slug: 'web-06',
    name: 'Mabi SaaS Marketing Website',
    tagline: 'B2B Marketing',
    description:
      'Designed a B2B SaaS marketing website to help businesses launch their apps and grow. Includes feature communication, top partner integrations, and demo request conversion flows aligned to enterprise buyer journeys.',
    thumbnail: '/images/web/mabi-thumbnail.jpg',
    screenImage: '/images/web/mabi-preview.jpg',
  },
  {
    slug: 'web-07',
    name: 'MedicalRecov Healthcare Platform',
    tagline: 'Patient Experience',
    description:
      'Designed a professional healthcare web platform focused on discovering care options, booking online appointments, and emergency care workflows. Built with trust-building design elements for patient confidence.',
    thumbnail: '/images/web/medicalrecov-thumbnail.jpg',
    screenImage: '/images/web/medicalrecov-preview.jpg',
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
    name: 'Collers Collectible Sneakers',
    tagline: 'Retail E-Commerce',
    description:
      'Designed a vibrant e-commerce web product for a collectible sneakers brand. Features dynamic product discovery, interactive shoe showcases, and optimized checkout flows focused on reducing purchase friction.',
    thumbnail: '/images/web/collers-thumbnail.jpg',
    screenImage: '/images/web/collers-preview.jpg',
  },
];

export function getWebProject(slug: string): WebProject | undefined {
  return webProjects.find((p) => p.slug === slug);
}
