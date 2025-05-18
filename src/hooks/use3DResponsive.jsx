import { useMemo } from 'react';
import { useResponsive } from './useResponsive';

export const use3DResponsive = () => {
  const { breakpoint, screenSize } = useResponsive();

  // Configuraciones específicas para componentes 3D memoizadas
  const v3dConfig = useMemo(() => {
    const configs = {
      mobile: {
        groupPosition: [0, 0.5, 0],
        vFontSize: 0.8,
        vPosition: [-2.3, 0.1, 0],
        asteriskFontSize: 0.5,
        asteriskPosition: [-2.3, -0.4, 0],
        okativaFontSize: 1,
        okativaPosition: [-2, 0, 0],
      },
      tablet: {
        groupPosition: [0.5, 1, 0],
        vFontSize: 1.2,
        vPosition: [-3.6, 0.1, 0],
        asteriskFontSize: 0.7,
        asteriskPosition: [-3.6 , -0.8, 0],
        okativaFontSize: 1.5,
        okativaPosition: [-3.2, 0, 0],
      },
      laptop: {
        groupPosition: [0.8, 1.3, 0],
        vFontSize: 1.4,
        vPosition: [-4.5, 0.1, 0],
        asteriskFontSize: 0.8,
        asteriskPosition: [-4.5, -0.9, 0],
        okativaFontSize: 1.8,
        okativaPosition: [-4, 0, 0],
      },
      desktop: {
        groupPosition: [1, 1.5, 0],
        vFontSize: 1.6,
        vPosition: [-5.9, 0.1, 0],
        asteriskFontSize: 1,
        asteriskPosition: [-5.9, -1, 0],
        okativaFontSize: 2,
        okativaPosition: [-5.2, 0, 0],
      }
    };
    
    return configs[breakpoint];
  }, [breakpoint]);

  const sloganConfig = useMemo(() => {
    const configs = {
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
    
    return configs[breakpoint];
  }, [breakpoint]);

  // Función para ajuste dinámico basado en aspect ratio memoizada
  const cameraConfig = useMemo(() => {
    const aspectRatio = screenSize.width / screenSize.height;
    
    if (aspectRatio < 0.75) {
      // Pantalla muy vertical (móvil en modo portrait)
      return { dolly: 60, position: [0, 0, 5] };
    } else if (aspectRatio > 1.5) {
      // Pantalla muy horizontal
      return { dolly: 100, position: [0, 0, 8] };
    } else {
      // Proporción normal
      return { dolly: 80, position: [0, 0, 6] };
    }
  }, [screenSize.width, screenSize.height]);

  return {
    v3dConfig,
    sloganConfig,
    cameraConfig,
    breakpoint,
    screenSize,
  };
};