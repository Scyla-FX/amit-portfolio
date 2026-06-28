import { Link } from 'react-router-dom';
import { featuredProjects, homePage } from '../../data/homePage';
import { Reveal } from './Reveal';

export function ProjectsCarousel() {
  const { projects } = homePage;

  return (
    <section className="section-projects" id="work">
      <div className="section-inner">
        <Reveal>
          <div className="section-label">{projects.watermark}</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">{projects.heading}</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="section-desc">{projects.description}</p>
        </Reveal>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) + 1 as 1 | 2 | 3}>
              <Link to={`/category/${project.slug}`} className="project-card">
                <div className="project-img-wrap">
                  <img src={project.placeholder} alt={`${project.title} — Amit Tadvi`} loading="lazy" />
                  <div className="project-overlay">
                    <span>
                      View Project
                      <i className="ti ti-arrow-right" aria-hidden />
                    </span>
                  </div>
                  <div className="project-badge">{project.badge}</div>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
