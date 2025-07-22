import React from 'react';
import './LanguageToggle.css'; // Stil dosyasını import et

const LanguageToggle = ({ toggleLanguage, language }) => {
  return (
    <div className="language-toggle">
      <button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')} // toggleLanguage fonksiyonunu çağır
      >
        EN
      </button>
      <button
        className={`lang-button ${language === 'tr' ? 'active' : ''}`}
        onClick={() => toggleLanguage('tr')} // toggleLanguage fonksiyonunu çağır
      >
        TR
      </button>
    </div>
  );
};

export default LanguageToggle;