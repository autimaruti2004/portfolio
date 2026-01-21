import './Experience.css';
import { portfolioData } from '../config/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Experience</h2>
        
        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item" data-aos="fade-up" data-aos-delay={100 + index * 150}>
              <div className="timeline-dot" data-aos="zoom-in" data-aos-delay={150 + index * 150}></div>
              <div className="timeline-content" data-aos="fade-left" data-aos-delay={200 + index * 150}>
                <h3 className="job-title">{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <ul className="job-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} data-aos="fade-in" data-aos-delay={250 + idx * 50}>{desc}</li>
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
