'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, SectionHeading } from '@/components/motion/primitives';
import { testimonials } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setI((p) => (p + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <>
      <SectionSeparator />
      <Section id="testimonials" className="py-28 sm:py-36 md:py-44">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <SectionHeading
            index="07"
            eyebrow="Testimonials"
            title="In their words."
            align="center"
          />

          <div className="relative mt-16 sm:mt-20">
            {/* Large quotation mark */}
            <BlurReveal>
              <Quote className="mx-auto h-12 w-12 text-white/15" />
            </BlurReveal>

            <div className="relative mt-8 min-h-[260px] sm:min-h-[240px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: dir * -40, filter: 'blur(8px)' }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0 flex flex-col items-center text-center"
                >
                  <p className="max-w-3xl text-balance text-xl font-light leading-relaxed text-white/85 sm:text-2xl md:text-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-1">
                    <span className="text-base font-medium text-white">
                      {t.name}
                    </span>
                    <span className="text-sm text-white/45">{t.title}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDir(idx > i ? 1 : -1);
                      setI(idx);
                    }}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: idx === i ? 24 : 6,
                      backgroundColor:
                        idx === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
