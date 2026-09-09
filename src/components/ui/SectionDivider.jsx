import React from 'react';

/**
 * SectionDivider - SVG wave that connects sections visually.
 * Prevents the "stacked blocks" feel between sections.
 * 
 * @param {string} fromColor - Tailwind class or hex color of the section above
 * @param {string} toColor - Tailwind class or hex color of the section below
 * @param {string} variant - 'wave' | 'angle' | 'curve'
 * @param {boolean} flip - Flip the shape horizontally
 */
export default function SectionDivider({
  fromColor = '#0B0E14',
  toColor = '#151A24',
  variant = 'wave',
  flip = false,
  className = '',
}) {
  const shapes = {
    wave: `M0,32 C120,64 240,0 360,32 C480,64 600,0 720,32 C840,64 960,0 1080,32 C1200,64 1320,0 1440,32 L1440,64 L0,64 Z`,
    angle: `M0,64 L1440,0 L1440,64 L0,64 Z`,
    curve: `M0,64 C360,0 1080,64 1440,32 L1440,64 L0,64 Z`,
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: fromColor, height: 64 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path d={shapes[variant]} fill={toColor} />
      </svg>
    </div>
  );
}
