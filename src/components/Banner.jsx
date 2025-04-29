import React from "react";
import "./Banner.scss";

function Banner({ texte, image, opacite, className }) {
  return (
    <div
      className={`banner ${className ? className : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="overlay"
        style={{ backgroundColor: "black", opacity: `${opacite}` }}
      ></div>
      <h1 className="titreBanner">{texte}</h1>
    </div>
  );
}

export default Banner;
