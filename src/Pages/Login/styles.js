import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  img {
    height:100%;
    width: 100%;
    position: absolute;
    top:0;

    left: 0;
    bottom: 0;
    right: 0;

    z-index: -1;
    object-fit: cover;
    opacity: 0.3;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;

  font-family: 'Poppins', sans-serif;
  margin-top: 250px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: white;

  font-family: 'Poppins', sans-serif;
`;

export const SignUp = styled.a`
  width: 350px;
  background-color: #0063E5;
  font-weight: bold;

  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;

  text-align: center;
  font-size: 18px;
  cursor: pointer;

  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;

  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

export const Description = styled.p`
  color: var(--green);
  font-family: 'Oswald', sans-serif;
`;

