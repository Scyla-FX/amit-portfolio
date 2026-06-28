import { Navigate, useParams } from 'react-router-dom';
import { getCaseStudy } from '../data/portfolio';
import { InnerPageHero, getPageWatermark } from '../components/layout/InnerPageHero';
import { PageShell } from '../components/layout/PageShell';

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = id ? getCaseStudy(id) : undefined;

  if (!study) return <Navigate to="/#case-study" replace />;

  const watermark = getPageWatermark(study.title, study.subtitle.toLowerCase());

  return (
    <PageShell
      nav={{
        backTo: '/#work',
        title: study.title,
        closeTo: '/#case-study',
      }}
    >
      <div className="section-container section-block">
        <InnerPageHero watermark={watermark} title={study.title} />

        <div className="space-y-16">
          {study.sections.map((section) => (
            <section key={section.id} id={section.id} className="surface-card rounded-xl p-6 md:p-8">
              <h2 className="heading-soft mb-4 font-black text-2xl md:text-3xl">{section.title}</h2>
              <p className="text-lg leading-relaxed text-theme-body">{section.content}</p>
              <img
                src={`https://picsum.photos/seed/${study.id}-${section.id}/900/500`}
                alt=""
                className="mt-6 w-full rounded-xl object-cover opacity-90"
              />
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
