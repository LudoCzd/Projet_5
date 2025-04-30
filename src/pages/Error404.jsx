import React from "react";
import "./Error404.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div className="pageError">
        <h1 className="titreError">404</h1>
        <h2 className="messageError">
          Oups! La page que <br className="responsiveRetour" />
          vous demandez n'existe pas.
        </h2>
        <Link className="pageErrorToHome" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error404;
