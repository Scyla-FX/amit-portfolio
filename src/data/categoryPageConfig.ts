import { appCategoryContent, appProjects } from './appCategory';
import { erpCategoryContent, erpProjects } from './erpCategory';
import { webCategoryContent, webProjects } from './webCategory';
import { getFeaturedProjectTitle } from './homePage';
import { homePage } from './homePage';

export type MainCategorySlug = 'erp' | 'app' | 'web-design';

export interface CategoryStat {
  value: string;
  label: string;
}

export interface CategoryProject {
  slug: string;
  name: string;
  tagline: string;
  thumbnail: string;
  outcomePill: string;
}

export interface MethodologyItem {
  title: string;
  text: string;
}

export interface MethodologySection {
  heading?: string;
  items: MethodologyItem[];
}

export interface CategoryPageConfig {
  slug: MainCategorySlug;
  pageTitle: string;
  titleWatermark: string;
  descriptor: string;
  categoryTags: string[];
  routePrefix: '/erp' | '/app' | '/web';
  layout: 'landscape' | 'portrait';
  stats: [CategoryStat, CategoryStat, CategoryStat];
  intro: string;
  roleBadge: string;
  skillTags: string[];
  methodologyTrigger: string;
  methodologySections: MethodologySection[];
  processNarrative: string[];
  contactStrip: { text: string; email: string };
  closingQuote: string;
  seo: {
    title: string;
    description: string;
    keywords?: string;
    canonical: string;
  };
  projects: CategoryProject[];
}

export const CATEGORY_ORDER: MainCategorySlug[] = ['erp', 'web-design', 'app'];

const CATEGORY_TITLES: Record<MainCategorySlug, string> = {
  erp: 'Enterprise SaaS Product Design',
  'web-design': 'Website Design',
  app: 'Mobile Product Design',
};

export function getCategoryPageTitle(slug: MainCategorySlug): string {
  return getFeaturedProjectTitle(slug) ?? CATEGORY_TITLES[slug];
}

