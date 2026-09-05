'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, MaskReveal, SectionHeading } from '@/components/motion/primitives';
import { experiences } from '@/lib/content';

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 40%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div ref={ref} className="relative pl-12 sm:pl-16">
      {/* Connector dot */}
      <motion.div
        style={{ scale: dotScale }}
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-white/30 bg-[#050505]"
      >
        <span className="absolute inset-0.5 rounded-full bg-white/60" />
      </motion.div>

      <motion.div style={{ opacity }}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <MaskReveal>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              {exp.position}
            </h3>
          </MaskReveal>
          <span className="text-sm text-white/40">{exp.period}</span>
        </div>

        <BlurReveal delay={0.1} y={16}>
          <div className="mt-1 flex items-center gap-2 text-sm text-white/50">
            <span className="font-medium text-white/70">{exp.company}</span>
            <span className="text-white/20">·</span>
            <span>{exp.location}</span>
          </div>
        </BlurReveal>

        <BlurReveal delay={0.15} y={16}>
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/55">
            {exp.description}
          </p>
        </BlurReveal>

        <BlurReveal delay={0.2} y={12}>
          <ul className="mt-4 space-y-2">
            {exp.achievements.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 text-sm text-white/45"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </BlurReveal>

        <BlurReveal delay={0.25} y={12}>
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/55"
              >
                {t}
              </span>
            ))}
          </div>
        </BlurReveal>
      </motion.div>

      {index < experiences.length - 1 && (
        <div className="mt-14 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <SectionSeparator />
      <Section id="experience" className="py-28 sm:py-36 md:py-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title={
              <>
                A journey, not
                <br />
                a list of jobs.
              </>
            }
          />

          <div className="relative mt-16 md:mt-24">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-0 h-full w-px bg-gradient-to-b from-white/15 via-white/8 to-transparent sm:left-[7px]" />
            <div className="space-y-0">
              {experiences.map((e, i) => (
                <ExperienceItem key={e.company} exp={e} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
