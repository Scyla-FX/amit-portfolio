import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { PageNavConfig } from '../components/layout/pageNav';

interface PageNavContextValue {
  config: PageNavConfig | null;
  setConfig: (config: PageNavConfig | null) => void;
}

const PageNavContext = createContext<PageNavContextValue | null>(null);

export function PageNavProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<PageNavConfig | null>(null);
  return (
    <PageNavContext.Provider value={{ config, setConfig }}>{children}</PageNavContext.Provider>
  );
}

function usePageNavContext() {
  const ctx = useContext(PageNavContext);
  if (!ctx) {
    throw new Error('usePageNavContext must be used within PageNavProvider');
  }
  return ctx;
}

export function usePageNavConfig() {
  return usePageNavContext().config;
}

export function useRegisterPageNav(config: PageNavConfig | undefined) {
  const { setConfig } = usePageNavContext();

  useEffect(() => {
    if (!config) {
      setConfig(null);
      return;
    }

    setConfig(config);
    return () => setConfig(null);
  }, [
    config?.backTo,
    config?.backLabel,
    config?.title,
    config?.closeTo,
    config?.closeLabel,
    config?.showResume,
    setConfig,
  ]);
}
