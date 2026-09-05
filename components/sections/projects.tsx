'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, MaskReveal, SectionHeading } from '@/components/motion/primitives';
import { projects } from '@/lib/content';

function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;

  // Tilt with mouse
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 20 });
  const sry = useSpring(ry, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-8, 8]);

  // Parallax image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    rx.set((e.clientY - (r.top + r.height / 2)) / r.height);
    ry.set((e.clientX - (r.left + r.width / 2)) / r.width);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      ref={ref}
      className="relative grid min-h-[88svh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16"
    >
      {/* Image / mockup */}
      <div className={reversed ? 'md:order-2' : ''}>
        <BlurReveal y={50}>
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            {/* hover lighting */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
            </div>
            {/* index watermark */}
            <span className="absolute right-5 top-4 text-6xl font-semibold tracking-tight text-white/5">
              0{index + 1}
            </span>
          </motion.div>
        </BlurReveal>
      </div>

      {/* Text */}
      <div className={reversed ? 'md:order-1' : ''}>
        <MaskReveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
            {project.category} · {project.year}
          </span>
        </MaskReveal>
        <MaskReveal delay={0.08}>
          <h3 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            {project.name}
          </h3>
        </MaskReveal>
        <BlurReveal delay={0.15} y={20}>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/55">
            {project.description}
          </p>
        </BlurReveal>

        <BlurReveal delay={0.22} y={16}>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </BlurReveal>

        <BlurReveal delay={0.28} y={16}>
          <div className="mt-7 flex items-center gap-2 text-sm text-white/40">
            <span className="h-px w-6 bg-white/20" />
            <span>{project.role}</span>
          </div>
        </BlurReveal>

        <BlurReveal delay={0.34} y={16}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10">Live Demo</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </BlurReveal>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <SectionSeparator />
      <Section id="projects" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            index="02"
            eyebrow="Featured Work"
            title={
              <>
                Selected projects,
                <br />
                built with intent.
              </>
            }
          />
        </div>

        <div className="mx-auto mt-10 max-w-7xl space-y-4 px-6 sm:px-10 md:mt-16">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.id} project={p} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
