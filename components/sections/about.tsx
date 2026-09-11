'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, MaskReveal, SectionHeading } from '@/components/motion/primitives';
import { stats } from '@/lib/content';
import { Myphoto } from '@/assets/images';

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        {n}
        <span className="text-white/40">{suffix}</span>
      </span>
      <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <>
      <SectionSeparator />
      <Section id="about" className="py-28 sm:py-36 md:py-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="01"
            eyebrow="About"
            title={
              <>
                A developer who treats
                <br />
                the web like a canvas.
              </>
            }
          />

          <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-10">
            {/* Portrait */}
            <div className="md:col-span-5">
              <BlurReveal y={40}>
                <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Myphoto.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 to-transparent" />
                  {/* floating tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full glass px-3 py-1.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-medium tracking-wider text-white/70">
                      Tashkent, UZ
                    </span>
                  </motion.div>
                </div>
              </BlurReveal>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center md:col-span-7">
              <MaskReveal>
                <p className="max-w-xl text-balance text-xl font-light leading-relaxed text-white/80 sm:text-2xl">
                  I&apos;m Muhammad Rizo — a frontend developer obsessed with the
                  space where engineering meets emotion.
                </p>
              </MaskReveal>
              <BlurReveal delay={0.15} y={20}>
                <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/50">
                  I create modern websites and digital experiences that combine clean design, smooth interactions, and practical solutions. I enjoy turning ideas into functional products with a focus on performance, usability, and user experience.
                </p>
              </BlurReveal>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <BlurReveal key={s.label} delay={i * 0.1}>
                    <AnimatedStat value={s.value} suffix={s.suffix} label={s.label} />
                  </BlurReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
