import { erpCategoryContent, type ErpProject } from '../../data/erpCategory';
import { InnerPageHero } from '../layout/InnerPageHero';
import { PageShell } from '../layout/PageShell';

interface ErpProjectPageLayoutProps {
  project: ErpProject;
}

export function ErpProjectPageLayout({ project }: ErpProjectPageLayoutProps) {
  const pageTitle = `${project.name} — ${project.tagline}`;

  return (
    <PageShell
      nav={{
        backTo: '/#work',
        title: project.name,
        closeTo: '/category/erp',
      }}
    >
      <div className="section-container section-block">
        <InnerPageHero watermark={erpCategoryContent.titleWatermark} title={pageTitle} />

        <div className="surface-definition mx-auto mt-10 max-w-3xl rounded-xl p-8 text-center">
          <p className="section-eyebrow mb-2 uppercase tracking-widest">ERP & CRM</p>
          <p className="mt-4 text-base leading-relaxed text-theme-body md:text-lg">{project.description}</p>
        </div>
      </div>
    </PageShell>
  );
}
