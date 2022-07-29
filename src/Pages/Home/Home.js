import React from "react";
import { Movies } from "../../Components/Movies/Movies";
import { SliderComponent } from "../../Components/Slider/Slider";
import { Viewers } from "../../Components/Viewers/Viewers";
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