'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax on mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 25, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 40, damping: 25, mass: 0.5 });

  const titleX = useTransform(sx, [-1, 1], [-12, 12]);
  const titleY = useTransform(sy, [-1, 1], [-8, 8]);
  const subX = useTransform(sx, [-1, 1], [6, -6]);
  const glowX = useTransform(sx, [-1, 1], [-30, 30]);
  const glowY = useTransform(sy, [-1, 1], [-20, 20]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx);
      my.set((e.clientY - cy) / cy);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 sm:px-10"
    >
      {/* Ambient glow behind title */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[50vh] w-[80vw] max-w-4xl -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)',
          }}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md sm:mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/55 sm:text-xs">
            Available for select work
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={item}
          style={{ x: titleX, y: titleY }}
          className="select-none text-balance font-sans text-[18vw] font-semibold leading-[0.92] tracking-[-0.04em] sm:text-[15vw] md:text-[13vw] lg:text-[11.5vw] xl:text-[10.5vw]"
        >
          <span className="block bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            MUHAMMAD
          </span>
          <span className="block bg-gradient-to-b from-white/80 via-white/70 to-white/30 bg-clip-text text-transparent">
            RIZO
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          variants={item}
          style={{ x: subX }}
          className="mt-9 flex flex-col items-center sm:mt-12"
        >
          <div className="flex items-center gap-3 text-white/90">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/80 sm:text-base">
              Frontend Developer
            </span>
            <span className="h-px w-8 bg-white/30" />
          </div>

          <p className="mt-5 max-w-md text-balance text-base font-light leading-relaxed text-white/55 sm:mt-6 sm:max-w-lg sm:text-lg">
            Creating premium digital experiences — where motion, detail, and
            craft converge into something unforgettable.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.5)] sm:px-8"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] sm:px-8"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
