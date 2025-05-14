import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import styles from "./SpringyBoxes.module.css";

import * as THREE from "three";

const length = 14;
const colors = ["#A3D8FF", "#FDFFC2", "#FFC6C6", "#FFC7ED"];
const colorsWords = ["#0A97B0", "#EC7FA9"];
const words = [
  "Curiosidad", "Enfoque", "Alegría", "Pasión", "Tecnología",
  "Vocación", "Motivación", "Creatividad", "Innovación", "Energía"
];

const SpringyBoxes = () => {
  const { viewport } = useThree();
  const boxesRef = useRef([]);

  const data = Array.from({ length }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * viewport.width * 1.5,
      (Math.random() - 0.5) * viewport.height * 1.5,
      (Math.random() - 0.5) * 10
    ],
    scale: [2.5, 3, 0.2], // 🔹 Tamaño del post-it
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 10)],
    color: colors[i % colors.length],
    text: words[i % words.length],
    textColor: colorsWords[i % colorsWords.length]
  }));

  useFrame(({ clock }) => {
    boxesRef.current.forEach((box, index) => {
      if (box) {
        const time = clock.getElapsedTime() + index * 0.2;
        box.position.y += Math.sin(time * 2) * 0.2;
        box.rotation.z = Math.sin(time) * Math.PI * 0.02;
      }
    });
  });

  return (
    <group>
      <ambientLight intensity={1} />
      {data.map((props, index) => (
        <group key={index} position={props.position} ref={(el) => (boxesRef.current[index] = el)}>
          {/* 🔹 Cubo */}
          <mesh scale={props.scale} rotation={props.rotation}>
            <boxGeometry args={[2, 1.6, 1]} />
            <meshBasicMaterial color={props.color} />
          </mesh>

          {/* 🔹 Texto dentro del cubo, desplazado un poco a la izquierda */}
          <Html position={[-1, 0.4, 0]} distanceFactor={8}>
            <div 
              className={styles.content} 
              style={{ 
                color: props.textColor, 
                textAlign: "center", 
              }}
            >
              {props.text}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
};

export default SpringyBoxes;