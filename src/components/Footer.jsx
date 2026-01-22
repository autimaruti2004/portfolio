import './Footer.css';
import { portfolioData } from '../config/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear}. Created by {portfolioData.personal.name}</p>
      </div>
    </footer>
  );
}
