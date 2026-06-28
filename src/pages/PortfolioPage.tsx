import {
  HeroSection,
  TickerSection,
  SpecializationSection,
  ProcessSection,
  CareerSection,
  AboutSection,
  CaseStudySection,
  FooterCTASection,
  SiteFooter,
} from '../components/portfolio/PortfolioSections';
import { ProjectsCarousel } from '../components/portfolio/ProjectsCarousel';
import { MidPageCTA } from '../components/portfolio/MidPageCTA';
import { TestimonialsSection } from '../components/portfolio/TestimonialsSection';

export default function PortfolioPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TickerSection />
      <SpecializationSection />
      <ProcessSection />
      <MidPageCTA />
      <ProjectsCarousel />
      <CareerSection />
      <AboutSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FooterCTASection />
      <SiteFooter />
    </main>
  );
}