export function getAdjacentCategories(slug: MainCategorySlug) {
  const index = CATEGORY_ORDER.indexOf(slug);
  const prev = CATEGORY_ORDER[(index - 1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length];
  const next = CATEGORY_ORDER[(index + 1) % CATEGORY_ORDER.length];
  return {
    prev: { slug: prev, title: getCategoryPageTitle(prev) },
    next: { slug: next, title: getCategoryPageTitle(next) },
  };
}

const erpConfig: CategoryPageConfig = {
  slug: 'erp',
  pageTitle: getCategoryPageTitle('erp'),
  titleWatermark: erpCategoryContent.titleWatermark,
  descriptor: 'Product design for enterprise ERP & CRM platforms across diverse industries, including aviation, healthcare, and HR tech.',
  categoryTags: ['Product Design', 'Figma', 'B2B SaaS'],
  routePrefix: '/erp',
  layout: 'landscape',
  stats: [
    { value: '8+', label: 'Enterprise Modules Designed' },
    { value: '3', label: 'Industries (Aviation · Healthcare · HR)' },
    { value: 'Figma · Design Systems · Role-Based UX', label: 'Core Toolkit' },
  ],
  intro:
    'Designing for enterprise ERP and CRM platforms demands deep understanding of complex user workflows, role-based access, and data-dense dashboards. I approach every module with a single question: does this reduce friction for the person doing the actual job? My work spans financial management, supply chain, HR self-service, CRM pipelines, and analytics reporting.',
  roleBadge: 'Senior Product Designer · End-to-End Ownership',
  skillTags: [
    'Figma',
    'Design Systems',
    'Role-Based UX',
    'Dashboard Design',
    'Data Visualization',
    'Workflow Mapping',
    'Stakeholder Research',
    'Progressive Disclosure',
    'B2B SaaS',
    'WCAG 2.1 AA',
  ],
  methodologyTrigger: 'My Enterprise SaaS design practice covers',
  methodologySections: [
    {
      heading: 'Enterprise Resource Planning (ERP)',
      items: erpCategoryContent.erpPractice,
    },
    {
      heading: 'Customer Relationship Management (CRM)',
      items: erpCategoryContent.crmPractice,
    },
  ],
  processNarrative: erpCategoryContent.bodyParagraphs,
  contactStrip: {
    text: 'Interested in enterprise product design for your team?',
    email: homePage.contact.email,
  },
  closingQuote: erpCategoryContent.closingQuote,
  seo: {
    title: 'Enterprise SaaS Product Design — Amit Tadvi | Senior Product Designer',
    description:
      'Enterprise ERP and CRM product design by Amit Tadvi — a Senior Product Designer specializing in role-based UX, dashboard design, and multi-module B2B SaaS platforms for aviation, healthcare, and HR tech.',
    keywords:
      'enterprise UX designer, ERP product design, CRM UX, B2B SaaS designer, dashboard design, Figma, design systems, Vadodara',
    canonical: 'https://amittadvi.com/category/erp',
  },
  projects: erpProjects.map((project, index) => ({
    slug: project.slug,
    name: project.name,
    tagline: project.tagline,
    thumbnail: project.thumbnail,
    outcomePill: index % 2 === 0 ? 'B2B SaaS' : 'Enterprise',
  })),
};

const webConfig: CategoryPageConfig = {
  slug: 'web-design',
  pageTitle: getCategoryPageTitle('web-design'),
  titleWatermark: webCategoryContent.titleWatermark,
  descriptor: 'Conversion-focused web product design across fintech, edtech, healthcare, and e-commerce.',
  categoryTags: ['Web Design', 'Figma', 'Conversion-Focused'],
  routePrefix: '/web',
  layout: 'landscape',
  stats: [
    { value: '9', label: 'Web Platforms Designed' },
    { value: '6+', label: 'Industries Covered' },
    { value: 'Responsive · SEO-Aligned · Conversion-Focused', label: 'Delivery Focus' },
  ],
  intro:
    'Web product design is where business strategy and user psychology meet visual execution. I design experiences that communicate value clearly, convert visitors, and perform across every device and screen size. Every project is delivered with responsive Figma specs, design tokens, and developer-ready component documentation.',
  roleBadge: 'Senior Product Designer · End-to-End Ownership',
  skillTags: [
    'Figma',
    'Responsive Design',
    'Information Architecture',
    'Conversion Optimization',
    'SEO Alignment',
    'Component Libraries',
    'Design Tokens',
    'Core Web Vitals',
    'Landing Pages',
    'Web Apps',
  ],
  methodologyTrigger: 'My Website Design practice covers',
  methodologySections: [
    {
      items: webCategoryContent.definitionPillars,
    },
  ],
  processNarrative: webCategoryContent.bodyParagraphs,
  contactStrip: {
    text: 'Need a product designer who ships web experiences that convert?',
    email: homePage.contact.email,
  },
  closingQuote: webCategoryContent.closingQuote,
  seo: {
    title: 'Website Design Portfolio — Amit Tadvi | Senior Product Designer',
    description:
      'Web product design portfolio by Amit Tadvi — conversion-optimized, responsive, and SEO-aligned web experiences across fintech, edtech, healthcare, and e-commerce.',
    canonical: 'https://amittadvi.com/category/web-design',
  },
  projects: webProjects.map((project) => ({
    slug: project.slug,
    name: project.name,
    tagline: project.tagline,
    thumbnail: project.thumbnail,
    outcomePill: project.tagline.split(' ')[0] ?? project.tagline,
  })),
};

const appConfig: CategoryPageConfig = {
  slug: 'app',
  pageTitle: getCategoryPageTitle('app'),
  titleWatermark: appCategoryContent.titleWatermark,
  descriptor: 'iOS and Android product design grounded in research, platform conventions, and accessibility.',
  categoryTags: ['Product Design', 'Mobile', 'iOS + Android'],
  routePrefix: '/app',
  layout: 'portrait',
  stats: [
    { value: '8', label: 'Mobile Apps Designed' },
    { value: 'iOS + Android', label: 'Platform Coverage' },
    { value: 'Material You · Apple HIG · WCAG 2.1 AA', label: 'Standards' },
  ],
  intro:
    'Mobile product design sits at the intersection of user psychology, platform conventions, and technical constraints. My approach starts with discovery — understanding real user problems — and ends with validated, high-fidelity interfaces built for iOS and Android. Every app I design is grounded in usability testing and iterated based on real behavioral data.',
  roleBadge: 'Senior Product Designer · End-to-End Ownership',
  skillTags: [
    'Figma',
    'iOS (HIG)',
    'Android (Material You)',
    'Interaction Design',
    'Micro-animations',
    'Gesture Navigation',
    'Offline UX',
    'App Store Optimization',
    'WCAG 2.1 AA',
    'Usability Testing',
  ],
  methodologyTrigger: 'My Mobile Product design practice covers',
  methodologySections: [
    {
      items: appCategoryContent.definitionPillars,
    },
  ],
  processNarrative: appCategoryContent.bodyParagraphs,
  contactStrip: {
    text: 'Building a mobile product and need a design partner?',
    email: homePage.contact.email,
  },
  closingQuote: appCategoryContent.closing,
  seo: {
    title: 'Mobile App Design Portfolio — Amit Tadvi | Senior Product Designer',
    description:
      'Mobile product design portfolio by Amit Tadvi — iOS and Android app design grounded in user research, Material You, Apple HIG, and WCAG 2.1 AA accessibility standards.',
    canonical: 'https://amittadvi.com/category/app',
  },
  projects: appProjects.map((project) => ({
    slug: project.slug,
    name: project.name,
    tagline: project.tagline,
    thumbnail: project.thumbnail,
    outcomePill: project.tagline.toLowerCase().includes('fintech') ? 'iOS' : 'Cross-platform',
  })),
};

const CONFIGS: Record<MainCategorySlug, CategoryPageConfig> = {
  erp: erpConfig,
  'web-design': webConfig,
  app: appConfig,
};

export function getCategoryPageConfig(slug: MainCategorySlug): CategoryPageConfig {
  return CONFIGS[slug];
}

export function isMainCategorySlug(slug: string): slug is MainCategorySlug {
  return slug === 'erp' || slug === 'app' || slug === 'web-design';
}
