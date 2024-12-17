import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
