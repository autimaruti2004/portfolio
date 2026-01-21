import './Skills.css';
import { portfolioData } from '../config/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        
        <div className="skills-grid">
          {portfolioData.skills.categories.map((category, index) => (
            <div key={index} className="skill-category" data-aos="zoom-in" data-aos-delay={200 + index * 200}>
              <h3 className="category-title" data-aos="fade-right" data-aos-delay={300 + index * 200}>{category.name}</h3>
              <div className="skill-items">
                {category.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
