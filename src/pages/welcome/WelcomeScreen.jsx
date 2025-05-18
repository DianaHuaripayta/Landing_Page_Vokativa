import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import V3D from "../../components/3D/V3D";
import Slogan3D from "../../components/3D/Slogan3D";
import SpringyBoxes from "../../Components/3D/SpringyBoxes/SpringyBoxes";
import styles from "./Welcome.module.css";

function WelcomeScreen() {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [hideWelcome, setHideWelcome] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
      const hideTimer = setTimeout(() => {
        setHideWelcome(true);
          navigate("/home");
      }, 2000);
      return () => clearTimeout(hideTimer);
    }, 4000);

    const boxTimer = setTimeout(() => {
      setShowBoxes(true);
      const hideBoxTimer = setTimeout(() => {
        setShowBoxes(false);
      }, 3000);
      return () => clearTimeout(hideBoxTimer);
    }, 3000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(boxTimer);
    };
  }, [navigate]);

  return (
    <div className={styles.canvas_container}>
      <Canvas shadows camera={{ position: [0, 0, 80], fov: 10 }}>
        <V3D />
        <Slogan3D />
        {showBoxes && <SpringyBoxes />}
      </Canvas>
      {showWelcome && !hideWelcome && (
        <div className={`${styles.welcome_screen} ${styles.fade_in_out}`}>
          <h1 className={styles.paragraph}>¡Bienvenido a la experiencia VOKATIVA!</h1>
        </div>
      )}
    </div>
  );
}

export default WelcomeScreen;