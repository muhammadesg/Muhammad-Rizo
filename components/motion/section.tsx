'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { EASE } from '@/components/motion/primitives';

export default function Section({
  id,
  children,
  className = '',
  parallax = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full ${className}`}
    >
      {parallax ? <motion.div style={{ y }}>{children}</motion.div> : children}
    </section>
  );
}

export function SectionSeparator() {
  return (
    <div className="mx-auto flex max-w-7xl items-center px-6 sm:px-10">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.2, ease: EASE }}
        className="h-px w-full origin-left bg-gradient-to-r from-white/0 via-white/15 to-white/0"
      />
    </div>
  );
}
