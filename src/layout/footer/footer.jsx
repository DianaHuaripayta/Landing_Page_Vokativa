import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>

        <div className={styles.footer_brand}>
          <h2>Vokativa</h2>
          <p>Transformando la educación con tecnología. Enseñamos programación e inteligencia artificial a jóvenes para que vivan de su vocación.</p>
        </div>

        <nav className={styles.footer_links} aria-label="Redes sociales">
          <h3>Síguenos</h3>
          <ul>
            <li><a href="https://www.instagram.com/vokativa.la/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@vokativa" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.linkedin.com/company/vokativa-oficial?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </nav>

        <div className={styles.footer_contact}>
          <h3>Contacto</h3>
          <p>Escríbenos a <a href="mailto:info@vokativa.com">info@vokativa.com</a></p>
        </div>

      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; {new Date().getFullYear()} Vokativa. Todos los derechos reservados.</p>
        <p className={styles.footer_signature}>
          Diseñado y desarrollado por <a href="https://www.linkedin.com/company/elabora-tech" target="_blank" rel="noopener noreferrer">Elaboratech</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;