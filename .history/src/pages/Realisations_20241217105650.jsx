import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import projectImage1 from '../images/project1.png';
import projectImage2 from '../images/project2.png';
import projectImage3 from '../images/project3.png';

const Realisations = () => (
  <div>
    <div className="underheader-image"></div>

    <div className="realisations-container">
      <h1 className="realisations-title">PORTFOLIO</h1>
      <p><strong>Voici quelques-unes de mes réalisations.</strong></p>
      
      <div className="realisations-grid">
        <div className="realisations-card">
          <img src={projectImage1} alt="Réalisation 1" className="realisations-image" />
          <h3>La Socketterie</h3>
          <p>Réalisation d'un cahier des charges pour un site avec commandes en ligne.</p>
          <a href="https://drive.google.com/file/d/1LzFOPNCmNX3OPEA6Zj2a1fpjuhFq7tk6/view?pli=1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Voir
          </a>
          <div className="under-button">
            <p>PDF d'un cahier des charges réalisé avec Word</p>
          </div>
        </div>

        <div className="realisations-card">
          <img src={projectImage2} alt="Réalisation 2" className="realisations-image" />
          <h3>Dynamisme d'un espace de commentaires</h3>
          <p>Repository GitHub d'une réalisation du code JavaScript d'un espace de commentaires.</p>
          <a href="https://github.com/MagicCogs/DynamiserUnEspaceDeCommentaires" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Voir
          </a>
          <div className="under-button">
            <p>Partie JavaScript réalisée avec Visual Studio Code</p>
          </div>
        </div>

        <div className="realisations-card">
          <img src={projectImage3} alt="Réalisation 3" className="realisations-image" />
          <h3>Maquettes d'un site e-commerce</h3>
          <p>Réalisation de maquettes desktop et mobile de site e-commerce avec Figma.</p>
          <a href="https://github.com/MagicCogs/Maquettes-Probeat" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Voir
          </a>
          <div className="under-button">
            <p>Repository GitHub d'une maquette réalisée avec Figma</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Realisations;
