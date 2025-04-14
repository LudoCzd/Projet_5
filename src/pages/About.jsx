import React from "react";
import Banner from "../components/Banner";
import imageSource from "../assets/images/imageSource2.png";

function About() {
  return (
    <div>
      <Banner image={imageSource} opacite={0.2} />
    </div>
  );
}

export default About;
