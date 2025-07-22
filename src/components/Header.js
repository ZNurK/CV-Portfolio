// src/components/Header.js

import React from 'react';
import './Header.css';
import LanguageToggle from './LanguageToggle';
import logo from '../assets/z.png'; // Logonuzu import ettiğinizden emin olun

const Header = ({ content, toggleLanguage, language }) => {
  return (
    <header className="header">
      <div className="logo"> {/* Bu div'i bulun */}
        <a href="#home"> {/* Logoya tıklayınca ana sayfaya gitsin */}
          <img src={logo} alt="Zeynep Nur Karabay Logo" className="logo-image" />
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">{content.home}</a></li>
          <li><a href="#experience">{content.experienceTitle}</a></li> {/* Experience bağlantısı eklendi */}
          <li><a href="#skills">{content.skills}</a></li>
          <li><a href="#projects">{content.projects}</a></li>
          <li><a href="#contact">{content.contact}</a></li>
        </ul>
      </nav>
      {/* Diğer kısımlar (sosyal linkler, dil değiştirme, connect butonu) aynı kalacak */}
      <div className="social-links">
       <a href="https://www.linkedin.com/in/zeynep-nur-karabay-b5303a2b6/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
       <a href="https://github.com/ZNurK" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
      <LanguageToggle toggleLanguage={toggleLanguage} language={language} />
      <a href="#contact" className="connect-button">{content.letConnect}</a>
    </header>
  );
};

export default Header;