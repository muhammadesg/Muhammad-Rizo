'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 30, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30, mass: 0.6 });

  const glowX = useTransform(springX, [0, 1], ['-20%', '20%']);
  const glowY = useTransform(springY, [0, 1], ['-20%', '20%']);

  const layer1X = useTransform(springX, [0, 1], ['-3%', '3%']);
  const layer1Y = useTransform(springY, [0, 1], ['-3%', '3%']);
  const layer2X = useTransform(springX, [0, 1], ['4%', '-4%']);
  const layer2Y = useTransform(springY, [0, 1], ['4%', '-4%']);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX / window.innerWidth);
        mouseY.set(e.clientY / window.innerHeight);
      });
    };
    window.addEventListener('mousemove', handle);
    return () => {
      window.removeEventListener('mousemove', handle);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Ambient slow-moving gradients */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute left-[-20%] top-[-20%] h-[80vh] w-[80vh] rounded-full opacity-[0.55]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)',
            animation: 'ambient-1 22s ease-in-out infinite',
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute right-[-15%] bottom-[-15%] h-[70vh] w-[70vh] rounded-full opacity-[0.5]"
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
            animation: 'ambient-2 26s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Cursor-following light */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 65%)',
          }}
        />
      </motion.div>

      {/* Subtle top vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0) 70%, rgba(5,5,5,0.85) 100%)',
        }}
      />
    </div>
  );
}
