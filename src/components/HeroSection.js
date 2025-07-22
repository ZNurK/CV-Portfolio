// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';


const HeroSection = ({ content }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="welcome-text">{content.welcome}</h1>
        <p className="greeting-text" dangerouslySetInnerHTML={{ __html: content.greeting }}></p>
        <p className="about-text">{content.about}</p>
        {/* PDF İndirme Butonu BURAYA EKLENDİ */}
        <a 
          href="/ZEYNEP NUR KARABAY-CVSite-TR.pdf" // Public klasöründeki PDF dosyanızın yolu
          download="ZEYNEP_NUR_KARABAY_CVSite-TR.pdf" // İndirilecek dosyanın adı
          className="download-cv-button"
        >
          {content.downloadCV} {/* content dosyasından çekilecek buton metni */}
        </a>
     </div>
    </section>
  );
};

export default HeroSection;