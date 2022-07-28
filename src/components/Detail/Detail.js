import React from "react";
import { 
  Container, 
  Background, 
  ImageTitle, 
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupWatchButton,
  SubTitle,
  Description,
} from "./styles";
import { FaPlay } from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';
import { TiGroup } from 'react-icons/ti';
import image05 from "../../images/image05.jpg";
import image06 from "../../images/image06.png";

export const Detail = () => {
  return (
    <Container>
      <Background>
        <img src={image05} alt="Homem caminhado para fora do seu carro" />
      </Background>
      <ImageTitle>
        <img src={image06} alt="Logo escrito de volta para o futuro" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <FaPlay />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <FaPlay />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <IoAddOutline size="21px" color="white"/>
        </AddButton>
        <GroupWatchButton>
          <TiGroup />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        1985 • 116 min • Ficção Científica, Aventura
      </SubTitle>
      <Description>
        Um jovem (Michael J. Fox) aciona acidentalmente uma máquina do tempo 
        construída por um cientista (Christopher Lloyd) em um Delorean, retornando 
        aos anos 50. Lá conhece sua mãe (Lea Thompson), antes ainda do casamento 
        com seu pai, que fica apaixonada por ele. Tal paixão põe em risco sua própria 
        existência, pois alteraria todo o futuro, forçando-o a servir de cupido entre 
        seus pais.
      </Description>
    </Container>
  )
}