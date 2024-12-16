import { useEffect, useState } from "react";
import { CarouselContainer, Container, ContainerImg } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
export function Hero() {
  const  images = [
    {
      url: 'https://i.imgur.com/G2KzKjS_d.webp?maxwidth=1520&fidelity=grand', 
      name :'1'
    },
    {
      url: 'https://i.imgur.com/KXeF9AG.png', 
      name :'2'
    },
    {
      url: 'https://i.imgur.com/jvtNTrB.png', 
      name :'3'
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // Ajuste para tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Ajuste para móviles
        settings: {
          slidesToShow: 1,
          arrows: false, // Ocultar flechas en pantallas pequeñas
        },
      },
    ],
  };

  const handleRedirect = () => {
    const whatsappURL =
      "https://api.whatsapp.com/send/?phone=%2B51977703980&text=Hola+Vokativa+quiero+más+información";
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Container id="home">
    <div>
      <ScrollAnimation animateIn="fadeInLeft" >
        <p className="title">
          Taller "Pre Universitario" para elegir tu futura carrera profesional
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" delay={100}>
        <p className="sub-title">
          Nuestros talleres profesionales te brindarán un panorama completo
          sobre la carrera profesional que deseas estudiar.
        </p>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        delay={200}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <button className="button" onClick={handleRedirect}>
          Quiero Inscribirme
        </button>
      </ScrollAnimation>
    </div>
    <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ContainerImg key={index}>
            <img src={image.url} alt={`${image.name} image ${index + 1}`} />
          </ContainerImg>
        ))}
      </Slider>
    </CarouselContainer>
    </ScrollAnimation>
  
  </Container>
  );
}
