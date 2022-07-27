import React from "react";
import { SliderComponent } from "../../components/Slider/Slider";
import { Viewers } from "../../components/Viewers/Viewers";
import { Container } from "./styles";

export const Home = () => {
  return(
    <Container>
      <SliderComponent />
      <Viewers />
    </Container>
  )
}