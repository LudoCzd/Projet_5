import React from "react";
import Banner from "../components/Banner";
import imageSource from "../assets/images/imageSource1.png";
import logements from "../data/logements.json";
import Card from "../components/Card";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Banner
        image={imageSource}
        opacite={0.6}
        className={"banner__home"}
        texte={
          <>
            Chez vous, <br className="responsiveRetour" /> partout et ailleurs
          </>
        }
      />
      <div className="listCard">
        {logements.map((logement) => (
          <Card
            id={logement.id}
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
