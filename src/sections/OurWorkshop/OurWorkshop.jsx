import style from './OurWorkshop.module.css';
import vokativaVideo from '../../assets/videos/vokativaVideo.mp4'
const OurWorkshop = () => {
  return (
    <section className={style.ourWorkshop}>
      <p>
        En nuestro taller, más de <strong>60 estudiantes</strong> de secundaria vivieron una
        experiencia real en tecnología. El <strong>85% afirmó que el taller le ayudó a
        entender mejor la carrera</strong> y tomar decisiones más informadas sobre su
        futuro.
      </p>
       <video autoPlay loop muted playsInline>
              <source src={vokativaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    </section>
  );
};

export default OurWorkshop;
