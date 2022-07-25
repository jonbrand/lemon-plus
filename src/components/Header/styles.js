import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  background: #2B2245;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const NavMenu = styled.div` 
  display: flex;
  flex: 1;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    text-decoration: none;
    color: #c0c0c0;
    cursor: pointer;

    span {
      margin-left: 8px;
      font-size: 14px;
      letter-spacing: 1.42px;

      font-weight: 500;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #FFF;

        position: absolute;
        left: 0;
        right: 0;

        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  

`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;