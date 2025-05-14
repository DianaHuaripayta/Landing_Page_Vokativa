import styles from './impact.module.css';
import arrow from '../../assets/img/arrow_pink.png'
const Impact = () => {
  return (
    <section className={styles.impact_section}>
        <h1>Nuestro programa de IMPACTO VOKATIVA 🩷</h1>
        <h2>Porque todos merecen la oportunidad de descubrir la tecnología, creamos <strong>talleres gratuitos de iniciación a la programación en alianza con colegios.</strong>  Ya impactamos a +300 estudiantes y vamos por más.</h2>
        <p>¿Quieres apoyar este programa? Escríbenos si eres empresa o institución interesada en impulsar el talento tech desde la escuela.</p>
       <div>
       <button>Quiero llevar este programa a mi colegio</button>
       </div>
       <div className={styles.impact_img}>
        <img src={arrow} alt="arrow" width={400} />
       </div>
    </section>

  );
};

export default Impact;
