import type { MainCategorySlug } from './categoryPageConfig';

export interface MetadataCard {
  label: string;
  value?: string;
  lines?: [string, string];
}

export interface InsightCard {
  title: string;
  description: string;
}

export interface CapabilityModule {
  title: string;
  items: string[];
}

export interface WorkHighlight {
  slug: string;
  categoryTag: string;
  summary: string;
  focus: string;
}

export interface PremiumPageContent {
  slug: MainCategorySlug;
  dataCategory: 'enterprise' | 'web' | 'mobile';
  routePrefix: '/erp' | '/web' | '/app';
  layout: 'landscape' | 'portrait';
  altCategoryLabel: string;
  pageTitle: string;
  titleWatermark: string;
  heroSubtitle: string;
  capabilitySummary: string;
  metadataCards: MetadataCard[];
  problemsTitle: string;
  problemCards: InsightCard[];
  workTitle: string;
  workIntro: string;
  workHighlights: WorkHighlight[];
  approachTitle: string;
  approachCards: InsightCard[];
  modulesTitle: string;
  capabilityModules: CapabilityModule[];
  outcomesTitle: string;
  outcomePoints: string[];
  philosophy: string;
  cta: { heading: string; body: string; email: string };
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  knowsAbout: string[];
}
