import React from "react";
import "./Banner.scss";

function Banner({ texte, image, opacite }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div
        className="overlay"
        style={{ backgroundColor: "black", opacity: `${opacite}` }}
      ></div>
      <h1>{texte}</h1>
    </div>
  );
}

export default Banner;
