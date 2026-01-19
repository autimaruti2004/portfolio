import './Experience.css';
import { portfolioData } from '../config/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <ul className="job-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
