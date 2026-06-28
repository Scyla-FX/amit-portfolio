import type { ReactNode } from 'react';
import type { PageNavConfig } from './pageNav';
import { useRegisterPageNav } from '../../context/PageNavContext';

interface PageShellProps {
  children: ReactNode;
  className?: string;
  nav?: PageNavConfig;
}

export function PageShell({ children, className = '', nav }: PageShellProps) {
  useRegisterPageNav(nav);

  return (
    <div className={`section-surface relative min-h-screen ${className}`}>
      <div className="section-surface-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className={`relative ${nav ? 'page-shell-content' : ''}`}>{children}</div>
    </div>
  );
}
