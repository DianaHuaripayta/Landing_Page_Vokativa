import styles from './Hero.module.css';
import heroVideo from '../../assets/videos/initialVideo.mp4';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const Hero = () => {
    return (
      <section className={styles.hero}>
        <video autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>¿Y si pudieras vivir una carrera <span className={styles.span}>tecnológica </span> antes de elegirla?</h1>
        <p className={styles.paragraph}>En <strong>Vokativa</strong>  te damos más que información, te hacemos vivir con experiencias reales tu futura carrera profesional en <strong>Tech</strong>.</p>
        <div className={styles.buttonContainer}>
        <ArrowCircleDownIcon className={styles.icon} fontSize="large" />
          <button>Quiero vivir la experiencia</button>
        </div>
      </div>
      </section>
    );
    };
  
  export default Hero;