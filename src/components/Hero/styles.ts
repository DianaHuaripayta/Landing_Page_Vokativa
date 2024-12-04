import styled from "styled-components";
export const Container = styled.section`
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .slider-container {

    width: 100%;
    max-width: 280vw; /* Ajusta según tus necesidades */
    margin: auto;
    overflow: hidden;

    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh; /* Ajusta según tus necesidades */

    }

    .slick-dots {
      position: absolute;
      bottom: 10px; /* Ajusta según necesites */
      display: flex !important;
      justify-content: center;
      gap: 8px;
      list-style: none;
      border-radius: 10px;
      padding: 10px;
    }
    .slick-dots li button:before {
      font-size: 12px;
      color:var(--black); 
      opacity: 1; /* Hazlos visibles */
    }

    .slick-dots li.slick-active button:before {
      color: var(--green);
      transform: scale(2.1); /* Hazlos más grandes si están activos */
}
    img{
      height:100%;
      weight:100%;
      object-fit:cover;
    }
  }
 
.title{
  font-size: 5em;
  font-weight: bold;
}
.sub-title{
  font-size: 1.8rem;
  font-weight:500;
}
  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    font-weight:500;
    font-size: 1.8rem;
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .title{
  font-size: 2em;
  font-weight: bold;
}
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`