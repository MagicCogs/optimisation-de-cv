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
      <p><strong>Retrouvez ici quelques articles sur le développement web.</strong></p>

      <div className="blog-grid">
        <div className="blog-card">
          <img src={article1} alt="Article 1" className="project-image" />
          <h2><strong>De la création traditionnelle de sites web à l’efficacité moderne avec Bootstrap</strong></h2>
          <p>Article parlant de HTML, CSS, JavaScript et de Bootstrap.</p>
          <a href="https://applize.io/blog/de-la-creation-traditionnelle-de-sites-web-a-lefficacite-moderne-avec-bootstrap/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 2 janvier 2024</div>
        </div>

        <div className="blog-card">
          <img src={article2} alt="Article 2" className="project-image" />
          <h2><strong>Build Web applications with HTML 5</strong></h2>
          <p>Article parlant de la construction d'une application web avec le HTML5.</p>
          <a href="https://developer.ibm.com/articles/wa-html5webapp/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 14 juin 2010</div>
        </div>

        <div className="blog-card">
          <img src={article3} alt="Article 3" className="project-image" />
          <h2><strong>Les enjeux du développement autour de React JS et React Native</strong></h2>
          <p>Article pésentant le framework React JS.</p>
          <a href="https://www.business-digital.org/logiciels/les-enjeux-du-developpement-autour-de-react-js-et-react-native/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 19 janvier 2024</div>
        </div>

        <div className="blog-card">
          <img src={article4} alt="Article 4" className="project-image" />
          <h2><strong>Qu'est-ce qu'un préprocesseur CSS (SCSS) et comment l'utiliser ?</strong></h2>
          <p>Article LinkedIn expliquant ce qu'est un préprocésseur CSS et parlant du SCSS.</p>
          <a href="https://www.linkedin.com/pulse/quest-ce-quun-pr%C3%A9processeur-css-scss-et-comment-eric-venturino/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 3 juillet 2023</div>
        </div>

        <div className="blog-card">
          <img src={article5} alt="Article 5" className="project-image" />
          <h2><strong>Vue JS : comprendre le framework Javascript qui vous veut du bien !</strong></h2>
          <p>Article présentant le framework VueJS.</p>
          <a href="https://www.axopen.com/blog/2021/06/vuejs-comprendre-le-framework-javascript/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 30 juin 2021</div>
        </div>

        <div className="blog-card">
          <img src={article6} alt="Article 6" className="project-image" />
          <h2><strong>Figma : L’outil incontournable des webdesigners et des développeurs</strong></h2>
          <p>Court article présentant l'outil de prototypage et de design à interface collaborative Figma.</p>
          <a href="https://www.ideematic.com/actualites/2023/08/figma-outil-webdesigners-developpeurs/" target="_blank" rel="noopener noreferrer" className="blog-card-button">Lire la suite</a>
          <div className="date-publication">Publié le 1 août 2023</div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
