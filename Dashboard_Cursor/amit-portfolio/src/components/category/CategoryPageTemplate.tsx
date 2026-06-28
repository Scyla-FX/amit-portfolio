import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import type { CategoryPageConfig, MainCategorySlug } from '../../data/categoryPageConfig';
import { getAdjacentCategories } from '../../data/categoryPageConfig';
import { homePage } from '../../data/homePage';
import { useGalleryStagger } from '../../hooks/useGalleryStagger';
import { useInViewReveal } from '../../hooks/useInViewReveal';
import { usePageAnchorSpy } from '../../hooks/usePageAnchorSpy';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { PageShell } from '../layout/PageShell';

const ANCHORS = [
  { id: 'overview', label: 'Overview' },
  { id: 'approach', label: 'Approach' },
  { id: 'work', label: 'Work' },
] as const;

const CATEGORY_DATA: Record<MainCategorySlug, string> = {
  erp: 'enterprise',
  'web-design': 'web',
  app: 'mobile',
};

interface CategoryPageTemplateProps {
  config: CategoryPageConfig;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const CATEGORY_ALT_LABEL: Record<MainCategorySlug, string> = {
  erp: 'Enterprise SaaS',
  'web-design': 'Website Design',
  app: 'Mobile Product Design',
};

function getAltText(projectName: string, slug: MainCategorySlug) {
  return `${projectName} — ${CATEGORY_ALT_LABEL[slug]} product design by Amit Tadvi`;
}

function useCategoryMeta(config: CategoryPageConfig) {
  useEffect(() => {
    const { seo } = config;
    document.title = seo.title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', seo.description);
    if (seo.keywords) setMeta('keywords', seo.keywords);
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
      knowsAbout: [
        'Product Design',
        'UX Design',
        'Enterprise SaaS',
        'ERP Design',
        'CRM Design',
        'Figma',
        'Design Systems',
      ],
    });

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [config]);
}

