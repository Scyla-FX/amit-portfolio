import { homePage } from '../../data/homePage';
import { Reveal } from './Reveal';

export function MidPageCTA() {
  const { midPageCta, contact } = homePage;

  return (
    <section className="section-midcta" aria-label="Contact call to action">
      <Reveal className="midcta-inner">
        <div className="midcta-text">
          <h2>{midPageCta.heading}</h2>
          <p>{midPageCta.description}</p>
        </div>
        <a href={`mailto:${contact.email}`} className="btn-hero-primary">
          {midPageCta.buttonLabel}
          <i className="ti ti-arrow-right" aria-hidden />
        </a>
      </Reveal>
    </section>
  );
}
