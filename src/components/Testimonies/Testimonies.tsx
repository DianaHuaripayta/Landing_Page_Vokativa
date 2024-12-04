import { Container } from "./styles";
import Slider from "react-slick";
import Maria from "../../assets/MariaGomez.jpg";
import Luis from "../../assets/luis.jpg";
import Camila from "../../assets/camila.jpg";
import Ana from "../../assets/ana.jpg";
import Fernando from "../../assets/fernando.jpg";
export function Testimonies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024, // Hasta 1024px de ancho
          settings: {
            slidesToShow: 2, // Muestra 2 elementos por vez
          },
        },
        {
          breakpoint: 600, // Hasta 600px de ancho
          settings: {
            slidesToShow: 1, // Muestra 1 elemento por vez
          },
        },
      ],
  };
  return (
    <Container id="Testimonies">
      <header>
        <h2>Testimonios</h2>
      </header>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider">
            <h3> María Gómez </h3>
            <p>
              “Gracias a Vokativa, descubrí mi verdadera pasión por la
              Ingeniería Civil. Participar en sus talleres me permitió
              experimentar cómo sería mi día a día en esta carrera, y ahora
              estoy segura de que elegí el camino correcto. ¡Recomiendo Vokativa
              a todos los que aún tienen dudas!”
            </p>

            <div className="content-avatar">
              <img src={Maria} alt="maria" className="avatar" />
            </div>
          </div>
          <div className="slider">
            <h3>Luis Torres </h3>
            <p>
              “Siempre tuve interés en ayudar a las personas, pero no estaba
              seguro de qué carrera elegir. Con los talleres de Vokativa, tuve
              la oportunidad de explorar Psicología y comprender su impacto.
              Ahora estoy más motivado que nunca para estudiar y alcanzar mis
              metas.”
            </p>

            <div className="content-avatar">
              <img src={Luis} alt="maria" className="avatar" />
            </div>
          </div>
          <div className="slider">
            <h3>Camila Rojas</h3>
            <p>
              “Me sentía completamente perdida al terminar el colegio, pero
              Vokativa me dio claridad. Sus actividades me ayudaron a vivir la
              experiencia de la carrera antes de tomar una decisión. Ahora
              estudio Comunicación Social y estoy feliz con mi elección.”
            </p>

            <div className="content-avatar">
              <img src={Camila} alt="maria" className="avatar" />
            </div>
          </div>
          <div className="slider">
            <h3>Ana López</h3>
            <p>
              “Siempre me apasionó el diseño, pero no estaba segura si
              Arquitectura era para mí. Con Vokativa, pude trabajar en un
              proyecto real y entender el compromiso que requiere. Hoy, estudio
              Arquitectura con mucha más confianza y entusiasmo.”
            </p>

            <div className="content-avatar">
              <img src={Ana} alt="maria" className="avatar" />
            </div>
          </div>
          <div className="slider">
            <h3>Fernando Castillo</h3>
            <p>
              “La idea de estudiar Medicina me asustaba, pero los talleres de
              Vokativa me ayudaron a entender cómo es realmente esta carrera.
              Ahora tengo una visión clara y una decisión sólida. Es una
              experiencia que recomiendo a cualquiera que dude sobre su futuro.”
            </p>

            <div className="content-avatar">
              <img src={Fernando} alt="maria" className="avatar" />
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
}
