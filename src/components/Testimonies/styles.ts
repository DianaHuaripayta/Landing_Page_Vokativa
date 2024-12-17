import styled from "styled-components";
const colors = {
  blue: "var(--blue)",
  white: "var(--white)",
  black: "var(--black)",
};
export const Container = styled.section`
  margin-top: 10rem;

  /* Encabezado */
  header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }
  }

  /* Contenedor del slider */
  .slider-container {
    width: 90%;
    margin: 0 auto;

    /* Ajusta el espaciado de los sliders */
    .slider {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem 1rem;

      h3 {
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
        color:  ${colors.white};
      }

      p {
        font-size: 1.4rem;
        max-width: 60ch;
        margin: 0 auto 1rem;
        color:  ${colors.white};
      }

      /* Imagen centrada */
      .content-avatar {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;

        .avatar {
          border-radius: 50%;
          height: 120px;
          width: 120px;
          object-fit: cover;
        }
      }
    }
  }

  /* Estilos para los dots */
  .slick-dots {
    bottom: -20px;
  }

  .slick-dots li button:before {
    color: var(--green);
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }

  /* Botones del slider */
  .slick-prev,
  .slick-next {
    z-index: 2;
    color: var(--green);
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: var(--green);
  }

  /* Responsividad */
  @media (max-width: 1024px) {
    header h2 {
      font-size: 3rem;
    }

    .slider-container .slider {
      p {
        font-size: 1.2rem;
      }

      .content-avatar .avatar {
        height: 100px;
        width: 100px;
      }
    }
  }

  @media (max-width: 768px) {
    header h2 {
      font-size: 2.5rem;
    }

    .slider-container .slider {
      p {
        font-size: 1rem;
        width: 90%;
      }

      .content-avatar .avatar {
        height: 90px;
        width: 90px;
      }
    }
  }

  @media (max-width: 480px) {
    header h2 {
      font-size: 2rem;
    }

    .slider-container .slider {
      p {
        font-size: 0.9rem;
        width: 100%;
      }

      .content-avatar .avatar {
        height: 80px;
        width: 80px;
      }
    }
  }
`;