import { Link } from 'react-router-dom';
import type { SubProject } from '../../data/portfolio';
import { InnerPageHero, getPageWatermark } from '../layout/InnerPageHero';
import { PageShell } from '../layout/PageShell';

interface SubProjectPageProps {
  project: SubProject;
  closeTo: string;
  categoryLabel: string;
}

export function SubProjectPageLayout({ project, closeTo, categoryLabel }: SubProjectPageProps) {
  const watermark = getPageWatermark(project.title, categoryLabel.toLowerCase());

  return (
    <PageShell
      nav={{
        backTo: '/#work',
        title: project.title,
        closeTo,
      }}
    >
      <div className="section-container section-block">
        <InnerPageHero watermark={watermark} title={project.title} />
        <p className="mb-10 text-center text-lg text-theme-body">{project.summary}</p>

        <div className="surface-definition rounded-2xl p-8">
          <h2 className="mb-4 text-2xl font-bold text-theme-primary">Project Overview</h2>
          <p className="leading-relaxed text-theme-body">
            This is a placeholder case study page. Final content, research findings, wireframes, and
            high-fidelity screens will be added when assets are provided. The navigation matches the Figma
            prototype flow — close returns to the parent category page.
          </p>
        </div>

        <div className="mt-8">
          <Link to={closeTo} className="btn-brand">
            ← Back to {categoryLabel}
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
