import React, { useEffect, useRef} from "react";
import { CameraControls, Text } from "@react-three/drei";
import { VideoTexture } from "three";
import { OrbitControls } from "@react-three/drei";

const V3D = () => {
  const controls = useRef();
  // 🔹 Mueve la cámara al iniciar
  useEffect(() => {
    if (controls.current) {
      controls.current.dolly(-80);
      controls.current.dolly(80, true);
    }
  }, []);


  return (
    <group position={[1, 1.5, 0]}>
      <CameraControls ref={controls} />
      <OrbitControls />

      {/* 🔹 Letra "V" */}
      <Text
        font={"fonts/Poppins-ExtraBold.ttf"}
        fontSize={1.6}
        position={[-5.9, 0.1, 0]}
      >
        V
        <meshBasicMaterial color="#ffff" /> {/* 🔹 Color oscuro */}
      </Text>

      {/* 🔹 Asterisco debajo de la "V" */}
      <Text
        font={"fonts/Poppins-ExtraBold.ttf"}
        fontSize={1}
        position={[-5.9, -1, 0]}
      >
        *
        <meshBasicMaterial color="#ffff" />
      </Text>

      {/* 🔹 Resto de la palabra "OKATIVA" */}
      <Text
        font={"fonts/Poppins-ExtraBold.ttf"}
        fontSize={2}
        position={[-0.6, 0, 0]}
      >
        OKATIVA
        <meshBasicMaterial color="#ffff" />
      </Text>
    </group>
  );
};

export default V3D;
