import React from "react";
import "../styles/header.css";
import logo from "../assets/img/logoHestia.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
    </div>
  );
};

export default Header;
