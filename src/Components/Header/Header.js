import React from "react";
import { 
  Nav, 
  Logo, 
  NavMenu, 
  UserImage
} from "./styles";
import logo from "../../images/logo.svg";
import user from "../../images/user.jpeg";
import { FiHome, FiSearch, FiPlus, FiAward, FiTv, FiVideo } from 'react-icons/fi';

export const Header = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <a href="/">
          <FiHome color="white" />
          <span>HOME</span>
        </a>
        <a href="/">
          <FiSearch color="white" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <FiPlus color="white" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <FiAward color="white" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <FiVideo color="white" />
          <span>MOVEIS</span>
        </a>
        <a href="/">
          <FiTv color="white" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src={user} />
    </Nav>
  )
};