export type CategorySlug =
  | 'app'
  | 'research'
  | 'erp'
  | 'web-design'
  | 'ui-ux'
  | 'logo-design'
  | 'design'
  | 'branding'
  | 'typography';

export interface ProjectCard {
  title: string;
  slug: CategorySlug;
  number: string;
  placeholder: string;
  accent: string;
}

export interface CarouselSlide {
  id: string;
  cards: ProjectCard[];
}

export interface SubProject {
  slug: string;
  title: string;
  placeholder: string;
  summary: string;
}

export interface Category {
  slug: CategorySlug;
  title: string;
  titleWatermark?: string;
  eyebrow: string;
  description: string;
  placeholder: string;
  projects?: SubProject[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  placeholder: string;
  sections: CaseStudySection[];
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    cards: [
      {
        title: 'Mobile Application',
        slug: 'app',
        number: '1',
        placeholder: '/images/apps/hero-illustration.png',
        accent: 'from-purple-900/40 via-indigo-500/20 to-brand/10',
      },
      {
        title: 'UX Research',
        slug: 'research',
        number: '2',
        placeholder: 'https://picsum.photos/seed/sticky-notes/800/600',
        accent: 'from-indigo-900/30 to-brand/10',
      },
      {
        title: 'ERP & CRM',
        slug: 'erp',
        number: '3',
        placeholder: '/images/erp/hero-illustration.png',
        accent: 'from-slate-900/40 to-brand/10',
      },
    ],
  },
  {
    id: 'slide-2',
    cards: [
      {
        title: 'Website Design',
        slug: 'web-design',
        number: '4',
        placeholder: '/images/web/hero-illustration.png',
        accent: 'from-blue-900/30 to-brand/10',
      },
      {
        title: 'UI UX Design',
        slug: 'ui-ux',
        number: '5',
        placeholder: 'https://picsum.photos/seed/ui-ux/800/600',
        accent: 'from-violet-900/30 to-brand/10',
      },
      {
        title: 'Logo Design',
        slug: 'logo-design',
        number: '6',
        placeholder: 'https://picsum.photos/seed/logo-design/800/600',
        accent: 'from-fuchsia-900/30 to-brand/10',
      },
    ],
  },
  {
    id: 'slide-3',
    cards: [
      {
        title: 'Design',
        slug: 'design',
        number: '7',
        placeholder: 'https://picsum.photos/seed/design-system/800/600',
        accent: 'from-purple-900/30 to-brand/10',
      },
      {
        title: 'Branding',
        slug: 'branding',
        number: '8',
        placeholder: 'https://picsum.photos/seed/branding/800/600',
        accent: 'from-rose-900/30 to-brand/10',
      },
      {
        title: 'Typography',
        slug: 'typography',
        number: '9',
        placeholder: 'https://picsum.photos/seed/typography/800/600',
        accent: 'from-indigo-900/30 to-brand/10',
      },
    ],
  },
];

import { erpProjects as erpProjectsData } from './erpCategory';

const erpProjects: SubProject[] = erpProjectsData.map((p) => ({
  slug: p.slug,
  title: `${p.name} — ${p.tagline}`,
  placeholder: p.thumbnail,
  summary: p.description,
}));

import { appProjects as appProjectsData } from './appCategory';

const appProjects: SubProject[] = appProjectsData.map((p) => ({
  slug: p.slug,
  title: `${p.name} — ${p.tagline}`,
  placeholder: p.thumbnail,
  summary: p.description,
}));

import { webProjects as webProjectsData } from './webCategory';

const webProjects: SubProject[] = webProjectsData.map((p) => ({
  slug: p.slug,
  title: `${p.name} — ${p.tagline}`,
  placeholder: p.thumbnail,
  summary: p.description,
}));