function MethodologyAccordion({
  trigger,
  sections,
}: {
  trigger: string;
  sections: CategoryPageConfig['methodologySections'];
}) {
  const [open, setOpen] = useState(false);
  const panelId = 'methodology-panel';

  return (
    <div className="methodology-accordion">
      <button
        type="button"
        className="accordion-trigger min-h-11"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{trigger}</span>
        <i className={`ti ti-chevron-down accordion-trigger__icon${open ? ' accordion-trigger__icon--open' : ''}`} aria-hidden />
      </button>
      <div id={panelId} className={`accordion-body${open ? ' accordion-body--open' : ''}`} hidden={!open}>
        {sections.map((section) => (
          <div key={section.heading ?? section.items[0]?.title} className="accordion-body__section">
            {section.heading ? <h3 className="accordion-body__heading">{section.heading}</h3> : null}
            <ul className="accordion-body__list">
              {section.items.map((item) => (
                <li key={item.title}>
                  <span className="font-medium text-theme-primary">{item.title}:</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryCard({
  project,
  config,
  onClick,
}: {
  project: CategoryPageConfig['projects'][0];
  config: CategoryPageConfig;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} type="button" className="gallery-card text-left block w-full">
      <div className="gallery-card-media">
        <span className="outcome-pill">{project.outcomePill}</span>
        <img
          src={project.thumbnail}
          alt={getAltText(project.name, config.slug)}
          width={config.layout === 'portrait' ? 360 : 640}
          height={config.layout === 'portrait' ? 760 : 360}
          loading="lazy"
        />
      </div>
      <div className="gallery-card-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tag">{project.tagline}</p>
        <span className="view-link">
          View Project <i className="ti ti-arrow-right" aria-hidden />
        </span>
      </div>
    </button>
  );
}

export function CategoryPageTemplate({ config }: CategoryPageTemplateProps) {
  const { prev, next } = getAdjacentCategories(config.slug);
  const activeAnchor = usePageAnchorSpy(ANCHORS.map((item) => item.id));
  const galleryRef = useGalleryStagger<HTMLDivElement>();
  const { ref: quoteRef, visible: quoteVisible } = useInViewReveal<HTMLQuoteElement>(0.8);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!selectedImage) {
      setIsZoomed(false);
    }
  }, [selectedImage]);

  useReadingProgress();
  useCategoryMeta(config);

  return (
    <PageShell nav={{ backTo: '/#work', title: config.pageTitle }} className="page-shell--category-glass">
      <div id="reading-progress" className="reading-progress" aria-hidden />

      <article className="category-page" data-category={CATEGORY_DATA[config.slug]}>
        {/* SECTION: page hero */}
        <section className="page-hero section-container" aria-labelledby="category-page-title">
          <div className="page-hero__content">
            <div className="page-hero__headline">
              <span className="hero-script" aria-hidden="true">
                {config.titleWatermark}
              </span>
              <h1 id="category-page-title" className="page-hero__title">
                {config.pageTitle}
              </h1>
            </div>
            <p className="page-hero__descriptor">{config.descriptor}</p>
          </div>
        </section>

        {/* SECTION: stat highlights */}
        <section className="stat-bar section-container" aria-label="At a glance">
          <div className="stat-bar__inner">
            {config.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`stat-chip liquid-glass${index === 2 ? ' stat-chip--text' : ''}`}
              >
                <span className="stat-chip__value">{stat.value}</span>
                <span className="stat-chip__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: in-page anchors */}
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

        {/* SECTION: overview */}
        <section id="overview" className="section-overview section-container">
          <span className="role-badge">
            <i className="ti ti-user" aria-hidden />
            {config.roleBadge}
          </span>
          <p className="category-intro">{config.intro}</p>
          <ul className="category-focus-tags" role="list" aria-label="Category focus areas">
            {config.categoryTags.map((tag) => (
              <li key={tag} className="category-pill liquid-glass">
                {tag}
              </li>
            ))}
          </ul>
          <ul className="skills-tags" role="list" aria-label="Skills and tools">
            {config.skillTags.map((tag) => (
              <li key={tag} className="skill-tag">
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: approach */}
        <section id="approach" className="section-approach section-container">
          <h2 className="category-section-title">Approach</h2>
          <MethodologyAccordion trigger={config.methodologyTrigger} sections={config.methodologySections} />
          <div className="category-process-narrative">
            {config.processNarrative.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SECTION: work gallery */}
        <section id="work" className="section-gallery section-container">
          <h2 className="gallery-heading">Full Project Gallery</h2>
          <div ref={galleryRef} className={`gallery-grid gallery-grid--${config.slug}`}>
            {config.projects.map((project) => (
              <GalleryCard 
                key={project.slug} 
                project={project} 
                config={config} 
                onClick={() => setSelectedImage(project.screenImage || project.thumbnail)} 
              />
            ))}
          </div>
        </section>

        {/* SECTION: contact strip */}
        <section className="section-contact section-container" aria-label="Contact call to action">
          <div className="contact-strip">
            <p>{config.contactStrip.text}</p>
            <a href={`mailto:${config.contactStrip.email}`} className="contact-strip__btn">
              Let&apos;s Talk <i className="ti ti-arrow-right" aria-hidden />
            </a>
          </div>
        </section>

        {/* SECTION: closing quote */}
        <section className="section-quote section-container" aria-label="Closing quote">
          <blockquote ref={quoteRef} className={`category-closing-quote${quoteVisible ? ' is-visible' : ''}`}>
            &ldquo;{config.closingQuote}&rdquo;
          </blockquote>
        </section>

        {/* SECTION: category navigation */}
        <section className="section-container category-nav-section" aria-label="Browse categories">
          <div className="category-nav">
            <Link to={`/category/${prev.slug}`} className="cat-nav-btn">
              <i className="ti ti-arrow-left cat-nav-icon" aria-hidden />
              <div>
                <span className="cat-nav-label">Previous</span>
                <span className="cat-nav-title">{prev.title}</span>
              </div>
            </Link>
            <Link to="/#work" className="cat-nav-home">
              <i className="ti ti-layout-grid" aria-hidden />
              All Work
            </Link>
            <Link to={`/category/${next.slug}`} className="cat-nav-btn cat-nav-btn--next next">
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

              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Project Full View"
                className={`relative z-[100000] ${
                  isZoomed
                    ? 'w-full max-w-5xl rounded-lg object-contain'
                    : 'max-h-[95vh] max-w-[95vw] rounded-lg object-contain shadow-2xl'
                } cursor-zoom-${isZoomed ? 'out' : 'in'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </PageShell>
  );
}
