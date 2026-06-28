import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export function BackButton({ to = '/#work', label = 'Back to Portfolio' }: BackButtonProps) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 text-sm font-medium text-theme-muted transition-colors hover:text-brand cursor-pointer"
    >
      <span className="back-btn-icon flex h-8 w-8 items-center justify-center rounded-full">
        <ArrowLeft className="h-4 w-4" />
      </span>
      {label}
    </Link>
  );
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      type="button"
      aria-label="Toggle dark and light mode"
      title="Switch theme"
      onClick={toggleTheme}
      className={className}
    >
      <i className={`ti ${isDark ? 'ti-sun' : 'ti-moon'}`} id="theme-icon" aria-hidden />
    </button>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 z-50 flex items-center gap-3 p-4 md:p-6">
      <ThemeToggle />
    </header>
  );
}

export function CloseButton({ to, label = 'Close' }: { to: string; label?: string }) {
  return (
    <Link
      to={to}
      className="icon-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm cursor-pointer hover:text-brand"
      aria-label={label}
    >
      <X className="h-4 w-4" />
      {label}
    </Link>
  );
}
