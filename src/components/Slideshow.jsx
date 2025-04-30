import React from "react";
import { useState } from "react";
import flechePrec from "../assets/images/flechePrec.png";
import flecheSuiv from "../assets/images/flecheSuiv.png";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  function imageSuiv() {
    setCurrent((suiv) => (suiv === pictures.length - 1 ? 0 : suiv + 1));
  }
  function imagePrec() {
    setCurrent((prec) => (prec === 0 ? pictures.length - 1 : prec - 1));
  }

  return (
    <div className="slideContent">
      <div className="imagesLogement">
        <div>
          <img
            src={pictures[current]}
            className="imagePrincipale"
            alt={`Photo ${current + 1} sur ${pictures.length}`}
          />
        </div>
        {pictures.length > 1 && (
          <>
            <div>
              <img
                src={flechePrec}
                alt="Image précédente"
                className="fleche fleche--gauche"
                onClick={imagePrec}
              />
            </div>
            <div>
              <img
                src={flecheSuiv}
                alt="Image suivante"
                className="fleche fleche--droite"
                onClick={imageSuiv}
              />
            </div>
            <div className="currentImage">
              {current + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Slideshow;
