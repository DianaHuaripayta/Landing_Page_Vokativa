import styles from './ImpactMessage.module.css';
import React from 'react'
import impactMessageImg from '../../assets/img/impactMessageBg.png';
import logo from '../../assets/img/brand_01.png';
const ImpactMessage = () => {
  return (
    <section className={styles.impactMessage_section}>
    <div className={styles.overlay}>
      <img className={styles.impactMessageBg} src={impactMessageImg} alt="impactMessageImg" />
      <h1>Estamos cambiando la forma en <br /> cómo los estudiantes eligen su carrera</h1>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  </section>
  );
};

export default ImpactMessage;
