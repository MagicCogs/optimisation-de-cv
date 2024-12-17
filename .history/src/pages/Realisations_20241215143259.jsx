import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import projectImage1 from '../images/project1.png';
import projectImage2 from '../images/project2.png';
import projectImage3 from '../images/project3.png';
import underheaderImage from '../images/technologywaves.png';

const Realisations = () => (

  <div>
    {/* Bande d'image sous le header */}
    <div className="underheader-image"></div>

    <div className="realisations-container">
    <h1 className="realisations-title">PORTFOLIO</h1>
    <p><strong>Voici quelques-unes de mes réalisations.</strong></p>
    
    <div className="realisations-grid">
      <div className="realisations-card">
        <img src={projectImage1} alt="Réalisation 1" className="realisations-image" />
        <h3>Fresh Food</h3>
        <p>Réalisation d'un site avec commande en ligne.</p>
        <button className="btn btn-primary">Voir</button>
        <div className="under-button">
          <p>Site réalisé avec PHP et MySQL</p>
        </div>
      </div>

      <div className="realisations-card">
        <img src={projectImage2} alt="Réalisation 2" className="realisations-image" />
        <h3>Restaurant Akira</h3>
        <p>Réalisation d'un site vitrine.</p>
        <button className="btn btn-primary">Voir</button>
        <div className="under-button">
          <p>Site réallisé avec WordPress</p>
        </div>
      </div>

      <div className="realisations-card">
        <img src={projectImage3} alt="Réalisation 3" className="realisations-image" />
        <h3>Espace bien-être</h3>
        <p>Réalisation d'un site vitrine pour un patricien de bien-être.</p>
        <button className="btn btn-primary">Voir</button>
        <div className="under-button">
          <p>Site réallisé en HTML/CSS</p>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Realisations;