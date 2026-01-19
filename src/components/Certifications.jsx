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
        <h2 className="section-title">Certifications</h2>
        
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="certifications-scroll">
            {portfolioData.certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-image" onClick={() => handleImageClick(cert.image)}>
                  <img src={cert.image} alt={cert.title} style={{ cursor: 'pointer' }} />
                </div>
                <div className="cert-content">
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
          <div className="image-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>&times;</button>
            <img src={selectedImage} alt="Enlarged certification" />
          </div>
        </div>
      )}
    </section>
  );
}
