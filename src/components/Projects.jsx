import './Projects.css';
import { portfolioData } from '../config/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-container">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-full-description">
                  {project.fullDescription}
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn view-code">
                      View Code
                    </a>
                  )}
                  {project.fullDescription && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn read-more">
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
