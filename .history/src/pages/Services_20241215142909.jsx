import React from 'react';
import referencementIcon from '../images/referencementicon.png';
import uxdesignIcon from '../images/uxdesignicon.png';
import webdevIcon from '../images/webdevicon.png';

const Services = () => {
  return (
    <div>
    <div className="underheader-image"></div>      
      <div className="services-description">
        <h1>MON OFFRE DE SERVICES</h1>
        <p><strong>
          Voici les prestations sur lesquelles je peux intervenir.
        </strong></p>
      </div>

      <div className="services-list">
        <div className="service-card">
          <div className="icon-card">
            <img src={uxdesignIcon} alt="UX Design Icon" className="icon" />
          </div>
          <h3><strong>UX DESIGN</strong></h3>
          <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offir une expérience de navigation optimale à l'internaute.</p>
        </div>
        <div className="service-card">
          <div className="icon-card">
            <img src={webdevIcon} alt="Web Developpement Icon" className="icon" />
          </div>
          <h3><strong>DÉVELOPPEMENT WEB</strong></h3>
          <p>Le <strong>développement d'un site</strong> web repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.</p>
        </div>
        <div className="service-card">
          <div className="icon-card">
            <img src={referencementIcon} alt="Referencement Icon" className="icon" />
          </div>
          <h3><strong>RÉFÉRENCEMENT</strong></h3>
          <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
