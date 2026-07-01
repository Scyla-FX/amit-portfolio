import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { appProjects } from '../../data/appCategory';
import { erpProjects } from '../../data/erpCategory';
import { getAdjacentCategories } from '../../data/categoryPageConfig';
import type { PremiumPageContent } from '../../data/premiumPageTypes';
import { homePage } from '../../data/homePage';
import { webProjects } from '../../data/webCategory';
import { useGalleryStagger } from '../../hooks/useGalleryStagger';
import { useInViewReveal } from '../../hooks/useInViewReveal';
import { usePageAnchorSpy } from '../../hooks/usePageAnchorSpy';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { PageShell } from '../layout/PageShell';

const ANCHORS = [
  { id: 'overview', label: 'Overview' },
  { id: 'work', label: 'Work' },
  { id: 'approach', label: 'Approach' },
] as const;

const PROJECT_SOURCES = {
  erp: erpProjects,
  'web-design': webProjects,
  app: appProjects,
} as const;

interface PremiumCategoryPageProps {
  content: PremiumPageContent;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function usePremiumMeta(content: PremiumPageContent) {
  useEffect(() => {
    const { seo } = content;
    document.title = seo.title;

    const setMeta = (name: string, metaContent: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', metaContent);
    };

    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMeta('og:type', 'website', true);
    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:site_name', 'Amit Tadvi — Senior Product Designer', true);
    setMeta('og:image', '/images/amit-portrait.png', true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    const scriptId = 'category-page-jsonld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Amit Tadvi',
      jobTitle: 'Senior Product Designer',
      url: seo.canonical.replace(/\/category\/.*$/, '/'),
      sameAs: [homePage.contact.linkedin],
      knowsAbout: content.knowsAbout,
    });

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [content]);
}

export function PremiumCategoryPage({ content }: PremiumCategoryPageProps) {
  const { prev, next } = getAdjacentCategories(content.slug);
  const activeAnchor = usePageAnchorSpy(ANCHORS.map((item) => item.id));
  const galleryRef = useGalleryStagger<HTMLDivElement>();
  const { ref: philosophyRef, visible: philosophyVisible } = useInViewReveal<HTMLDivElement>(0.75);
  const [selectedImage, setSelectedImage] = useState<string | string[] | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!selectedImage) {
      setIsZoomed(false);
    }
  }, [selectedImage]);

  const workProjects = useMemo(() => {
    const projects = PROJECT_SOURCES[content.slug];
    return content.workHighlights
      .map((highlight) => {
        const project = projects.find((item) => item.slug === highlight.slug);
        if (!project) return null;
        return { ...project, ...highlight };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [content]);

  useReadingProgress();
  usePremiumMeta(content);

  const pageTitleId = `${content.dataCategory}-page-title`;
  const imageWidth = content.layout === 'portrait' ? 360 : 640;
  const imageHeight = content.layout === 'portrait' ? 760 : 360;

  return (
    <PageShell nav={{ backTo: '/#work', title: content.pageTitle }} className="page-shell--category-glass">
      <div id="reading-progress" className="reading-progress" aria-hidden />

      <article className="category-page category-page--premium" data-category={content.dataCategory}>
        <section className="page-hero section-container" aria-labelledby={pageTitleId}>
          <div className="page-hero__content">
            <div className="page-hero__headline">
              <span className="hero-script" aria-hidden="true">
                {content.titleWatermark}
              </span>
              <h1 id={pageTitleId} className="page-hero__title">
                {content.pageTitle}
              </h1>
            </div>
            <p className="page-hero__descriptor">{content.heroSubtitle}</p>
          </div>
        </section>

        <nav className="page-anchors section-container" aria-label="Page sections">
          {ANCHORS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`page-anchors__link${activeAnchor === item.id ? ' active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section id="overview" className="premium-section section-container">
          <div className="capability-snapshot">
            <div className="capability-snapshot__copy">
              <h2 className="premium-section__title">What this page covers</h2>
              <p className="capability-snapshot__summary">{content.capabilitySummary}</p>
            </div>
            <div className="metadata-grid" role="list" aria-label={`${content.pageTitle} profile`}>
              {content.metadataCards.map((card) => (
                <div key={card.label} className="metadata-card liquid-glass" role="listitem">
                  <span className="metadata-card__label">{card.label}</span>
                  {card.lines ? (
                    <div className="metadata-card__lines">
                      <p className="metadata-card__value">{card.lines[0]}</p>
                      <p className="metadata-card__value">{card.lines[1]}</p>
                    </div>
                  ) : (
                    <p className="metadata-card__value">{card.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-section section-container" aria-labelledby="problems-title">
          <h2 id="problems-title" className="premium-section__title premium-section__title--center">
            {content.problemsTitle}
          </h2>
          <div className="insight-grid insight-grid--4">
            {content.problemCards.map((card) => (
              <article key={card.title} className="insight-card liquid-glass">
                <h3 className="insight-card__title">{card.title}</h3>
                <p className="insight-card__text">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="premium-section section-container">
          <h2 className="gallery-heading">{content.workTitle}</h2>
          <p className="premium-section__intro">{content.workIntro}</p>
          <div ref={galleryRef} className="work-proof-grid">
            {workProjects.map((project) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setSelectedImage((project as any).gallery || (project as any).screenImage || project.thumbnail)}
                className="work-proof-card gallery-card liquid-glass text-left"
              >
                <div className="work-proof-card__media gallery-card-media">
                  <span className="outcome-pill">{project.categoryTag}</span>
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} — ${content.altCategoryLabel} product design by Amit Tadvi`}
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                  />
                </div>
                <div className="work-proof-card__body">
                  <h3 className="work-proof-card__title">{project.name}</h3>
                  <p className="work-proof-card__summary">{project.summary}</p>
                  <p className="work-proof-card__focus">
                    <strong>Focus:</strong> {project.focus}
                  </p>
                  <span className="view-link">
                    View Project <i className="ti ti-arrow-right" aria-hidden />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="approach" className="premium-section section-container">
          <h2 className="premium-section__title premium-section__title--center">{content.approachTitle}</h2>
          <div className="insight-grid insight-grid--4">
            {content.approachCards.map((card) => (
              <article key={card.title} className="insight-card liquid-glass">
                <h3 className="insight-card__title">{card.title}</h3>
                <p className="insight-card__text">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="premium-section section-container" aria-labelledby="modules-title">
          <h2 id="modules-title" className="premium-section__title premium-section__title--center">
            {content.modulesTitle}
          </h2>
          <div className="module-grid">
            {content.capabilityModules.map((module) => (
              <article key={module.title} className="module-card liquid-glass">
                <h3 className="module-card__title">{module.title}</h3>
                <ul className="module-card__list">
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="outcomes-strip liquid-glass">
            <h3 className="outcomes-strip__title">{content.outcomesTitle}</h3>
            <ul className="outcomes-strip__list" role="list">
              {content.outcomePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="premium-section section-container philosophy-cta">
          <div
            ref={philosophyRef}
            className={`philosophy-block liquid-glass${philosophyVisible ? ' is-visible' : ''}`}
          >
            <h2 className="philosophy-block__title">Design philosophy</h2>
            <p className="philosophy-block__text">{content.philosophy}</p>
          </div>
          <aside className="cta-card liquid-glass">
            <h2 className="cta-card__heading">{content.cta.heading}</h2>
            <p className="cta-card__body">{content.cta.body}</p>
            <a href={`mailto:${content.cta.email}`} className="contact-strip__btn">
              Let&apos;s Talk <i className="ti ti-arrow-right" aria-hidden />
            </a>
          </aside>
        </section>

        <section className="section-container category-nav-section" aria-label="Browse categories">
          <div className="category-nav">
            <Link to={`/category/${prev.slug}`} className="cat-nav-btn liquid-glass">
              <i className="ti ti-arrow-left cat-nav-icon" aria-hidden />
              <div>
                <span className="cat-nav-label">Previous</span>
                <span className="cat-nav-title">{prev.title}</span>
              </div>
            </Link>
            <Link to="/#work" className="cat-nav-home liquid-glass">
              <i className="ti ti-layout-grid" aria-hidden />
              All Work
            </Link>
            <Link to={`/category/${next.slug}`} className="cat-nav-btn cat-nav-btn--next next liquid-glass">
              <div>
                <span className="cat-nav-label">Next</span>
                <span className="cat-nav-title">{next.title}</span>
              </div>
              <i className="ti ti-arrow-right cat-nav-icon" aria-hidden />
            </Link>
          </div>
        </section>
      </article>

      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[99999] flex ${
                isZoomed ? 'items-start py-12' : 'items-center'
              } justify-center bg-black/80 p-4 backdrop-blur-xl md:p-8 ${
                isZoomed ? 'overflow-y-auto' : ''
              }`}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="fixed right-6 top-6 z-[100000] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <button
                className="fixed right-20 top-6 z-[100000] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
              </button>

              <div 
                className={`relative z-[100000] flex ${
                  isZoomed 
                    ? 'flex-col gap-12 w-full max-w-5xl items-center' 
                    : `flex-row gap-8 max-h-[95vh] w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar ${Array.isArray(selectedImage) && selectedImage.length > 1 ? 'items-center px-8 md:px-[15vw]' : 'items-center justify-center'}`
                }`}
                style={!isZoomed && Array.isArray(selectedImage) && selectedImage.length > 1 ? { justifyContent: 'flex-start' } : {}}
                onClick={(e) => e.stopPropagation()}
              >
                {(Array.isArray(selectedImage) ? selectedImage : [selectedImage]).map((img, index) => (
                  <motion.img
                    key={img}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300, delay: Math.min(index * 0.05, 0.5) }}
                    src={img}
                    alt="Project Full View"
                    className={`${
                      isZoomed
                        ? 'w-full rounded-lg object-contain shadow-2xl'
                        : 'max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl snap-center shrink-0'
                    } cursor-zoom-${isZoomed ? 'out' : 'in'} ${Array.isArray(selectedImage) && selectedImage.length > 1 && !isZoomed ? 'first:ml-4 last:mr-4' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </PageShell>
  );
}
