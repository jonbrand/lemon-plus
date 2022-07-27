import React from "react";
import { Movies } from "../../components/Movies/Movies";
import { SliderComponent } from "../../components/Slider/Slider";
import { Viewers } from "../../components/Viewers/Viewers";
import { Container } from "./styles";

export const Home = () => {
  return(
    <Container>
      <SliderComponent />
      <Viewers />
      <Movies />
    </Container>
  )
}