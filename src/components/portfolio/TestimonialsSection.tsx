import { testimonials } from '../../data/homePage';
import { Reveal } from './Reveal';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="section-testimonials" aria-label="Testimonials">
      <div className="section-inner">
        <Reveal>
          <div className="section-label">What collaborators say</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">Loved by teams everywhere</h2>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal key={`${item.author}-${index}`} delay={(index % 3) + 1 as 1 | 2 | 3} className="testimonial-card">
              <div className="testimonial-stars" aria-hidden>
                ★★★★★
              </div>
              <p className="testimonial-text">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{initials(item.author)}</div>
                <div>
                  <span className="t-name">{item.author}</span>
                  <span className="t-role">{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
