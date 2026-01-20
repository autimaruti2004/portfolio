import { useState } from 'react';
import './Contact.css';
import { portfolioData } from '../config/portfolioData';
import { sendEmail } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Send email data to Firebase
      await sendEmail(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
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

            {success && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
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
