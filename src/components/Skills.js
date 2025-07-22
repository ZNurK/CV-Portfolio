// src/components/Skills.js
import React, { useState } from 'react';
import './Skills.css'; // Skills için CSS dosyası

const Skills = ({ content }) => {
  // Her kategori için detayların gösterilip gösterilmediğini tutacak state'ler
  const [showProgrammingDetails, setShowProgrammingDetails] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [showCertificationsDetails, setShowCertificationsDetails] = useState(false);
  const [showLanguagesDetails, setShowLanguagesDetails] = useState(false); // Diller için state

  return (
    <section id="skills" className="skills-section">
      <h2>{content.skillsTitle}</h2> {/* Başlık için content.skillsTitle kullanıldı */}

      <div className="skills-container">

        {/* Programming Skills */}
        <div className="skill-category">
          <h3
            className="category-toggle" // CSS için sınıf
            onClick={() => setShowProgrammingDetails(!showProgrammingDetails)}
          >
            {content.programmingSkillsTitle}
            {/* İkon Font Awesome'dan gelecek, yukarı/aşağı ok */}
            <i className={`fas fa-chevron-${showProgrammingDetails ? 'up' : 'down'} toggle-icon`}></i>
          </h3>
          {/* Buradaki div'e 'open' sınıfını ekliyoruz */}
          <div className={`accordion-content ${showProgrammingDetails ? 'open' : ''}`}>
            <ul>
              {content.programmingSkills.map((skill, index) => (
                <li key={`prog-${index}`}>
                  <span className="skill-name">{skill.name}</span> {/* Sadece adını göster */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skill-category">
          <h3
            className="category-toggle"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
          >
            {content.technicalSkillsTitle}
            <i className={`fas fa-chevron-${showTechnicalDetails ? 'up' : 'down'} toggle-icon`}></i>
          </h3>
          <div className={`accordion-content ${showTechnicalDetails ? 'open' : ''}`}>
            <ul>
              {content.technicalSkills.map((skill, index) => (
                <li key={`tech-${index}`}>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="skill-category">
          <h3
            className="category-toggle"
            onClick={() => setShowCertificationsDetails(!showCertificationsDetails)}
          >
            {content.certificationsTitle}
            <i className={`fas fa-chevron-${showCertificationsDetails ? 'up' : 'down'} toggle-icon`}></i>
          </h3>
          <div className={`accordion-content ${showCertificationsDetails ? 'open' : ''}`}>
            <ul>
              {content.certifications.map((cert, index) => (
                <li key={`cert-${index}`}>
                  <span className="skill-name">{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-category">
          <h3
            className="category-toggle"
            onClick={() => setShowLanguagesDetails(!showLanguagesDetails)}
          >
            {content.languagesTitle} {/* Diller başlığı */}
            <i className={`fas fa-chevron-${showLanguagesDetails ? 'up' : 'down'} toggle-icon`}></i>
          </h3>
          <div className={`accordion-content ${showLanguagesDetails ? 'open' : ''}`}>
            <ul>
              {content.languages.map((lang, index) => (
                <li key={`lang-${index}`}>
                  <span className="skill-name">{lang.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div> {/* .skills-container */}
    </section>
  );
};

export default Skills;