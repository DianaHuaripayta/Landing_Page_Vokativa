import styled from "styled-components";

// Variables de estilo reutilizables
const colors = {
  blue: "var(--blue)",
  green: "var(--green)",
  black: "var(--black)",
};

const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "960px",
};

export const Container = styled.section`
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  background: transparent;

  .title {
    font-size: 5em;
    font-weight: bold;
  }

  .sub-title {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    font-weight: 500;
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media (max-width: ${sizes.desktop}) {
    .title {
      font-size: 2em;
    }
  }

  @media (max-width: ${sizes.mobile}) {
    margin-top: 35%;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .slick-arrow {
    z-index: 1;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 30px;
    }
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin: 2em 0;
    list-style-type: none;

    li {
      margin: 0 0.25rem;

      button {
        width: 2rem;
        height: 2rem;
        padding: 0;
        border: none;
        border-radius: 100%;
        /* background-color: #b2adadd9;
        border: 3px solid #000000a6; */

        &:before {
          font-size: 12px;
          color: ${colors.black};
          opacity: 1;
        }
      }

      &.slick-active button {
        background-color: ${colors.green};
      }
    }
  }

  @media (max-width: ${sizes.tablet}) {
    max-width: 90%;
  }

  @media (max-width: ${sizes.mobile}) {
    max-width: 100%;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 20%;

  img {
    width: 100%;
    max-width: 100%;
    /* height: 42em; */
    border-radius: 10px;
    object-fit: contain;
  }
`;
