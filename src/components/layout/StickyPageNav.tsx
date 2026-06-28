import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { ThemeToggle } from './Header';
import type { PageNavConfig } from './pageNav';

const RESUME_HREF = '/resume.pdf';
const RESUME_FILENAME = 'Amit-Tadvi-Senior-Product-Designer-Resume.pdf';

export function StickyPageNav({
  backTo = '/#work',
  backLabel = 'Back to Portfolio',
  title,
  closeTo,
  closeLabel = 'Close',
  showResume = true,
}: PageNavConfig) {
  return (
    <header className="sticky-page-nav" role="banner">
      <div className="section-container sticky-page-nav__shell">
        <div className="sticky-page-nav__inner liquid-glass">
          <Link to={backTo} className="sticky-page-nav__back group cursor-pointer" aria-label={backLabel}>
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.25} />
            <span className="sticky-page-nav__back-label hidden sm:inline">{backLabel}</span>
            <span className="sticky-page-nav__back-label sm:hidden">Back</span>
          </Link>

          {title ? (
            <p className="sticky-page-nav__title" title={title}>
              {title}
            </p>
          ) : (
            <span className="min-w-0 flex-1" aria-hidden />
          )}

          <div className="sticky-page-nav__actions">
            {showResume ? (
              <a
                href={RESUME_HREF}
                download={RESUME_FILENAME}
                className="btn-resume btn-resume--glass"
                aria-label="Download resume PDF"
              >
                <i className="ti ti-download" aria-hidden />
                Download Resume
              </a>
            ) : null}
            {closeTo ? (
              <Link
                to={closeTo}
                className="sticky-page-nav__icon-btn cursor-pointer"
                aria-label={closeLabel}
              >
                <X className="h-4 w-4" />
              </Link>
            ) : null}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
