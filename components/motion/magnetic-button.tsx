'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { EASE } from '@/components/motion/primitives';

export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
  strength = 0.35,
}: {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 sm:px-8';
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.5)]'
      : 'border border-white/15 bg-white/[0.03] text-white/85 backdrop-blur-md hover:border-white/30 hover:bg-white/[0.07]';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

export function MagneticWrap({
  children,
  strength = 0.3,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      transition={{ duration: 0.5, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
