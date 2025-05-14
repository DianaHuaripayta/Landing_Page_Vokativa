import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundAnimation() {
  const mountRef = useRef(null);
  const scrollY = useRef(0);
  const rectangles = useRef([]);

  useEffect(() => {
    // Configuración inicial de Three.js
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Crear escena, cámara y renderizador
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0c0016'); // Fondo oscuro como en la imagen
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    
    // Crear rectángulos para imitar el diseño
    const createRectangles = () => {
      // Colores similares a los de la imagen
      const colors = [
        '#c836ba', // Rosa fuerte
        '#a048d9', // Púrpura medio
        '#b428a3', // Rosa medio
        '#7737a8'  // Púrpura oscuro
      ];
      
      const rectangle = new THREE.BoxGeometry(0.4, 0.1, 0.1);
      
      // Crear varios rectángulos distribuidos en forma de círculo
      for (let i = 0; i < 150; i++) {
        const radius = 5 + Math.random() * 8;
        const angle = Math.random() * Math.PI * 2;
        
        const material = new THREE.MeshBasicMaterial({ 
          color: colors[Math.floor(Math.random() * colors.length)],
          transparent: true,
          opacity: 0.8
        });
        
        const mesh = new THREE.Mesh(rectangle, material);
        
        // Posicionar en círculo con algo de variación
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.y = Math.sin(angle) * radius;
        mesh.position.z = Math.random() * -3;
        
        // Rotar para que se vean como en la imagen
        mesh.rotation.z = angle + Math.PI/2;
        
        // Añadir un poco de inclinación
        mesh.rotation.x = Math.random() * 0.3;
        mesh.rotation.y = Math.random() * 0.3;
        
        // Guardar para la animación
        rectangles.current.push({
          mesh,
          baseX: mesh.position.x,
          baseY: mesh.position.y,
          angleSpeed: 0.002 + Math.random() * 0.005,
          angle: Math.random() * Math.PI * 2
        });
        
        scene.add(mesh);
      }
    };
    
    createRectangles();
    
    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animar rectángulos
      rectangles.current.forEach((rect) => {
        // Mover basado en el scroll
        const scrollFactor = scrollY.current * 0.0005;
        rect.angle += rect.angleSpeed;
        
        // Movimiento ondulante
        rect.mesh.position.x = rect.baseX + Math.sin(rect.angle + scrollFactor) * 0.3;
        rect.mesh.position.y = rect.baseY + Math.cos(rect.angle + scrollFactor) * 0.3;
        
        // Efecto de rotación sutil al hacer scroll
        rect.mesh.rotation.z += 0.001 * Math.sin(scrollFactor);
      });
      
      renderer.render(scene, camera);
    };
    
    // Manejar eventos de scroll
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    // Manejar redimensionamiento de ventana
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    animate();
    
    // Limpieza al desmontar
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      scene.dispose();
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10" ref={mountRef}>
      {/* El canvas de Three.js se montará aquí */}
    </div>
  );
}