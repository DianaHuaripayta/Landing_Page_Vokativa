import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Slogan3D = () => {
  const fullText = "DESCUBRE, APRENDE Y VIVE TU VOCACIÓN"; // ✅ Texto completo
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 50; // Velocidad de escritura

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1)); // ✅ Agregar solo caracteres válidos
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <group position={[0, -1, 0]}>
      <OrbitControls />
      <Text font={"fonts/Poppins-SemiBold.ttf"} fontSize={0.7}>
        {displayText} {/* 🔹 Texto que aparece progresivamente */}
        <meshBasicMaterial color="#ffff" />
      </Text>
    </group>
  );
};

export default Slogan3D;