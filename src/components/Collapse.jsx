import React from "react";
import "./Collapse.scss";
import { useState } from "react";
import fleche from "../assets/images/fleche.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="collapse">
      <div className="collapse__content">
        <h1>{title}</h1>

        <img
          className={`collapse__arrow ${isOpen ? "open" : ""}`}
          src={fleche}
          onClick={handleClick}
        />
      </div>
      <div className={`collapse__text ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
}

export default Collapse;
