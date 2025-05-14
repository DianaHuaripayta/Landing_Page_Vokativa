import styles from './ImmersiveExperience.module.css';
import talleres from '../../assets/img/talleres.png';
import mentorias from '../../assets/img/mentorias.png';
import proyectos from '../../assets/img/proyectos.png';
import comunidad from '../../assets/img/comunidad.png';
import pin from '../../assets/img/pin.png';
const items = [
  {
    icon: talleres,
    text: 'Talleres virtuales y presenciales'
  },
  {
    icon: mentorias,
    text: 'Mentorías con profesionales reales'
  },
  {
    icon: proyectos,
    text: 'Proyectos reales de la carrera'
  },
  {
    icon: comunidad,
    text: 'Comunidad de estudiantes como tú'
  }
];

const ImmersiveExperience = () => {
  return (
    <section className={styles.immersiveExperience}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Experiencia inmersiva</h2>
        <img src={pin} alt="Pin" className={styles.pin} />
      </div>
      <div className={styles.features}>
        {items.map((item, index) => (
          <div key={index} className={styles.feature}>
            <img src={item.icon} alt="" className={styles.icon} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImmersiveExperience;