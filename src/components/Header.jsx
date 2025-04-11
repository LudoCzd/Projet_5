import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <img></img>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
