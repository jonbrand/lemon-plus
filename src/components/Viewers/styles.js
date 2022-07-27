import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-content: space-between;

  align-items: center;
  margin-top: 50px;
  gap: 10px;
`;

export const Wrap = styled.div`
  background: #2B2D2F;
  height: 175px;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10%;
  font-family: 'Condiment', cursive;
  font-size: 32px;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;