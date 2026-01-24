import './Projects.css';
import { portfolioData } from '../config/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <div className="projects-container">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="project-card" data-aos="zoom-in" data-aos-delay={100 + index * 100}>
              <div className="project-image" data-aos="fade-in">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </div>
              
              <div className="project-content" data-aos="fade-up" data-aos-delay={150 + index * 100}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-full-description">
                  {project.fullDescription}
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag" data-aos="flip-left" data-aos-delay={200 + idx * 50}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn view-code" data-aos="fade-right">
                      View Code
                    </a>
                  )}
                  {project.readMoreLink && (
                    <a href={project.readMoreLink} target="_blank" rel="noopener noreferrer" className="project-btn read-more" data-aos="fade-left">
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
