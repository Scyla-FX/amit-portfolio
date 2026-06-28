import { homePage } from './homePage';
import type { PremiumPageContent } from './premiumPageTypes';

export const websitePageContent: PremiumPageContent = {
  slug: 'web-design',
  dataCategory: 'web',
  routePrefix: '/web',
  layout: 'landscape',
  altCategoryLabel: 'Website Design',
  pageTitle: 'Website Design',
  titleWatermark: 'website design',
  heroSubtitle:
    'Designing marketing sites, SaaS web products, and conversion-focused digital experiences across fintech, edtech, healthcare, e-commerce, and B2B growth platforms.',
  capabilitySummary:
    'I design web products where business strategy, user psychology, and visual craft converge. My work spans marketing websites, SaaS landing pages, multi-page product platforms, and responsive web applications — combining information architecture, UI design, and conversion-focused UX. From wireframes and user flows to design systems and developer-ready Figma specs, I help teams launch web experiences that communicate value clearly, perform across devices, and support measurable business outcomes.',
  metadataCards: [
    { label: 'Role', value: 'Senior Product Designer' },
    {
      label: 'Focus Areas',
      value: 'Marketing Sites, SaaS Web Apps, Landing Pages, E-Commerce, Product Websites',
    },
    {
      label: 'Core Skills',
      value: 'Information Architecture, Responsive Design, Conversion UX, Design Systems, SEO Alignment',
    },
    {
      label: 'Industries',
      lines: ['Travel, fintech, edtech, healthcare, e-commerce,', 'media, SaaS, creative platforms.'],
    },
    {
      label: 'Work Type',
      value: '0→1 launches, redesigns, conversion optimization, responsive web UX',
    },
    {
      label: 'Stakeholders / Deliverables',
      value: 'Founders, marketing teams, product teams — wireframes, UI kits, prototypes',
    },
  ],
  problemsTitle: 'Problems I help solve through web product design',
  problemCards: [
    {
      title: 'Weak conversion paths',
      description:
        'Structuring pages, CTAs, and user flows so visitors understand value quickly and take action with less friction.',
    },
    {
      title: 'Unclear information hierarchy',
      description:
        'Organizing content, navigation, and visual priority so users find what they need without cognitive overload.',
    },
    {
      title: 'Inconsistent responsive experience',
      description:
        'Designing adaptive layouts and component systems that stay usable and polished across desktop, tablet, and mobile.',
    },
    {
      title: 'Brand–product misalignment',
      description:
        'Building cohesive visual systems — typography, components, and page patterns — that scale across marketing and product surfaces.',
    },
  ],
  workTitle: 'Selected Web & Digital Work',
  workIntro:
    'A selection of marketing sites, SaaS product pages, e-commerce experiences, and content platforms designed for clarity, conversion, and cross-device performance.',
  workHighlights: [
    {
      slug: 'web-02',
      categoryTag: 'FinTech SaaS',
      summary:
        'Designed a high-converting B2B SaaS marketing site with feature storytelling and lead-generation flows.',
      focus: 'Conversion UX, value communication, hero-to-demo journey',
    },
    {
      slug: 'web-06',
      categoryTag: 'B2B Marketing',
      summary:
        'Built pricing, case study, and demo request flows aligned to enterprise buyer decision journeys.',
      focus: 'Information architecture, trust signals, CTA hierarchy',
    },
    {
      slug: 'web-09',
      categoryTag: 'E-Commerce',
      summary:
        'Designed product discovery, category browsing, and checkout flows for a cycling retail brand.',
      focus: 'Purchase funnel UX, PDP layout, conversion optimization',
    },
    {
      slug: 'web-04',
      categoryTag: 'EdTech',
      summary:
        'Shaped course discovery, instructor profiles, and learner onboarding for an education platform.',
      focus: 'Onboarding flows, content hierarchy, enrollment conversion',
    },
    {
      slug: 'web-07',
      categoryTag: 'Healthcare',
      summary:
        'Designed doctor discovery, appointment booking, and trust-building flows for a patient-facing platform.',
      focus: 'Accessibility, clarity, service information architecture',
    },
    {
      slug: 'web-01',
      categoryTag: 'Travel',
      summary:
        'Created destination browsing and trip planning interfaces with visual storytelling and booking flows.',
      focus: 'Content hierarchy, immersive layout, conversion paths',
    },
  ],
  approachTitle: 'How I design web products',
  approachCards: [
    {
      title: 'Strategy-led discovery',
      description:
        'Aligning audience goals, business outcomes, and content strategy before moving into layout and UI design.',
    },
    {
      title: 'Conversion-aware UX',
      description:
        'Mapping page flows, CTAs, and content structure to reduce friction and improve task completion rates.',
    },
    {
      title: 'Responsive system design',
      description:
        'Building component libraries and layout patterns that adapt cleanly across breakpoints and devices.',
    },
    {
      title: 'Performance & SEO alignment',
      description:
        'Designing with semantic structure, accessible content, and performance-aware patterns for discoverability and speed.',
    },
  ],
  modulesTitle: 'Web product types & platform depth',
  capabilityModules: [
    {
      title: 'Marketing & Growth Websites',
      items: [
        'SaaS and startup marketing sites',
        'Landing pages and campaign pages',
        'Pricing and feature communication',
        'Case studies and social proof sections',
        'Lead capture and demo request flows',
        'Brand-forward visual storytelling',
      ],
    },
    {
      title: 'Web Apps & Product Experiences',
      items: [
        'Multi-page product websites',
        'E-commerce and retail platforms',
        'Content and media platforms',
        'Healthcare and service booking flows',
        'EdTech and course discovery products',
        'Responsive dashboard-style web interfaces',
      ],
    },
  ],
  outcomesTitle: 'What good web design improves',
  outcomePoints: [
    'Clearer value communication',
    'Higher conversion and engagement',
    'Stronger cross-device usability',
    'More consistent brand experience',
    'Better SEO and content discoverability',
    'Faster design-to-development handoff',
  ],
  philosophy:
    'Web product design is about connecting business goals with user needs — creating digital experiences that are clear, credible, and built to perform.',
  cta: {
    heading: 'Need a designer for marketing sites, SaaS pages, or web products?',
    body: 'I help teams launch responsive, conversion-focused web experiences with strong UX structure and polished UI systems.',
    email: homePage.contact.email,
  },
  seo: {
    title: 'Website Design Portfolio — Amit Tadvi | Senior Product Designer',
    description:
      'Website and web product design by Amit Tadvi — conversion-focused, responsive, SEO-aligned experiences across fintech, edtech, healthcare, and e-commerce.',
    keywords:
      'website design, web product design, responsive design, conversion UX, information architecture, SaaS marketing site, senior product designer',
    canonical: 'https://amittadvi.com/category/web-design',
  },
  knowsAbout: [
    'Website Design',
    'Web Product Design',
    'Responsive Design',
    'Information Architecture',
    'Conversion Optimization',
    'SEO Alignment',
    'Design Systems',
    'UI Design',
    'UX Design',
  ],
};
