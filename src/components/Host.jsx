import React from "react";
import "./Host.scss";

function Host({ name, photo }) {
  return (
    <div className="profilHost">
      <p>{name}</p>
      <img src={photo} alt={`Profil de ${name}`} />
    </div>
  );
}

export default Host;
