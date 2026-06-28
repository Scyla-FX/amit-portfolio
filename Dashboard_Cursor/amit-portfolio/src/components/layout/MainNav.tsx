import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { ThemeToggle } from './Header';
import { usePageNavConfig } from '../../context/PageNavContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { homePage } from '../../data/homePage';

const NAV_LINKS = [
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
] as const;

const RESUME_FILENAME = 'Amit-Tadvi-Senior-Product-Designer.pdf';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function MainNav() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const pageNav = usePageNavConfig();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = isHome ? NAV_LINKS.map((item) => item.id) : [];
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const backTo = pageNav?.backTo ?? '/#work';
  const backLabel = pageNav?.backLabel ?? 'Back to Portfolio';

  return (
    <>
      <nav
        id="main-nav"
        className={`main-nav${scrolled ? ' main-nav--scrolled' : ''}${isHome ? '' : ' main-nav--inner'}`}
        aria-label="Primary"
      >
        <div className="nav-inner">
          {isHome ? (
            <>
              <a
                href="#hero"
                className="nav-logo"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="logo-dot" aria-hidden />
                Amit Tadvi
              </a>

              <div className="nav-links">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={activeId === item.id ? 'active' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </>
          ) : (
            <>
              <Link to={backTo} className="nav-back" aria-label={backLabel}>
                <ArrowLeft className="nav-back-icon" strokeWidth={2.25} aria-hidden />
                <span className="nav-back-label">{backLabel}</span>
                <span className="nav-back-label nav-back-label--short">Back</span>
              </Link>

              {pageNav?.title ? (
                <p className="nav-page-title" title={pageNav.title}>
                  {pageNav.title}
                </p>
              ) : (
                <span className="nav-page-title-spacer" aria-hidden />
              )}
            </>
          )}

          <div className="nav-actions">
            {!isHome && pageNav?.showResume !== false ? (
              <a href="/resume.pdf" download={RESUME_FILENAME} className="btn-resume">
                <i className="ti ti-download" aria-hidden />
                Resume
              </a>
            ) : null}

            {isHome ? (
              <>
                <ThemeToggle />
                <a href="/resume.pdf" download={RESUME_FILENAME} className="btn-resume">
                  <i className="ti ti-download" aria-hidden />
                  Resume
                </a>
                <a href={`mailto:${homePage.contact.email}`} className="btn-primary-sm">
                  Hire Me
                </a>
              </>
            ) : (
              <>
                {pageNav?.closeTo ? (
                  <Link
                    to={pageNav.closeTo}
                    className="nav-close-btn"
                    aria-label={pageNav.closeLabel ?? 'Close'}
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </Link>
                ) : null}
                <ThemeToggle />
              </>
            )}

            <button
              type="button"
              className="nav-mobile-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'}`} aria-hidden />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div className="nav-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {isHome ? (
            NAV_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeId === item.id ? 'active' : undefined}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            ))
          ) : (
            <>
              <Link to={backTo} className="nav-mobile-drawer__back" onClick={() => setMenuOpen(false)}>
                {backLabel}
              </Link>
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </>
          )}
          <a href="/resume.pdf" download={RESUME_FILENAME} className="nav-mobile-drawer__resume">
            <i className="ti ti-download" aria-hidden />
            Download Resume
          </a>
          {isHome ? (
            <a href={`mailto:${homePage.contact.email}`} className="btn-primary-sm nav-mobile-drawer__hire">
              Hire Me
            </a>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
