import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homePage, careerTimeline, processSteps } from '../../data/homePage';
import { Reveal } from './Reveal';

function SaasSectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <>
      <Reveal>
        <div className="section-label">{label}</div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={2}>
          <p className="section-desc">{description}</p>
        </Reveal>
      ) : null}
    </>
  );
}

export function HeroSection() {
  const { hero } = homePage;
  const taglineParts = hero.tagline.split(' · ');

  return (
    <section className="hero" id="hero">
      <div className="hero-blob hero-blob-1" aria-hidden />
      <div className="hero-blob hero-blob-2" aria-hidden />
      <div className="hero-blob hero-blob-3" aria-hidden />
      <div className="hero-noise" aria-hidden />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="available-badge">
            <span className="badge-dot" aria-hidden />
            {hero.socialProof}
          </div>

          <p className="hero-label">{hero.greeting}</p>
          <h1 className="hero-name">{hero.name}</h1>

          <p className="hero-title">
            {taglineParts.map((part, index) => (
              <span key={part}>
                {index > 0 ? <span className="title-divider">·</span> : null}
                {part}
              </span>
            ))}
          </p>

          <p className="hero-desc">{hero.bio}</p>

          <div className="hero-ctas">
            <a href="#work" className="btn-hero-primary">
              View My Work
              <i className="ti ti-arrow-right" aria-hidden />
            </a>
            <a
              href="/resume.pdf"
              download="Amit-Tadvi-Senior-Product-Designer.pdf"
              className="btn-hero-secondary"
            >
              <i className="ti ti-download" aria-hidden />
              Download Resume
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="proof-item">
              <span className="proof-num">9+</span>
              <span className="proof-label">Years exp.</span>
            </div>
            <div className="proof-divider" aria-hidden />
            <div className="proof-item">
              <span className="proof-num">30+</span>
              <span className="proof-label">Projects</span>
            </div>
            <div className="proof-divider" aria-hidden />
            <div className="proof-item">
              <span className="proof-num">3</span>
              <span className="proof-label">Industries</span>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" aria-hidden />
          <img
            src={hero.portrait}
            alt="Amit Tadvi — Senior Product Designer"
            width={640}
            height={800}
            className="hero-photo"
          />
          <div className="hero-chip hero-chip-1">
            <i className="ti ti-brand-figma" aria-hidden />
            Figma
          </div>
          <div className="hero-chip hero-chip-2">
            <i className="ti ti-layout-dashboard" aria-hidden />
            Product Design
          </div>
          <div className="hero-chip hero-chip-3">
            <i className="ti ti-device-mobile" aria-hidden />
            Mobile · Web
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerItems({ items, groupId }: { items: { icon: string; label: string }[]; groupId: string }) {
  return (
    <>
      {items.map((item, index) => (
        <div className="ticker-chip" key={`${groupId}-${item.label}-${index}`}>
          <i className={`ti ${item.icon}`} aria-hidden />
          <span title={item.label}>{item.label}</span>
        </div>
      ))}
    </>
  );
}

const TICKER_ITEMS = [
  { icon: 'ti-layout-grid', label: 'Enterprise UX' },
  { icon: 'ti-target-arrow', label: 'Product Strategy' },
  { icon: 'ti-components', label: 'Design Systems' },
  { icon: 'ti-plane', label: 'Aviation' },
  { icon: 'ti-building-hospital', label: 'Healthcare' },
  { icon: 'ti-users-group', label: 'HR Tech' },
  { icon: 'ti-cloud', label: 'Enterprise SaaS' },
  { icon: 'ti-sparkles', label: 'AI Products' },
  { icon: 'ti-building-skyscraper', label: 'B2B Platforms' },
  { icon: 'ti-layout-dashboard', label: 'Dashboard Design' },
  { icon: 'ti-device-mobile', label: 'Mobile Apps' },
  { icon: 'ti-world-www', label: 'Web Apps' },
  { icon: 'ti-file-text', label: 'Case Studies' },
  { icon: 'ti-search', label: 'UX Research' },
  { icon: 'ti-brand-figma', label: 'Figma' },
  { icon: 'ti-code', label: 'Cursor AI' },
  { icon: 'ti-route', label: 'Design Process' },
  { icon: 'ti-compass', label: 'Product Discovery' },
  { icon: 'ti-artboard', label: 'Prototyping' },
  { icon: 'ti-accessible', label: 'Accessibility' },
  { icon: 'ti-world', label: 'Global Products' },
] as const;

/** Repeat labels so one strip is always wider than the viewport. */
const TICKER_STRIP = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export function TickerSection() {
  return (
    <section className="ticker-section" aria-label="Skills and expertise">
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-group">
            <TickerItems items={TICKER_STRIP} groupId="a" />
          </div>
          <div className="ticker-group" aria-hidden="true">
            <TickerItems items={TICKER_STRIP} groupId="b" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpecializationSection() {
  const { specialization, bentoCards } = homePage;

  return (
    <section className="section-skills" id="skills">
      <div className="section-inner">
        <SaasSectionHeader
          label={specialization.watermark}
          title={specialization.heading}
          description={specialization.description}
        />

        <div className="bento-grid">
          {bentoCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={(index % 3) + 1 as 1 | 2 | 3}
              className={`bento-card${card.wide ? ' bento-wide' : ''}`}
            >
              <div className="bento-icon">
                <i className={`ti ${card.icon}`} aria-hidden />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { process } = homePage;

  return (
    <section className="section-process" id="process">
      <div className="section-inner process-inner">
        <div className="process-left">
          <SaasSectionHeader
            label={process.watermark}
            title={process.heading}
            description={process.description}
          />

          <Reveal className="process-steps">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="step-icon" aria-hidden>
                  <i className={`ti ${step.icon}`} />
                </div>
                <div className="step-content">
                  <span className="sr-only">Step {step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.items.join(' ')}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="process-right">
          <Reveal className="process-mockup process-mockup--flow">
            <img
              src={process.illustration}
              alt="Design process flow — inputs through discovery and design to shipped outputs"
              className="process-flow-img"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ExperienceAccordionItem({
  entry,
  defaultOpen = false,
}: {
  entry: (typeof careerTimeline)[0];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className={`experience-accordion${open ? ' experience-accordion--open' : ''}`}>
      <button
        type="button"
        className="experience-accordion__trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div className="experience-card__panel">
          <div className="flex gap-4">
            <span className="company-logo shrink-0" aria-hidden>
              {entry.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3>{entry.company}</h3>
                  <p className="mt-1">{entry.role}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  <span className="tenure-badge">{entry.tenure}</span>
                  <span>{entry.period}</span>
                </div>
              </div>
              <p className="mt-4">{entry.keyAchievement}</p>
            </div>
            <ChevronDown className={`experience-accordion__chevron${open ? ' rotate-180' : ''}`} />
          </div>

          <div className={`experience-accordion__content${open ? ' experience-accordion__content--open' : ''}`}>
            <div>
              <ul>
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

export function CareerSection() {
  const { career } = homePage;

  return (
    <section className="section-experience" id="experience">
      <div className="section-inner">
        <SaasSectionHeader label={career.watermark} title={career.heading} description={career.description} />

        <div className="experience-list">
          {careerTimeline.map((entry, index) => (
            <ExperienceAccordionItem key={entry.company} entry={entry} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { about } = homePage;

  return (
    <section className="section-about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <SaasSectionHeader label={about.watermark} title={about.heading} description={about.description} />
          </div>
          <Reveal className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <h3 className="about-subheading">What I bring</h3>
          <div className="what-i-bring-grid">
            {about.whatIBring.map((item) => (
              <div key={item.label} className="what-i-bring-card">
                <span className="what-i-bring-card__icon" aria-hidden>
                  <i className={`ti ${item.icon}`} />
                </span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h3 className="about-subheading">Tools &amp; skills</h3>
          <div className="skills-wrap">
            {about.skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudySection() {
  const { caseStudy } = homePage;
  const phases = [
    { label: 'Problem', value: caseStudy.problem },
    { label: 'Research', value: caseStudy.research },
    { label: 'Solution', value: caseStudy.solution },
    { label: 'Outcome', value: caseStudy.outcome },
  ];

  return (
    <section className="section-casestudy" id="case-study">
      <div className="section-inner">
        <SaasSectionHeader
          label={caseStudy.watermark}
          title={caseStudy.heading}
          description={caseStudy.description}
        />

        <div className="case-study-grid">
          {phases.map((phase, index) => (
            <Reveal key={phase.label} delay={(index % 3) + 1 as 1 | 2 | 3} className="case-study-phase">
              <h3>{phase.label}</h3>
              <p>{phase.value}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link to={`/case-study/${caseStudy.linkId}`} className="project-card case-study-link">
            <div className="project-img-wrap">
              <img
                src={caseStudy.image}
                alt="Case study preview for fintech onboarding redesign"
                loading="lazy"
              />
              <div className="project-overlay">
                <span>
                  View Case Study
                  <i className="ti ti-arrow-right" aria-hidden />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FooterCTASection() {
  const { footerCta, contact } = homePage;

  return (
    <section className="section-footer-cta">
      <div className="footer-cta-inner">
        <Reveal className="footer-cta-content">
          <h2 className="footer-cta-title">{footerCta.heading}</h2>
          <p className="footer-cta-desc">{footerCta.description}</p>
          <div className="footer-cta-btns">
            <a href={`mailto:${contact.email}`} className="btn-hero-primary">
              Get In Touch
              <i className="ti ti-arrow-right" aria-hidden />
            </a>
            <a href="/resume.pdf" download="Amit-Tadvi-Senior-Product-Designer.pdf" className="btn-hero-secondary">
              <i className="ti ti-download" aria-hidden />
              Download Resume
            </a>
          </div>
        </Reveal>

        <div className="footer-cta-mockup">
          <div className="laptop-frame">
            <div className="laptop-screen">
              <img src={footerCta.screenshot} alt="Amit Tadvi portfolio" loading="lazy" />
            </div>
            <div className="laptop-base" aria-hidden />
          </div>
        </div>
      </div>
      <div className="fcta-blob-1" aria-hidden />
      <div className="fcta-blob-2" aria-hidden />
    </section>
  );
}

export function SiteFooter() {
  const { contact } = homePage;

  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-dot" aria-hidden />
            Amit Tadvi
          </div>
          <p>Senior Product Designer · Vadodara, India</p>
          <div className="footer-socials">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="ti ti-brand-linkedin" aria-hidden />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <i className="ti ti-mail" aria-hidden />
            </a>
            <a href={contact.website} target="_blank" rel="noopener noreferrer" aria-label="AV DEVS">
              <i className="ti ti-world" aria-hidden />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Portfolio</h4>
            <a href="#work">All Work</a>
            <Link to="/category/erp">Enterprise SaaS</Link>
            <Link to="/category/app">Mobile Apps</Link>
            <Link to="/category/web-design">Web Design</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href={`mailto:${contact.email}`}>Email Me</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={contact.website} target="_blank" rel="noopener noreferrer">
              AV DEVS
            </a>
            <a href="/resume.pdf" download="Amit-Tadvi-Senior-Product-Designer.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{contact.footerNote}</p>
        <p>{contact.footerLocation}</p>
      </div>
    </footer>
  );
}
