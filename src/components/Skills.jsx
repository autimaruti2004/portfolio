import './Skills.css';
import { portfolioData } from '../config/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {portfolioData.skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
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
