import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import '../styles/main.css';

const MentionsLegales = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page non indexée'; 

    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      document.title = previousTitle; 
      document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Éditeur du site</Accordion.Header>
        <Accordion.Body>
          <p>
            <strong>John Doe</strong><br />
            40 Rue Laure Diebold<br />
            69009 Lyon, France<br />
            06 20 30 40 50<br />
            john.doe@gmail.com
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
          <p>
            <strong>Always Data</strong><br />
            91 rue Faubourg Saint Honoré<br />
            75 Paris<br />
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <p>
            Site développé par John Doe, un étudiant du CEF.<br />
            Les images libres de droit sont issues du site{' '}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MentionsLegales;
