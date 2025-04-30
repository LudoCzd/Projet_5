import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo Kasa" />
      <div className="lien-header">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
