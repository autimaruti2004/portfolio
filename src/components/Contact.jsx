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
        <h2 className="section-title" data-aos="fade-up">Contact</h2>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-right" data-aos-delay="100">
            <h3>Contact Me</h3>

            {success && (
              <div className="success-message" data-aos="zoom-in">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="error-message" data-aos="zoom-in">
                ✗ {error}
              </div>
            )}

            <div className="form-group" data-aos="fade-up" data-aos-delay="150">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name *"
                disabled={loading}
              />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email *"
                disabled={loading}
              />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="250">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject *"
                disabled={loading}
              />
            </div>

            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message *"
                rows="5"
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading} data-aos="fade-up" data-aos-delay="350">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="contact-info" data-aos="fade-left" data-aos-delay="100">
            <h3>Get in touch</h3>
            
            <div className="info-items">
              <div className="info-item" data-aos="zoom-in" data-aos-delay="150">
                <span className="info-label">Email:</span>
                <a href={`mailto:${portfolioData.contact.email}`}>
                  {portfolioData.contact.email}
                </a>
              </div>
              
              <div className="info-item" data-aos="zoom-in" data-aos-delay="200">
                <span className="info-label">Phone:</span>
                <a href={`tel:${portfolioData.contact.phone}`}>
                  {portfolioData.contact.phone}
                </a>
              </div>
              
              <div className="info-item" data-aos="zoom-in" data-aos-delay="250">
                <span className="info-label">Address:</span>
                <p>{portfolioData.contact.location}</p>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <p className="follow-text">Follow me on social media to stay updated with my latest projects and activities.</p>
              <p className="follow-text">You can also connect with me on LinkedIn to explore potential collaborations and opportunities.</p>
              
              <div className="social-links">
                {portfolioData.social.facebook && (
                  <a href={portfolioData.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon facebook" data-aos="zoom-in" data-aos-delay="300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
                {portfolioData.social.twitter && (
                  <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter" className="social-icon twitter" data-aos="zoom-in" data-aos-delay="350">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {portfolioData.social.instagram && (
                  <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon instagram" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {portfolioData.social.github && (
                  <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon github" data-aos="zoom-in" data-aos-delay="450">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {portfolioData.social.linkedin && (
                  <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon linkedin" data-aos="zoom-in" data-aos-delay="500">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
