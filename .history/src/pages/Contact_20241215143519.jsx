import React from 'react';
import '../styles/main.css';
import placeIcon from '../images/place.png';
import phoneIcon from '../images/phone.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>ME CONTACTER</h1>
        <div className="contact-text">
          <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
          </p>
        </div>
        <div className="contact-content">
  <div className="contact-form">
    <h2>Formulaire de contact</h2>
    <form>
      <input type="text" id="name" name="name" placeholder="Votre nom" required />
      <input type="email" id="email" name="email" placeholder="Votre adresse email" required />
      <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" required />
      <input type="text" id="subject" name="subject" placeholder="Sujet" required />
      <textarea id="message" name="message" placeholder="Votre message" required></textarea>
      <div className="contact-submit">
      <button type="submit">Envoyer</button>
      </div>
    </form>
  </div>

          <div className="contact-map">
            <h2>Mes coordonnées</h2>
            <p>
              <img src={placeIcon} alt="Place Icon" className="icon" />
              40 Rue Laure Dieold, 69009 Lyon, France
            </p>
            <p>
              <img src={phoneIcon} alt="Phone Icon" className="icon" />
              06 20 30 40 50
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.2643691636833!2d4.808452315726991!3d45.7797688204986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c0e6a9a84c1b%3A0xa374d3e95c8e6e17!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1699363494869!5m2!1sen!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
