import { Link } from 'react-router-dom';
import type { Category, SubProject } from '../../data/portfolio';
import { getFeaturedProjectTitle } from '../../data/homePage';
import { InnerPageHero, getPageWatermark } from '../layout/InnerPageHero';
import { PageShell } from '../layout/PageShell';

interface CategoryPageLayoutProps {
  category: Category;
  backTo?: string;
}

export function CategoryPageLayout({ category, backTo = '/#work' }: CategoryPageLayoutProps) {
  const pageTitle = getFeaturedProjectTitle(category.slug) ?? category.title;
  const watermark = getPageWatermark(pageTitle, category.titleWatermark);

  return (
    <PageShell nav={{ backTo, title: pageTitle }}>
      <div className="section-container section-block">
        <InnerPageHero watermark={watermark} title={pageTitle} />

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="section-eyebrow mb-2 uppercase tracking-widest">{category.eyebrow}</p>
          <p className="text-lg leading-relaxed text-theme-body">{category.description}</p>
        </div>

        {category.projects && category.projects.length > 0 && (
          <div className="mt-20">
            <h2 className="heading-soft mb-10 font-black text-3xl">Work Examples</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <ProjectCard key={project.slug} category={category} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}

function ProjectCard({ category, project }: { category: Category; project: SubProject }) {
  const base = category.slug === 'erp' ? '/erp' : category.slug === 'app' ? '/app' : '/web';

  return (
    <Link to={`${base}/${project.slug}`} className="work-grid-card group block">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.placeholder}
          alt=""
          className="work-grid-card__thumb h-full w-full object-cover"
        />
        <div className="work-grid-card__shine">
          <span>View project →</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-theme-primary">{project.title}</h3>
        <p className="text-sm text-theme-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
