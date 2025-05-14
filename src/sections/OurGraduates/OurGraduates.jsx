import style from './OurGraduates.module.css';
import diego from '../../assets/img/Diego.png';
import andrea from '../../assets/img/Andrea.png';
import franco from '../../assets/img/Franco.png';
const graduates = [
  {
    name: 'Diego',
    age: 16,
    school: 'Colegio Estatal',
    quote:
      'Fue una experiencia nueva en donde aprendí en poco tiempo de qué realmente se trata el desarrollo de software.',
    image: diego,
    borderColor: '#ff3dbd',
  },
  {
    name: 'Andrea',
    age: 16,
    school: 'Colegio Particular',
    quote:
      'Me gustó mucho el taller porque pude aclarar muchas dudas respecto a las carreras de tecnología.',
    image: andrea,
    borderColor: '#ffa800',
  },
  {
    name: 'Franco',
    age: 17,
    school: 'Colegio Estatal',
    quote:
      'Pude validar mi decisión de estudiar tecnología gracias a los proyectos que pude desarrollar.',
    image: franco,
    borderColor: '#ff3dbd',
  },
];

const OurGraduates = () => {
  return (
    <section className={style.graduates_section}>
      <h2 className={style.graduates_title}>Nuestros egresados</h2>
      <div className={style.graduates_container}>
        {graduates.map((g, idx) => (
          <div key={idx} className={style.graduate_card}>
            <div
              className={style.graduate_img}
              style={{ borderColor: g.borderColor }}
            >
              <img src={g.image} alt={g.name} />
            </div>
            <p className={style.graduate_quote}>“{g.quote}”</p>
            <p className={style.graduate_name} style={{ color: g.borderColor }}>
              {g.name}, {g.age} años
            </p>
            <p className={style.graduate_school}>{g.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurGraduates;
