import styles from './Info.module.css';
import backgroundInfo from '../../assets/videos/backgroundInfo.mp4';
const Info = () => {
  return (
    <section className={styles.info_section}>
         <video autoPlay loop muted playsInline>
                <source src={backgroundInfo} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
      <div className={styles.info_overlay}>
        <div className={styles.info_content}>
          <h2>
            Taller de inmersión profesional de <br />
            Tecnología y Sistemas <span role="img" aria-label="tech">👨‍💻</span>
          </h2>
          <p>
            Aprende qué hace un profesional tech, crea tu primer proyecto web, <br />
            y descubre si esta carrera se alinea con tu vocación.
          </p>
          <button className={styles.info_button}>Postula al taller ahora</button>
        </div>
        <div className={styles.arrow_decoration} />
      </div>
    </section>
  );
};

export default Info;
