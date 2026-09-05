'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  opacity: number;
  duration: number;
  delay: number;
};

const COUNT = 26;

function makeParticle(w: number, h: number): Particle {
  const size = 1 + Math.random() * 2.2;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size,
    dx: (Math.random() - 0.5) * 60,
    dy: -(40 + Math.random() * 140),
    opacity: 0.15 + Math.random() * 0.4,
    duration: 14 + Math.random() * 18,
    delay: -Math.random() * 30,
  };
}

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const particles = Array.from({ length: COUNT }, () => makeParticle(w, h));

    container.innerHTML = '';
    particles.forEach((p) => {
      const el = document.createElement('span');
      el.style.cssText = `
        position: absolute;
        left: ${p.x}px;
        top: ${p.y}px;
        width: ${p.size}px;
        height: ${p.size}px;
        border-radius: 9999px;
        background: rgba(255,255,255,${p.opacity});
        box-shadow: 0 0 ${p.size * 3}px rgba(255,255,255,${p.opacity * 0.6});
        --dx: ${p.dx}px;
        --dy: ${p.dy}px;
        --p-opacity: ${p.opacity};
        animation: drift ${p.duration}s linear ${p.delay}s infinite;
        will-change: transform, opacity;
      `;
      container.appendChild(el);
    });

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2]"
    />
  );
}
