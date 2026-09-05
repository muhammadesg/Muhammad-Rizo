'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Blur + rise reveal */
export function BlurReveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Mask wipe reveal (clips from bottom) */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Stagger container + item */
export const Stagger = ({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-12% 0px' }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y, filter: 'blur(8px)' },
      show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.9, ease: EASE },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Section eyebrow + heading block */
export function SectionHeading({
  index,
  eyebrow,
  title,
  align = 'left',
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'flex flex-col items-center text-center'
          : 'flex flex-col items-start text-left'
      }
    >
      <BlurReveal>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-white/30">{index}</span>
          <span className="h-px w-6 bg-white/20" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
            {eyebrow}
          </span>
        </div>
      </BlurReveal>
      <MaskReveal delay={0.1} className="mt-5">
        <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </MaskReveal>
    </div>
  );
}
