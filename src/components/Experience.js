// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Deneyim bölümü için CSS dosyası

const Experience = ({ content }) => {
  return (
    <section id="experience" className="experience-section">
      <h2>{content.experienceTitle}</h2>
      <div className="experience-container">
        {content.experience.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.title}</h3>
            {/* Şirket ve konum bilgisinin görünür olduğundan emin olmak için kontrol edelim */}
            <p className="company">{item.company} - {item.location}</p>
            <p className="dates">{item.dates}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;