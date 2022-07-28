import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  bottom: 0;
  right: 0;
  z-index: -1;

  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;

  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);

  border: none;
  padding: 0px 24px;
  margin-right: 22px;

  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;

  span { 
    margin-left: 10px
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 50%;

  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const GroupWatchButton = styled(AddButton)`
  color: white;
  font-size: 28px;
`;

export const SubTitle = styled.div`
  color: white;
  font-size:  16px;

  min-height: 20px;
  margin-top: 26px;
`;

export const Description = styled.div`
  color: white;
  font-size:  20px;

  line-height: 1.4;
  margin-top: 16px;
`;