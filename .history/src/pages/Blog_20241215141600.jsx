// src/pages/Blog.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import article1 from '../images/article1.png'; 
import article2 from '../images/article2.png'; 
import article3 from '../images/article3.png'; 
import article4 from '../images/article4.png'; 
import article5 from '../images/article5.png'; 
import article6 from '../images/article6.png'; 

const Blog = () => (
  <div>
    <div className="underheader-image"></div>
    <div className="blog-container">
      <h1 className="blog-title">BLOG</h1>
      <p><strong>Retrouvez ici quelques articles sur le dévloppement web.</strong></p>

      <div className="blog-grid">
        <div className="blog-card">
          <img src={article1} alt="Article 1" className="project-image" />
          <h2><strong>Coder son site en HTML/CSS</strong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 22 août 2022</div>
        </div>

        <div className="blog-card">
          <img src={article2} alt="Article 2" className="project-image" />
          <h2><strong>Vendre ses produits sur le web</strong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 20 août 2022</div>
        </div>

        <div className="blog-card">
          <img src={article3} alt="Article 3" className="project-image" />
          <h2><stong>Se positionner sur Google</stong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 1 août 2022</div>
        </div>

        <div className="blog-card">
          <img src={article4} alt="Article 4" className="project-image" />
          <h2><strong>Coder en responsive design</strong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 31 juillet 2022</div>
        </div>

        <div className="blog-card">
          <img src={article5} alt="Article 5" className="project-image" />
          <h2><stong>Techniques de référencement</stong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 30 juillet 2022</div>
        </div>

        <div className="blog-card">
          <img src={article6} alt="Article 6" className="project-image" />
          <h2><strong>Apprendre à coder</strong></h2>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="blog-card-button">Lire la suite</button>
          <div className="date-publication">Publié le 12 juillet 2022</div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
