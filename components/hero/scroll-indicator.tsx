'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from '@/lib/lenis';

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.04], [0, 24]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 sm:bottom-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2, ease: EASE }}
        className="flex flex-col items-center gap-3"
      >
        <div className="relative h-9 w-5 rounded-full border border-white/20">
          <motion.span
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/80"
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: EASE,
              times: [0, 0.5, 1],
            }}
          />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
          Scroll to Explore
        </span>
      </motion.div>
    </motion.div>
  );
}
