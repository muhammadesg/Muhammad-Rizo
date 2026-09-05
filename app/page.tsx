import AmbientBackground from '@/components/hero/ambient-background';
import Hero from '@/components/hero/hero';
import Navbar from '@/components/hero/navbar';
import PageLoader from '@/components/hero/page-loader';
import ParticleField from '@/components/hero/particle-field';
import ScrollIndicator from '@/components/hero/scroll-indicator';
import ScrollProgress from '@/components/effects/scroll-progress';
import SmoothScroll from '@/components/effects/smooth-scroll';
import CustomCursor from '@/components/effects/custom-cursor';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import TechStack from '@/components/sections/tech-stack';
import Process from '@/components/sections/process';
import Achievements from '@/components/sections/achievements';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#050505]">
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <PageLoader />

      {/* Hero with living background */}
      <div className="relative min-h-[100svh] w-full overflow-hidden">
        <AmbientBackground />
        <ParticleField />
        <div className="grain" aria-hidden />
        <Navbar />
        <Hero />
        {/* <ScrollIndicator /> */}
      </div>

      {/* Cinematic chapters */}
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Process />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
}
