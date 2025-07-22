import React from 'react';
import './Contact.css';

const Contact = ({ content }) => {
  
  

  return (
    <section id="contact" className="contact-section">
      <h2>{content.contactTitle}</h2>
      <form action="https://formspree.io/f/xjkogzel" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{content.contactNameLabel}:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{content.contactEmailLabel}:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">{content.contactMessageLabel}:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" className="submit-button">{content.contactSendButton}</button>
      </form>

      <div className="contact-info-details">
        {content.contactInfo.address && <p><i className="fas fa-map-marker-alt"></i> {content.contactInfo.address}</p>}
        {content.contactInfo.phone && <p><i className="fas fa-phone"></i> {content.contactInfo.phone}</p>}
        {content.contactInfo.email && <p><i className="fas fa-envelope"></i> {content.contactInfo.email}</p>}
      </div>
    </section>
  );
};

export default Contact;