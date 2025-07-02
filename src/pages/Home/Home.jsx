import React, { useState, useEffect } from "react";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import ImmersiveExperience from "../../sections/immersiveExperience/ImmersiveExperience";
import Info from "../../sections/info/info";
import OurGraduates from "../../sections/ourGraduates/OurGraduates";
import OurWorkshop from "../../sections/OurWorkshop/OurWorkshop";
import Impact from "../../sections/impact/Impact";
import ImpactMessage from "../../sections/impactMessage/ImpactMessage";
import CustomizedDialogs from "../../Components/modals/CustomizedDialogs";
import formImage from "../../assets/posts/form.jpeg"; // Import the image

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const handleShowModal = () => {
    setModalText("");
    setModalOpen(true);
  };
  useEffect(() => {
    handleShowModal();
  }, []);
  return (
    <>
      <CustomizedDialogs
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalText}
        url={formImage}
        btnCloseText="Ir a formulario de inscripción"
          redirectUrl="https://docs.google.com/forms/d/e/1FAIpQLSdmDVQpcDWuM-EksIMDIfXAfH1atw7WP7gwfN9UU1KeOwkMyA/viewform" // Si no quieres redirigir, pasa null o no pongas esta prop

      />
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
