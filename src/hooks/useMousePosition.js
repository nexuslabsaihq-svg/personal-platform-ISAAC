import { useEffect, useRef, useState } from 'react';

/**
 * Tracks mouse position. If a ref is passed, returns position relative
 * to that element. Otherwise returns absolute window position.
 * Returns { x, y } normalized to [-1, 1] range for ease of use in animations.
 */
export function useMousePosition(elementRef = null) {
  const [position, setPosition] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setPosition({ x, y, rawX: e.clientX, rawY: e.clientY });
      } else {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setPosition({ x, y, rawX: e.clientX, rawY: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [elementRef]);

  return position;
}
