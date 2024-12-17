// src/pages/Accueil.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/main.css';

const Accueil = () => (
<div className="accueil">
<div className="accueil-content">
    <h1>Bonjour, je suis John Doe</h1>
    <h2>Développeur web full stack</h2>
    <Link to="/apropos" className="btn-apropos">
      En savoir plus
    </Link>
  </div>
</div>
);

export default Accueil;