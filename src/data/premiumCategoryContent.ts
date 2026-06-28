import type { MainCategorySlug } from './categoryPageConfig';
import { enterprisePageContent } from './enterprisePageContent';
import { mobilePageContent } from './mobilePageContent';
import type { PremiumPageContent } from './premiumPageTypes';
import { websitePageContent } from './websitePageContent';

const CONFIGS: Record<MainCategorySlug, PremiumPageContent> = {
  erp: enterprisePageContent,
  'web-design': websitePageContent,
  app: mobilePageContent,
};

export function getPremiumCategoryContent(slug: MainCategorySlug): PremiumPageContent {
  return CONFIGS[slug];
}
