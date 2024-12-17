import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="header">
      <h1>JOHN DOE</h1>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/services">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/realisations">
              RÉALISATIONS
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/blog">
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              ME CONTACTER
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
