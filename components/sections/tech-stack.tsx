'use client';

import { motion } from 'framer-motion';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, SectionHeading } from '@/components/motion/primitives';
import { techStack } from '@/lib/content';

export default function TechStack() {
  return (
    <>
      <SectionSeparator />
      <Section id="stack" className="py-28 sm:py-36 md:py-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="04"
            eyebrow="Tech Stack"
            title={
              <>
                Tools, chosen
                <br />
                with intention.
              </>
            }
          />

          <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((cat, i) => (
              <BlurReveal key={cat.category} delay={i * 0.08} y={30}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/20 sm:p-8">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
                      {cat.category}
                    </span>
                    <span className="text-xs text-white/20">0{i + 1}</span>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + j * 0.06,
                          duration: 0.6,
                        }}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BlurReveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
