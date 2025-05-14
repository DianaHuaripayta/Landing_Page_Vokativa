import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import brandVk from "../../assets/img/letters_vk.png";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // cuando se hace scroll más de 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // limpiar
  }, []);
  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.left}>
        <img src={brandVk} alt="brand_vk" width={168} height={40} />
      </div>
      <nav className={styles.nav}>
        {/* <a href="#work" className={styles.active}>Quiénes somos</a>
          <a href="#work" className={styles.active}>Programas</a>
          <a href="#contact">Contáctanos</a> */}
        <MenuIcon  fontSize="large"  className={`${styles.icon} ${scrolled ? styles.iconScrolled : ''}`}/>
      </nav>
    </header>
  );
};

export default Header;