import { useState } from 'react';
import './Contact.css';
import { portfolioData } from '../config/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with email service like EmailJS or create a backend endpoint
    const mailtoLink = `mailto:${portfolioData.contact.email}?subject=${formData.subject}&body=${formData.message}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>{portfolioData.contact.message}</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  {portfolioData.contact.email}
                </a>
              </div>
              
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href={`tel:${portfolioData.contact.phone}`}>
                  {portfolioData.contact.phone}
                </a>
              </div>
              
              <div className="info-item">
                <span className="info-label">Location:</span>
                <p>{portfolioData.contact.location}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Contact Me</h3>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Maruti Auti"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="autimaruti2004@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Opportunity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="social-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            {portfolioData.social.github && (
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link github">
                GitHub
              </a>
            )}
            {portfolioData.social.twitter && (
              <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter" className="social-link twitter">
                Twitter
              </a>
            )}
            {portfolioData.social.linkedin && (
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link linkedin">
                LinkedIn
              </a>
            )}
            {portfolioData.social.instagram && (
              <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link instagram">
                Instagram
              </a>
            )}
            {portfolioData.social.facebook && (
              <a href={portfolioData.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="social-link facebook">
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
