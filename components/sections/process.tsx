'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, SectionHeading } from '@/components/motion/primitives';
import { processSteps } from '@/lib/content';

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal translate driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-78%']);
  const progressW = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <SectionSeparator />
      <Section id="process" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="05"
            eyebrow="Process"
            title={
              <>
                How the work
                <br />
                comes to life.
              </>
            }
          />
        </div>

        {/* Horizontal scroll track */}
        <div ref={trackRef} className="relative mt-16 h-[260vh] sm:mt-20">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-6 px-6 sm:px-10">
              {processSteps.map((p, i) => (
                <div
                  key={p.step}
                  className="relative flex h-[60vh] w-[78vw] shrink-0 flex-col justify-center sm:w-[46vw] md:w-[34vw] lg:w-[26vw]"
                >
                  <BlurReveal y={30}>
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                      <div className="pointer-events-none absolute inset-0 opacity-50">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
                      </div>
                      <span className="text-7xl font-semibold tracking-[-0.04em] text-white/8 sm:text-8xl">
                        {p.step}
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/50">
                        {p.description}
                      </p>
                      {i < processSteps.length - 1 && (
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-white/15 to-transparent" />
                      )}
                    </div>
                  </BlurReveal>
                </div>
              ))}
            </motion.div>

            {/* Progress bar */}
            <div className="absolute bottom-16 left-6 h-px w-[calc(100%-3rem)] overflow-hidden rounded-full bg-white/10 sm:left-10 sm:w-[calc(100%-5rem)]">
              <motion.div
                style={{ width: progressW }}
                className="h-full bg-gradient-to-r from-white/40 to-white"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
