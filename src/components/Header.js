// src/components/Header.js

import React, { useState } from 'react'; // useState hook'unu import edin
import './Header.css';
import LanguageToggle from './LanguageToggle';
import logo from '../assets/z.png'; // Logonuzu import ettiğinizden emin olun

const Header = ({ content, toggleLanguage, language }) => {
  // Menünün açık/kapalı durumunu yönetmek için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hamburger menü ikonuna tıklandığında çağrılacak fonksiyon
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}> {/* menu-open class'ını ekleyin */}
      <div className="logo">
        <a href="#home" onClick={() => setIsMenuOpen(false)}> {/* Menü açıksa, logoya tıklayınca kapansın */}
          <img src={logo} alt="Zeynep Nur Karabay Logo" className="logo-image" />
        </a>
      </div>

      {/* Hamburger menü butonu */}
      <button className="hamburger-menu" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigasyon ve diğer elementler için tek bir kapsayıcı */}
      <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}> {/* Yeni kapsayıcı ve active class'ı */}
        <nav className="navbar">
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{content.home}</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>{content.experienceTitle}</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>{content.skills}</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{content.projects}</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{content.contact}</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/zeynep-nur-karabay-b5303a2b6/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/ZNurK" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}><i className="fab fa-github"></i></a>
        </div>
        <LanguageToggle toggleLanguage={toggleLanguage} language={language} className="language-toggle-mobile" /> {/* Mobil için sınıf eklendi */}
        <a href="#contact" className="connect-button" onClick={() => setIsMenuOpen(false)}>{content.letConnect}</a>
      </div>
    </header>
  );
};

export default Header;