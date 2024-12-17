import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import profileImage from '../images/profile.jpg'; 

const Apropos = () => (
  <div className="apropos-container">
    <div className="apropos-window">
      <div className="apropos-content">
        <div className="apropos-text">
          <h1 className="apropos-title">À propos</h1>
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
            Au cours de cette formation, j'ai pu aquérir des bases solides pour travailler dans le domaine du développement web. <br></br><br></br>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong> <br></br><br></br>
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>
        </div>

        <div className="apropos-skills">
          <img src={profileImage} alt="John Doe" className="apropos-image" />

          <div className="progress-bars">
            <h3>Mes compétences</h3>
            <div className="skill">
              <span>HTML 90%</span>
              <ProgressBar now={90} className="html-bar" />
            </div>
            <div className="skill">
              <span>CSS 80%</span>
              <ProgressBar now={80} className="css-bar" />
            </div>
            <div className="skill">
              <span>JAVASCRIPT 70%</span>
              <ProgressBar now={70} className="javascript-bar" />
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <ProgressBar now={60} className="php-bar" />
            </div>
            <div className="skill">
              <span>REACT 50%</span>
              <ProgressBar now={50} className="react-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Apropos;
