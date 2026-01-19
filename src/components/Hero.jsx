import './Hero.css';
import { portfolioData } from '../config/portfolioData';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Welcome to My Portfolio</p>
          <p className="hero-greeting">Hello, I am</p>
          <h1 className="hero-title">{portfolioData.personal.name}</h1>
          <h2 className="hero-subtitle">{portfolioData.personal.title}</h2>
          <div className="hero-buttons">
            <a 
              href={portfolioData.resume}
              download
              className="btn btn-download"
            >
              Download Resume
            </a>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