export const categories: Record<CategorySlug, Category> = {
  design: {
    slug: 'design',
    title: 'Design',
    eyebrow: 'Visual Systems',
    description:
      'Crafting cohesive visual languages that balance aesthetics with usability across digital products.',
    placeholder: 'https://picsum.photos/seed/category-design/1200/700',
  },
  typography: {
    slug: 'typography',
    title: 'Typography',
    eyebrow: 'Type & Hierarchy',
    description:
      'Building readable, expressive type systems that guide users through complex information.',
    placeholder: 'https://picsum.photos/seed/category-typo/1200/700',
  },
  'logo-design': {
    slug: 'logo-design',
    title: 'Logo Design',
    eyebrow: 'Brand Marks',
    description:
      'Memorable marks and identity systems that communicate brand values at a glance.',
    placeholder: 'https://picsum.photos/seed/category-logo/1200/700',
  },
  branding: {
    slug: 'branding',
    title: 'Branding',
    eyebrow: 'Identity & Story',
    description:
      'End-to-end brand experiences from strategy through visual identity and touchpoints.',
    placeholder: 'https://picsum.photos/seed/category-brand/1200/700',
  },
  'ui-ux': {
    slug: 'ui-ux',
    title: 'UI UX Design',
    eyebrow: 'Product Experience',
    description:
      'User-centered interfaces that reduce friction and elevate engagement across platforms.',
    placeholder: 'https://picsum.photos/seed/category-uiux/1200/700',
  },
  'web-design': {
    slug: 'web-design',
    title: 'Website Design',
    eyebrow: 'Web Product Design',
    description:
      'Web product design where business strategy, user psychology, and visual craft converge — designing conversion-optimized, accessible web experiences across every device.',
    placeholder: '/images/web/hero-illustration.png',
    projects: webProjects,
  },
  erp: {
    slug: 'erp',
    title: 'Enterprise SaaS Product Design',
    eyebrow: 'Enterprise Product Design',
    description:
      'Designing for enterprise ERP and CRM platforms — translating complex business operations into clear, efficient product experiences that drive measurable productivity gains.',
    placeholder: '/images/erp/hero-illustration.png',
    projects: erpProjects,
  },
  app: {
    slug: 'app',
    title: 'Mobile Product Design',
    eyebrow: 'Mobile Product Design',
    description:
      'Mobile product design sits at the intersection of user psychology, business strategy, and technical execution — architecting end-to-end product experiences that solve real user problems on smartphones and tablets.',
    placeholder: '/images/apps/hero-illustration.png',
    projects: appProjects,
  },
  research: {
    slug: 'research',
    title: 'UX Research & Strategy',
    titleWatermark: 'ux research',
    eyebrow: 'Insights & Validation',
    description:
      'Research-led design decisions backed by usability testing, interviews, and analytics.',
    placeholder: 'https://picsum.photos/seed/category-research/1200/700',
  },
};

const caseStudySections: CaseStudySection[] = [
  { id: 'problem', title: 'Problem Statement', content: 'Users struggled to complete core tasks due to fragmented navigation and unclear information hierarchy. Drop-off rates exceeded 40% at key conversion points.' },
  { id: 'goals', title: 'Objective & Goals', content: 'Reduce task completion time by 30%, improve NPS by 15 points, and unify the experience across web and mobile touchpoints.' },
  { id: 'process', title: 'Process', content: 'Discovery workshops → competitive audit → wireframes → usability testing → high-fidelity UI → developer handoff with annotated specs.' },
  { id: 'challenges', title: 'Business Challenges', content: 'Legacy constraints, tight launch timeline, and multiple stakeholder priorities required iterative alignment sessions.' },
  { id: 'users', title: 'Product Users', content: 'Primary: power users managing daily workflows. Secondary: executives needing at-a-glance dashboards.' },
  { id: 'research', title: 'Quantitative Research', content: 'Analytics review, funnel analysis, and A/B test results informed prioritization of the redesign roadmap.' },
  { id: 'needs', title: 'User Needs', content: 'Faster access to frequent actions, clearer status feedback, and mobile-friendly layouts for field teams.' },
  { id: 'features', title: 'Features & Functionalities', content: 'Smart dashboard, customizable widgets, notification center, and streamlined onboarding.' },
  { id: 'persona', title: 'User Persona', content: 'Alex, 34 — operations manager who values efficiency and needs confidence in data accuracy.' },
  { id: 'screens', title: 'Screens', content: 'Key flows include dashboard home, detail views, settings, and mobile-responsive variants.' },
];

export const caseStudies: Record<string, CaseStudy> = {
  credilio: {
    id: 'credilio',
    title: 'Credilio Case Study',
    subtitle: 'Fintech product redesign',
    placeholder: 'https://picsum.photos/seed/casestudy1/1400/800',
    sections: caseStudySections,
  },
  fintech: {
    id: 'fintech',
    title: 'Fintech Platform',
    subtitle: 'End-to-end product design',
    placeholder: 'https://picsum.photos/seed/casestudy2/1400/800',
    sections: caseStudySections.map((s) => ({ ...s, content: s.content + ' (Variant B placeholder content.)' })),
  },
};

export { processSteps } from './homePage';

export function getCategory(slug: string): Category | undefined {
  return categories[slug as CategorySlug];
}

export function getSubProject(categorySlug: CategorySlug, projectSlug: string): SubProject | undefined {
  return categories[categorySlug]?.projects?.find((p) => p.slug === projectSlug);
}

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies[id];
}
