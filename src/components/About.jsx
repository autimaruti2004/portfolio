import './About.css';
import { portfolioData } from '../config/portfolioData';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="who-i-am-section">
          <h3>Who I Am</h3>
          <p className="summary-text">
            <strong>{portfolioData.personal.summary}</strong>
          </p>
          <p className="description-text">
            {portfolioData.personal.description}
          </p>
        </div>
        
        {portfolioData.education.length > 0 && (
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-grid">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <h4>{edu.degree} in {edu.field}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                  {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-scroll">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="year">{cert.year}</p>
                    <p className="description">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
