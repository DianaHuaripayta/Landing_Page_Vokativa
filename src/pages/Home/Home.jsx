import React from "react";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import ImmersiveExperience from "../../sections/immersiveExperience/ImmersiveExperience";
import Info from "../../sections/info/info";
import OurGraduates from "../../sections/ourGraduates/OurGraduates";
import OurWorkshop from "../../sections/OurWorkshop/OurWorkshop";
import Impact from "../../sections/impact/Impact";
import ImpactMessage from "../../sections/impactMessage/ImpactMessage";
const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="immersive">
        <ImmersiveExperience />
      </div>
      <div id="info">
        <Info />
      </div>
      <div id="graduates">
        <OurGraduates />
      </div>
      <div id="workshop">
        <OurWorkshop />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <div id="impactMessage">
        <ImpactMessage />
      </div>
    </>
  );
};
export default Home;
