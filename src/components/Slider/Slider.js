import React from 'react';
import { Carousel, Wrap } from "./styles";
import image01 from "../../images/image01.png";
import image02 from "../../images/image02.png";
import image03 from "../../images/image03.png";
import image04 from "../../images/image04.png";

export const SliderComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return(
    <Carousel {...settings}>
      <Wrap>
        <img src={image01} alt="Imagem de fundo" />
      </Wrap>
      <Wrap>
        <img src={image02} alt="Imagem de fundo" />
      </Wrap>
      <Wrap>
        <img src={image03} alt="Imagem de fundo" />
      </Wrap>
      <Wrap>
        <img src={image04} alt="Imagem de fundo" />
      </Wrap>
    </Carousel>
  )
}