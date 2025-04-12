import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo Kasa" />
      <div className="lien-header">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
