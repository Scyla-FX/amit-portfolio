import { appCategoryContent, type AppProject } from '../../data/appCategory';
import { InnerPageHero } from '../layout/InnerPageHero';
import { PageShell } from '../layout/PageShell';

interface AppProjectPageLayoutProps {
  project: AppProject;
}

export function AppProjectPageLayout({ project }: AppProjectPageLayoutProps) {
  const pageTitle = `${project.name} — ${project.tagline}`;

  return (
    <PageShell
      nav={{
        backTo: '/#work',
        title: project.name,
        closeTo: '/category/app',
      }}
    >
      <div className="section-container section-block">
        <InnerPageHero watermark={appCategoryContent.titleWatermark} title={pageTitle} />

        <div className="surface-definition mx-auto mt-10 max-w-3xl rounded-xl p-8 text-center">
          <p className="section-eyebrow mb-2 uppercase tracking-widest">Application Design</p>
          <p className="mt-4 text-base leading-relaxed text-theme-body md:text-lg">{project.description}</p>
        </div>
      </div>
    </PageShell>
  );
}
