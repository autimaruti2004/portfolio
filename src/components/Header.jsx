import './Header.css';
import { portfolioData } from '../config/portfolioData';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-content">
            <img 
              src={portfolioData.personal.image} 
              alt={portfolioData.personal.name}
              className="logo-image"
            />
            <h1>{portfolioData.personal.name}</h1>
          </div>
        </div>
        <nav className="nav">
          {portfolioData.navigation.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
