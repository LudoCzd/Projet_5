import React from "react";
import logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Slideshow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import "./Logement.scss";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Error404 from "./Error404";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404 />;
  }
  return (
    <div className="logementContent">
      <div>
        <Slideshow pictures={logement.pictures} />
      </div>
      <div className="logementContent__header">
        <div className="logementContent__header--left">
          <div className="logementContent__header--left__title">
            <h1>{logement.title} </h1>
            <p>{logement.location}</p>
          </div>
          <Tag
            tag={logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          />
        </div>
        <div className="logementContent__header--right">
          <Host name={logement.host.name} photo={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="collapseLogement">
        <Collapse title="Description" children={logement.description} />
        <Collapse
          title="Équipements"
          children={
            <ul>
              {logement.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
