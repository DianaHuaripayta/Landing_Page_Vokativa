import { useState, useEffect } from 'react';
import styles from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/letters_vk.png';
import logowhite from '../../assets/img/letters_vk_white.png';
const Header = () => {
 const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Cerramos el menú
      setMenuOpen(false);
      
      // Calculamos la posición para compensar el header
      // Usamos un valor fijo si no podemos obtener la altura del header
      const headerElement = document.querySelector('.header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 70; // valor por defecto
      
      // Agregamos un pequeño retraso para asegurar que el menú se cierre primero
      setTimeout(() => {
        const sectionPosition = section.offsetTop - headerHeight;
        
        // Realizamos el scroll suave
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para evitar el scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);
  
  return (
   <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.logoContainer}>
          <div className={ `${styles.logo} ${scrolled ? '': styles.bgLogo}`}>
            <a href="#home" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
              {scrolled ? <img src={logo} alt="Logo" /> : <img src={logowhite} alt="Logo" /> }
            </a>
          </div>
        </div>
        <button 
          className={`${styles.menuToggle} ${scrolled ? styles.iconScrolled : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </header>
      
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.open : ''}`}>
        <nav className={styles.menuContainer}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('hero')} className={styles.menuLink}>Inicio</button>

            </li>
            <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('about')} className={styles.menuLink}>Sobre mí</button>
            </li>
            <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('immersive')} className={styles.menuLink}>Experiencia</button>
            </li>
            <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('info')} className={styles.menuLink}>Info</button>
            </li>
               <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('graduates')} className={styles.menuLink}>Graduados</button>
            </li>
               <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('workshop')} className={styles.menuLink}>Talleres</button>
            </li>
               <li className={styles.menuItem}>
              <button onClick={() => scrollToSection('impact')} className={styles.menuLink}>Impacto</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;