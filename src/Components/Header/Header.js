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
          <FiHome color="grey" />
          <span>HOME</span>
        </a>
        <a href="/">
          <FiSearch color="grey" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <FiPlus color="grey" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <FiAward color="grey" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <FiVideo color="grey" />
          <span>MOVEIS</span>
        </a>
        <a href="/">
          <FiTv color="grey" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src={user} />
    </Nav>
  )
};