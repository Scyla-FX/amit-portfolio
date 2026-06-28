import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './Header';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_SECTIONS = [
  { id: 'projects', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
] as const;

const RESUME_HREF = '/resume.pdf';
const RESUME_FILENAME = 'Amit-Tadvi-Senior-Product-Designer-Resume.pdf';

const navLinkClass = (active: boolean) =>
  `home-nav-link inline-flex min-h-11 items-center px-1 text-sm font-medium leading-none transition-colors duration-200 ease-out cursor-pointer ${
    active ? 'home-nav-link--active text-theme-primary' : 'text-theme-muted hover:text-brand'
  }`;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function StickyHomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_SECTIONS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <div className="home-nav-controls fixed top-0 right-0 z-[60] flex items-center gap-2">
        {!scrolled ? <ThemeToggle /> : null}
      </div>

      <header
        className={`sticky-home-nav fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out ${
          scrolled ? 'sticky-home-nav--visible translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!scrolled}
      >
        <div className="section-container sticky-home-nav__shell">
          <div className="sticky-home-nav__inner liquid-glass">
            <a
              href="#hero"
              className="home-nav-brand hidden shrink-0 sm:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Amit Tadvi
            </a>

            <nav className="home-nav-links hidden lg:flex" aria-label="Primary">
              {NAV_SECTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={navLinkClass(activeId === item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="home-nav-actions">
              <a
                href={RESUME_HREF}
                download={RESUME_FILENAME}
                className="btn-resume btn-resume--glass inline-flex"
                aria-label="Download resume PDF"
              >
                <i className="ti ti-download" aria-hidden />
                Download Resume
              </a>
              <ThemeToggle className="hidden lg:inline-flex" />
              <button
                type="button"
                className="home-nav-menu-btn inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden cursor-pointer"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`home-nav-drawer fixed inset-x-0 top-[4.75rem] z-40 transition-all duration-200 ease-out lg:hidden ${
          menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="home-nav-drawer__inner liquid-glass section-container" aria-label="Mobile primary">
          {NAV_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`home-nav-drawer-link min-h-11 rounded-lg px-3 text-left text-base font-medium transition-colors duration-200 ease-out cursor-pointer ${
                activeId === item.id ? 'text-brand bg-brand/10' : 'text-theme-body hover:text-brand'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            className="btn-resume btn-resume--glass mt-2 w-full justify-center"
            aria-label="Download resume PDF"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
          <div className="mt-3 flex justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden cursor-pointer"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
