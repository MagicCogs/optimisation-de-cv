import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import githubIcon from '../images/github.png';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';

const Footer = () => {

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Afficher ou cacher le bouton de retour en haut en fonction du défilement
    const handleScroll = () => {
      const scrollTopButton = document.getElementById('scrollTopButton');
      if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block'; // Affiche le bouton si on défile plus de 300px
      } else {
        scrollTopButton.style.display = 'none'; // Cache le bouton si on est en haut de la page
      }
    };

    window.addEventListener('scroll', handleScroll); // Ajoute l'événement de scroll
    return () => {
      window.removeEventListener('scroll', handleScroll); // Nettoyage de l'événement
    };
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <section id="profile">
          <h2>John Doe</h2>
          <p>40 Rue Laure Diebold<br />69009 Lyon, France<br />Téléphone: 06 20 30 40 50</p>
          <a href="https://github.com/MagicCogs" target="_blank" rel="nofollow noreferrer">
            <img src={githubIcon} alt="GitHub Icon" className="icon" />
          </a>
          <a href="https://x.com/home" target="_blank" rel="nofollow noreferrer">
            <img src={twitterIcon} alt="Twitter Icon" className="icon" />
          </a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="nofollow noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
          </a>
        </section>

        <section id="liensutiles">
          <h2>Liens utiles</h2>
          <p><Link to="/">Accueil</Link></p>
          <p><Link to="/about">À propos</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contact">Me contacter</Link></p>
          <p><Link to="/mentions-legales">Mentions Légales</Link></p>
        </section>

        <section id="realisations">
          <h2>Mes dernières réalisations</h2>
          <p><Link to="/projects/fresh-food">Fresh food</Link></p>
          <p><Link to="/projects/akira-restaurant">Restaurant Akira</Link></p>
          <p><Link to="/projects/wellness-space">Espace bien-être</Link></p>
        </section>

        <section id="articles">
          <h2>Mes derniers articles</h2>
          <p><Link to="/blog/html-css">Coder son site en HTML/CSS</Link></p>
          <p><Link to="/blog/sell-online">Vendre ses produits sur le web</Link></p>
          <p><Link to="/blog/seo">Se positionner sur Google</Link></p>
        </section>
      </div>

      <div className="footer-bar">
        <p>© Designed by John Doe</p>
        <button
          id="scrollTopButton"
          className="scroll-top"
          onClick={scrollToTop}
        >
          ↑
        </button>
      </div>

    </footer>
  );
};

export default Footer;
