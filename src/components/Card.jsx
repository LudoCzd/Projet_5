import React from "react";
import "./Card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__title">{title} </div>
    </div>
  );
}

export default Card;
