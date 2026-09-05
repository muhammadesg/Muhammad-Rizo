'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Only enable on devices with a fine pointer
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = !!t.closest(
        'a, button, [data-cursor], input, textarea, [role="button"]',
      );
      setHovering(interactive);
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      rx += (dx - rx) * 0.16;
      ry += (dy - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ transition: 'width 0.25s, height 0.25s' }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border border-white/40"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering ? 'rgba(255,255,255,0.06)' : 'transparent',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
        }}
      />
    </div>
  );
}
