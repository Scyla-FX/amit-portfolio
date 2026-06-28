import { Navigate, useParams } from 'react-router-dom';
import { PremiumCategoryPage } from '../components/category/PremiumCategoryPage';
import { CategoryPageLayout } from '../components/category/CategoryPageLayout';
import { getCategory } from '../data/portfolio';
import { getPremiumCategoryContent } from '../data/premiumCategoryContent';
import { isMainCategorySlug } from '../data/categoryPageConfig';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;

  if (!category) return <Navigate to="/" replace />;

  if (slug && isMainCategorySlug(slug)) {
    return <PremiumCategoryPage content={getPremiumCategoryContent(slug)} />;
  }

  return <CategoryPageLayout category={category} />;
}
