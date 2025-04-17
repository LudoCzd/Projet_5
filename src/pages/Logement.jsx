import React from "react";
import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Slideshow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import "./Logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <div className="logementContent">
      <div>
        <Slideshow pictures={logement.pictures} />
      </div>
      <div className="logementContent-header">
        <h1>{logement.title} </h1>
        <p>{logement.location}</p>
        <Tag
          tag={logement.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        />
      </div>
      <div className="collapseLogement">
        <Collapse title="Description" texte={logement.description} />
        <Collapse
          title="Équipements"
          texte={logement.equipments.map((equipement) => (
            <li>{equipement}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
