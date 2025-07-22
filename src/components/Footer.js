import React from 'react';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <p>{content.footerText}</p>
      {/* İsterseniz sosyal medya ikonlarını tekrar ekleyebilirsiniz */}
    </footer>
  );
};

export default Footer;