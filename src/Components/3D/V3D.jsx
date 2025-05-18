
import React, { useEffect, useRef } from "react";
import { CameraControls, Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { use3DResponsive } from '../../hooks/use3DResponsive';

const V3D = () => {
  const controls = useRef();
  const { v3dConfig, cameraConfig } = use3DResponsive();

  // Mueve la cámara al iniciar con configuración responsiva
  useEffect(() => {
    if (controls.current) {
      controls.current.dolly(-cameraConfig.dolly);
      controls.current.dolly(cameraConfig.dolly, true);
    }
  }, [cameraConfig]);

  return (
    <group position={v3dConfig.groupPosition}>
      <CameraControls ref={controls} />
      <OrbitControls />

      {/* Letra "V" */}
      <Text
        font={"/fonts/Poppins-ExtraBold.ttf"}
        fontSize={v3dConfig.vFontSize}
        position={v3dConfig.vPosition}
        anchorX="center"
        anchorY="middle"
      >
        V
        <meshBasicMaterial color="#ffff" />
      </Text>

      {/* Asterisco debajo de la "V" */}
      <Text
        font={"/fonts/Poppins-ExtraBold.ttf"}
        fontSize={v3dConfig.asteriskFontSize}
        position={v3dConfig.asteriskPosition}
        anchorX="center"
        anchorY="middle"
      >
        *
        <meshBasicMaterial color="#ffff" />
      </Text>

      {/* Resto de la palabra "OKATIVA" */}
      <Text
        font={"/fonts/Poppins-ExtraBold.ttf"}
        fontSize={v3dConfig.okativaFontSize}
        position={v3dConfig.okativaPosition}
        anchorX="left"
        anchorY="middle"
      >
        OKATIVA
        <meshBasicMaterial color="#ffff" />
      </Text>
    </group>
  );
};

export default V3D;