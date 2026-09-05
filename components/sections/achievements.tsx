'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, MaskReveal, SectionHeading } from '@/components/motion/primitives';
import { achievements, awards } from '@/lib/content';

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
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
    <span ref={ref}>
      {n}
      <span className="text-white/30">{suffix}</span>
    </span>
  );
}

export default function Achievements() {
  return (
    <>
      <SectionSeparator />
      <Section id="achievements" className="py-28 sm:py-36 md:py-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="06"
            eyebrow="Achievements"
            title={
              <>
                Numbers, certificates,
                <br />
                and recognition.
              </>
            }
          />

          {/* Animated numbers */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-20 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <BlurReveal key={a.label} delay={i * 0.1} y={24}>
                <div className="flex h-full flex-col justify-center bg-[#0a0a0a] p-8 text-center sm:p-10">
                  <span className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
                    <AnimatedNumber value={a.value} suffix={a.suffix} />
                  </span>
                  <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    {a.label}
                  </span>
                </div>
              </BlurReveal>
            ))}
          </div>

          {/* Awards list */}
          <div className="mt-14 space-y-0">
            {awards.map((a, i) => (
              <BlurReveal key={a.title} delay={i * 0.06} y={16}>
                <div className="group flex items-center justify-between gap-4 border-t border-white/10 py-6 transition-colors duration-300 last:border-b hover:bg-white/[0.02]">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs text-white/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white/85 transition-colors group-hover:text-white sm:text-xl">
                        {a.title}
                      </h3>
                      <span className="text-sm text-white/40">{a.org}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm text-white/30">{a.year}</span>
                </div>
              </BlurReveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
