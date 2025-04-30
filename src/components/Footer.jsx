import React from "react";
import "./Footer.scss";
import LogoFooter from "../assets/images/logoFooter.svg";

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo Kasa" />
      <p>
        © 2020 Kasa. All
        <br className="responsiveRetour" /> rights reserved
      </p>
    </footer>
  );
}

export default Footer;
