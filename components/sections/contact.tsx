'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import Section, { SectionSeparator } from '@/components/motion/section';
import { BlurReveal, MaskReveal } from '@/components/motion/primitives';
import MagneticButton from '@/components/motion/magnetic-button';

const socials = [
  { icon: Mail, label: 'Email', href: 'mailto:hello@rizo.dev' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: MessageCircle, label: 'Telegram', href: 'https://t.me' },
];

export default function Contact() {
  return (
    <>
      <SectionSeparator />
      <Section id="contact" className="relative overflow-hidden py-28 sm:py-36 md:py-48">
        {/* Giant background typography */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-[1] -translate-y-1/2 select-none text-center"
          aria-hidden
        >
          <span className="block text-[24vw] font-semibold leading-none tracking-[-0.05em] text-white/[0.03]">
            LET&apos;S TALK
          </span>
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Left: CTA */}
            <div className="flex flex-col justify-center">
              <BlurReveal>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-white/30">08</span>
                  <span className="h-px w-6 bg-white/20" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
                    Contact
                  </span>
                </div>
              </BlurReveal>

              <MaskReveal className="mt-5">
                <h2 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
                  Let&apos;s build
                  <br />
                  something
                  <br />
                  unforgettable.
                </h2>
              </MaskReveal>

              <BlurReveal delay={0.2} y={20}>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/50">
                  Currently available for select freelance and contract work.
                  Tell me about your project — I&apos;ll get back to you within
                  48 hours.
                </p>
              </BlurReveal>

              <BlurReveal delay={0.3} y={16}>
                <div className="mt-8 flex items-center gap-3">
                  {socials.map((s) => (
                    <MagneticButton
                      key={s.label}
                      href={s.href}
                      variant="ghost"
                      strength={0.5}
                      className="!px-0 !py-0"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full">
                        <s.icon className="h-[18px] w-[18px]" />
                      </span>
                    </MagneticButton>
                  ))}
                </div>
              </BlurReveal>
            </div>

            {/* Right: Form */}
            <div className="flex items-center">
              <BlurReveal y={40} className="w-full">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="glass rounded-2xl p-6 sm:p-8"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-white/30 focus:bg-white/[0.04]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-white/30 focus:bg-white/[0.04]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-white/30 focus:bg-white/[0.04]"
                      />
                    </div>
                    <MagneticButton href="#" variant="primary" className="w-full justify-center">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </MagneticButton>
                  </div>
                </form>
              </BlurReveal>
            </div>
          </div>

          {/* Finishing line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 pt-10 sm:mt-32"
          >
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/30">
              Muhammad Rizo
            </span>
            <span className="text-xs text-white/25">
              Crafted with precision. Built for the future.
            </span>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
