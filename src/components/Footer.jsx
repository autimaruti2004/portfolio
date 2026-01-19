import './Footer.css';
import { portfolioData } from '../config/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
