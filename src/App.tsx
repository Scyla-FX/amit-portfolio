import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PageNavProvider } from './context/PageNavContext';
import { MainNav } from './components/layout/MainNav';
import { ReadingProgressBar } from './components/layout/ReadingProgressBar';
import PortfolioPage from './pages/PortfolioPage';
import CategoryPage from './pages/CategoryPage';
import { ErpCasePage, AppCasePage, WebCasePage } from './pages/SubProjectPages';
import CaseStudyPage from './pages/CaseStudyPage';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      {isHome ? <ReadingProgressBar /> : null}
      <MainNav />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/erp/:slug" element={<ErpCasePage />} />
        <Route path="/app/:slug" element={<AppCasePage />} />
        <Route path="/web/:slug" element={<WebCasePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PageNavProvider>
          <AppShell />
        </PageNavProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
