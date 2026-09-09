import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * AnimatedMeshBackground
 * Continuous, smooth ambient mesh gradient with floating blurred orbs
 * over the warm pearl sand base (#F8F7F4).
 */
export default function AnimatedMeshBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#F8F7F4]"
      aria-hidden="true"
    >
      {/* Orb 1: Cobalt Blue Glow (Top Left / Center) */}
      <div
        className={`absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full blur-[130px] opacity-70 ${
          reducedMotion ? '' : 'animate-mesh-1'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.02) 70%, transparent 100%)',
        }}
      />

      {/* Orb 2: Warm Amber Glow (Top Right) */}
      <div
        className={`absolute top-[5%] -right-[10%] w-[580px] h-[580px] rounded-full blur-[140px] opacity-65 ${
          reducedMotion ? '' : 'animate-mesh-2'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Orb 3: Cobalt Blue Glow (Mid Center / Right) */}
      <div
        className={`absolute top-[45%] left-[25%] w-[620px] h-[620px] rounded-full blur-[150px] opacity-60 ${
          reducedMotion ? '' : 'animate-mesh-3'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Orb 4: Warm Amber Anchor (Bottom Left) */}
      <div
        className={`absolute -bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-55 ${
          reducedMotion ? '' : 'animate-mesh-1'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.06) 0%, rgba(217, 119, 6, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Orb 5: Soft Cobalt Anchor (Bottom Right) */}
      <div
        className={`absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-60 ${
          reducedMotion ? '' : 'animate-mesh-2'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Ultra-fine micro tactile grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#0A1128 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
