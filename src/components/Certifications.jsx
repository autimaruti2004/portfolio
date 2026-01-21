import './Certifications.css';
import { portfolioData } from '../config/portfolioData';
import { useState } from 'react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Certifications</h2>
        
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="certifications-scroll">
            {portfolioData.certifications.map((cert, index) => (
              <div key={cert.id} className="certification-card" data-aos="flip-left" data-aos-delay={100 + index * 100}>
                <div className="cert-image" onClick={() => handleImageClick(cert.image)} data-aos="zoom-in" data-aos-delay={150 + index * 100}>
                  <img src={cert.image} alt={cert.title} style={{ cursor: 'pointer' }} />
                </div>
                <div className="cert-content" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="year">{cert.year}</p>
                  <p className="description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="image-popup-overlay" onClick={closePopup}>
          <div className="image-popup" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
            <button className="popup-close" onClick={closePopup}>&times;</button>
            <img src={selectedImage} alt="Enlarged certification" />
          </div>
        </div>
      )}
    </section>
  );
}
