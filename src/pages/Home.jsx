import React from "react";
import Banner from "../components/Banner";
import imageSource from "../assets/images/imageSource1.png";

function Home() {
  return (
    <div>
      <Banner
        image={imageSource}
        texte="Chez vous, partout et ailleurs"
        opacite={0.3}
      />
    </div>
  );
}

export default Home;
