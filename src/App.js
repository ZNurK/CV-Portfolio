import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Önceki FlowingBackground'u kaldır
// import FlowingBackground from './components/FlowingBackground';

// Yerine yeni partikül + flowing gradient bileşenini ekle
import ParticleFlowBackground from './components/ParticleFlowBackground';

import './App.css';

import contentENG from './content/contentENG';
import contentTR from './content/contentTR';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'tr' : 'en'));
  };

  const currentContent = language === 'en' ? contentENG : contentTR;

  return (
    <div className="App">
      {/* Arka plan efekti */}
      <ParticleFlowBackground />

      {/* Ana içerik */}
      <div className="content-wrapper">
        <Header content={currentContent} toggleLanguage={toggleLanguage} language={language} />
        <HeroSection content={currentContent} />
        <Experience content={currentContent} />
        <Skills content={currentContent} />
        <Projects content={currentContent} />
        <Contact content={currentContent} />
        <Footer content={currentContent} />
      </div>
    </div>
  );
}

export default App;
