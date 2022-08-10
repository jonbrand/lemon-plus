import React from 'react';
import { Container, Content, Title, SubTitle, SignUp, Description } from './styles';
import loginBackground from "../../images/login-background02.jpg"

export const Login = () => {
  return (
    <Container>
      <img src={loginBackground} alt="" />
      <Content>
        <Title>
          O Maior acervo dos filmes classicos do Mundo!
        </Title>
        <SubTitle>
          Venha conferir nossos mais de 500 filmes!!!
        </SubTitle>
        <SignUp>
          GET ALL THERE
        </SignUp>
        <Description>
          Escolha o melhor plano para voce e Obtenha entretenimento sem fim com os filmes que você adora.
        </Description>
      </Content>
    </Container>
  )
}