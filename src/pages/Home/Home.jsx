import React from "react";
import BackgroundAnimation from "../../Components/BackgroundAnimation";
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
    <Hero/>
    <About/>
    <ImmersiveExperience/>
    <Info/>
    <OurGraduates/>
    <OurWorkshop/>
    <Impact/>
    <ImpactMessage/> 
    {/* 
   
   

   
    
    <ImpactMessage/> */}
        {/* <BackgroundAnimation />  */}
  </>
  );
};
export default Home;
