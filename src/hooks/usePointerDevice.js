import { useEffect, useState } from 'react';

/**
 * Returns true if the primary pointer is fine (mouse/trackpad).
 * Returns false for touch/coarse pointer devices.
 * Used to conditionally enable cursor effects, magnetic buttons, and tilt animations.
 */
export function usePointerDevice() {
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const handler = (e) => setIsFinePointer(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isFinePointer;
}
