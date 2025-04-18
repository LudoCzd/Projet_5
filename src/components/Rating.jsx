import React from "react";
import etoileVide from "../assets/images/etoileVide.png";
import etoilePleine from "../assets/images/etoilePleine.png";
import "./Rating.scss";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? etoilePleine : etoileVide}
          alt="Note"
        />
      ))}
    </div>
  );
}

export default Rating;
