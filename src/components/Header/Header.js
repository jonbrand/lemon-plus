import React from "react";
import { 
  Nav, 
  Logo, 
  NavMenu, 
  HeaderLoginButton
} from "./styles";
import logo from "../../images/logo.svg";
import { FiHome } from 'react-icons/fi';

export const Header = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <a href="/">
          <FiHome />
          <span>HOME</span>
        </a>
        <a href="/">
          <FiHome />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <FiHome />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <FiHome />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <FiHome />
          <span>MOVEIS</span>
        </a>
        <a href="/">
          <FiHome />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <HeaderLoginButton>LOGIN</HeaderLoginButton>
    </Nav>
  )
};