import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Usar requestAnimationFrame para optimizar el rendimiento
    let timeoutId = null;
    const optimizedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", optimizedResize);
    return () => {
      window.removeEventListener("resize", optimizedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Función helper para obtener breakpoints
  const getBreakpoint = () => {
    const { width } = screenSize;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    if (width <= 1024) return 'laptop';
    return 'desktop';
  };

  return {
    screenSize,
    breakpoint: getBreakpoint(),
    isMobile: screenSize.width <= 480,
    isTablet: screenSize.width > 480 && screenSize.width <= 768,
    isLaptop: screenSize.width > 768 && screenSize.width <= 1024,
    isDesktop: screenSize.width > 1024,
  };
};