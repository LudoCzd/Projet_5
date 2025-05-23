import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__title">{title}</div>
    </Link>
  );
}

export default Card;
