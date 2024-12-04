import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  /* .slider-container {
    width: 80%;
    margin:auto;
} */
/* .slider{

  margin: 0 -27px;


} */
p{
    font-size:1.4em;
    width:20vw;
    margin-bottom:9px;
  }
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
h3{
  margin-bottom:9px;
}
.avatar{
  border-radius: 49%;
    height: 130px;
    width:130px;
    object-fit:cover;
}
.content-avatar{
  margin-left:9em;
}

  .slick-dots {
  bottom: -30px;
}

.slick-dots li button:before {
  color: var(--green);
  font-size: 12px;
}

.slick-dots li.slick-active button:before {
  color: #000;
}

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
/* @media(max-width: 800px){
  p{
    font-size:20px;
  }
  } */
  @media(max-width: 600px){
    p{
    font-size:13px;
    width:100%;
  }
  }
 
`