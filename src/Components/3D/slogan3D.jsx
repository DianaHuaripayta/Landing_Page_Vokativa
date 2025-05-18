import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useResponsive } from "../../hooks/useResponsive";
const Slogan3D = () => {
  const fullText = "DESCUBRE, APRENDE Y VIVE TU VOCACIÓN";
  const [displayText, setDisplayText] = useState("");
  const { breakpoint } = useResponsive();
  const typingSpeed = 50;

  // Efecto de escritura
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  // Configuración responsiva más limpia
  const responsiveConfig = {
    mobile: {
      fontSize: 0.3,
      position: [0, -1.5, 0],
      maxWidth: 8,
    },
    tablet: {
      fontSize: 0.45,
      position: [0, -1.2, 0],
      maxWidth: 12,
    },
    laptop: {
      fontSize: 0.6,
      position: [0, -1, 0],
      maxWidth: 16,
    },
    desktop: {
      fontSize: 0.7,
      position: [0, -1, 0],
      maxWidth: 20,
    }
  };

  const config = responsiveConfig[breakpoint];

  return (
    <group position={config.position}>
      <OrbitControls />
      <Text 
        font={"/fonts/Poppins-SemiBold.ttf"} 
        fontSize={config.fontSize}
        maxWidth={config.maxWidth}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {displayText}
        <meshBasicMaterial color="#ffff" />
      </Text>
    </group>
  );
};

export default Slogan3D;