'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { lenisRef, EASE } from '@/lib/lenis';

const links = ['About', 'Projects', 'Experience', 'Contact'] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.1 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <AnimatePresence>
      {mounted && (
        <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="fixed inset-x-0 top-0 z-40"
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-10 ${
              scrolled ? 'py-4' : 'py-6'
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const lenis = lenisRef.current;
                if (lenis) lenis.scrollTo(0, { duration: 1.1 });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
                history.replaceState(null, '', ' ');
              }}
              className="group relative flex items-center"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-semibold tracking-[0.15em] transition-all duration-500 ${
                  scrolled
                    ? 'bg-white/5 shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] backdrop-blur-xl'
                    : 'bg-white/[0.02] backdrop-blur-md'
                }`}
              >
                MR
              </span>
            </motion.a>

            {/* Nav links */}
            <nav
              className={`hidden items-center gap-1 rounded-full border border-white/10 px-2 py-1.5 transition-all duration-500 md:flex ${
                scrolled
                  ? 'bg-white/8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)] backdrop-blur-xl'
                  : 'bg-white/[0.02] backdrop-blur-md'
              }`}
            >
              {links.map((item, i) => {
                const id = item.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.08,
                      ease: EASE,
                    }}
                    className="group relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.6)' }}
                  >
                    {/* Active pill background */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                    {/* Hover underline */}
                    <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/40 transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="relative z-10">{item}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile: contact pill */}
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/70 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 hover:text-white md:hidden"
            >
              Contact
            </motion.a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
