import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  background: var(--purple-dark);
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

  margin-left: 1rem;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    text-decoration: none;
    color: var(--grey-medium);
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
        background: var(--green);

        position: absolute;
        left: 0;
        right: 0;

        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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