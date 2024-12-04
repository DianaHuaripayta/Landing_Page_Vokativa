import { useEffect, useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta este valor según tus necesidades
    };

    // Configuración inicial
    handleResize();

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isMobile, // Apaga el autoplay si es móvil
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const handleRedirect = () => {
    const whatsappURL =
      "https://api.whatsapp.com/send/?phone=%2B51977703980&text=Hola+Vokativa+quiero+más+información";
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Container id="home">
      <div>
        <ScrollAnimation animateIn="fadeInLeft">
          <p className="title">
            Taller "Pre Universitario" para elegir tu futura carrera profesional
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p className="sub-title">
            Nuestros talleres profesionales te brindarán un panorama completo
            sobre la carrera profesional que deseas estudiar.
          </p>
        </ScrollAnimation>
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={0.2 * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <button className="button" onClick={handleRedirect}>
              Quiero Inscribirme
            </button>
          </ScrollAnimation>
        </div>
      </div>
      {!isMobile && ( // Condicional para no mostrar el slider en dispositivos móviles
          <div className="slider-container">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
              <Slider {...settings}>
                <div>
                  <img
                    src="https://i.imgur.com/G2KzKjS_d.webp?maxwidth=1520&fidelity=grand"
                    alt="1-img"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/KXeF9AG.png"
                    alt="2-img"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/jvtNTrB.png"
                    alt="3-img"
                  ></img>
                </div>
              </Slider>
            </ScrollAnimation>
          </div>
        )}
    </Container>
  );
}
