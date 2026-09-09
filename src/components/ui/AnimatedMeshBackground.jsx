import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * AnimatedMeshBackground
 * Continuous, smooth ambient mesh gradient with floating blurred orbs
 * over the warm pearl sand base (#F7F5F0).
 */
export default function AnimatedMeshBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#F7F5F0]"
      aria-hidden="true"
    >
      {/* Orb 1: Cobalt Blue Glow (Top Left / Center) */}
      <div
        className={`absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full blur-[130px] opacity-70 ${
          reducedMotion ? '' : 'animate-mesh-1'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.02) 70%, transparent 100%)',
        }}
      />

      {/* Orb 2: Warm Pearl & Amber Glow (Top Right) */}
      <div
        className={`absolute top-[5%] -right-[10%] w-[580px] h-[580px] rounded-full blur-[140px] opacity-65 ${
          reducedMotion ? '' : 'animate-mesh-2'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.10) 0%, rgba(245, 158, 11, 0.02) 70%, transparent 100%)',
        }}
      />

      {/* Orb 3: Tech Violet / Lavender Glow (Mid Center / Right) */}
      <div
        className={`absolute top-[45%] left-[25%] w-[620px] h-[620px] rounded-full blur-[150px] opacity-60 ${
          reducedMotion ? '' : 'animate-mesh-3'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(139, 92, 246, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Orb 4: Executive Sage / Emerald (Bottom Left) */}
      <div
        className={`absolute -bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-55 ${
          reducedMotion ? '' : 'animate-mesh-1'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.07) 0%, rgba(16, 185, 129, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Orb 5: Soft Cobalt Anchor (Bottom Right) */}
      <div
        className={`absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-60 ${
          reducedMotion ? '' : 'animate-mesh-2'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.09) 0%, rgba(59, 130, 246, 0.01) 70%, transparent 100%)',
        }}
      />

      {/* Ultra-fine micro tactile grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
