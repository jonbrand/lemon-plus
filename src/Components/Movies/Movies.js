import React from "react";
import { Container, Content, Wrap } from "./styles";
import film01 from "../../images/film01.jpg";
import film02 from "../../images/film02.jpg";
import film03 from "../../images/film03.jpg";
import film04 from "../../images/film04.jpeg";

export const Movies = () => {
  return (
    <Container>
      <h4>Recomendados para você</h4>
      <Content>
        <Wrap>
          <img src={film01} alt="Imagem de Victor Corleone de terno" />
        </Wrap>
        <Wrap>
          <img src={film02} alt="Imagem de Victor Corleone de terno" />
        </Wrap>
        <Wrap>
          <img src={film03} alt="Imagem de Victor Corleone de terno" />
        </Wrap>
        <Wrap>
          <img src={film04} alt="Imagem de Victor Corleone de terno" />
        </Wrap>
      </Content>
    </Container>
  )
}