export const projects = [
  {
    id: 'aurora',
    name: 'Aurora Finance',
    category: 'Fintech Platform',
    description:
      'A next-generation banking dashboard reimagining how people interact with their money. Real-time analytics, predictive insights, and an interface that makes complex financial data feel effortless.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'Tailwind'],
    role: 'Lead Frontend Developer',
    year: '2025',
    image:
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'from-white/20 to-white/0',
  },
  {
    id: 'monolith',
    name: 'Monolith Studio',
    category: 'Creative Agency',
    description:
      'An immersive digital portfolio for an award-winning design studio. Built around scroll-driven storytelling, cinematic transitions, and a custom CMS that lets creatives publish without touching code.',
    tech: ['React', 'GSAP', 'Sanity', 'Vercel', 'Three.js'],
    role: 'Frontend Architect',
    year: '2024',
    image:
      'https://images.pexels.com/photos/27806693/pexels-photo-27806693.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'from-white/15 to-white/0',
  },
  {
    id: 'echo',
    name: 'Echo OS',
    category: 'SaaS Product',
    description:
      'A complete operating system for remote teams — combining messaging, task management, and documentation into a single, fluid workspace. Designed for speed, built for focus.',
    tech: ['Next.js', 'tRPC', 'PostgreSQL', 'Redis', 'Stripe'],
    role: 'Founding Engineer',
    year: '2024',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'from-white/20 to-white/0',
  },
  {
    id: 'lumen',
    name: 'Lumen Commerce',
    category: 'E-Commerce',
    description:
      'A luxury commerce experience for a high-end fashion house. Every product page is a story, every checkout a ceremony. Built to convert without ever feeling like a store.',
    tech: ['Next.js', 'Shopify', 'TypeScript', 'Tailwind', 'Framer Motion'],
    role: 'Frontend Developer',
    year: '2023',
    image:
      'https://images.pexels.com/photos/37253404/pexels-photo-37253404.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: 'from-white/15 to-white/0',
  },
];

export const experiences = [
  {
    company: 'Nebula Labs',
    position: 'Lead Frontend Developer',
    period: '2024 — Present',
    location: 'Remote',
    description:
      'Leading the frontend architecture for a suite of AI-powered creative tools used by over 40,000 designers worldwide.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    achievements: [
      'Reduced initial load time by 62% through code-splitting and streaming SSR',
      'Built a design system adopted across 6 internal products',
      'Mentored a team of 4 frontend engineers',
    ],
  },
  {
    company: 'Vertex Digital',
    position: 'Senior Frontend Developer',
    period: '2022 — 2024',
    location: 'Tashkent, UZ',
    description:
      'Crafted award-winning marketing sites and product interfaces for global brands including two Fortune 500 companies.',
    tech: ['React', 'GSAP', 'Sanity', 'Vercel'],
    achievements: [
      'Delivered 14 production websites with a 98+ Lighthouse score',
      'Won an Awwwards Honorable Mention for interactive storytelling',
      'Established the studio’s motion design language',
    ],
  },
  {
    company: 'Cobalt Studio',
    position: 'Frontend Developer',
    period: '2020 — 2022',
    location: 'Tashkent, UZ',
    description:
      'Built and maintained e-commerce experiences for emerging fashion and lifestyle brands across Central Asia.',
    tech: ['React', 'Shopify', 'Node.js', 'SCSS'],
    achievements: [
      'Launched 20+ storefronts generating $2M+ in annual revenue',
      'Introduced component-driven development to the team',
      'Cut average build time in half with a reusable UI library',
    ],
  },
  {
    company: 'Freelance',
    position: 'Independent Developer',
    period: '2019 — 2020',
    location: 'Worldwide',
    description:
      'Worked with startups and individuals to bring their digital products to life — from landing pages to full-stack applications.',
    tech: ['React', 'Next.js', 'Firebase', 'Tailwind'],
    achievements: [
      'Completed 30+ client projects with 100% satisfaction',
      'Specialized in high-conversion landing pages',
      'Began building a reputation for cinematic web experiences',
    ],
  },
];

export const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'tRPC', 'Express', 'Edge Functions', 'Webhooks'],
  },
  {
    category: 'Database',
    items: ['Supabase', 'PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    category: 'Cloud',
    items: ['Vercel', 'Netlify', 'Cloudflare', 'AWS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Linear', 'Cursor', 'pnpm'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Spline', 'After Effects', 'Design Systems'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Research',
    description:
      'Understanding the problem, the audience, and the landscape before a single pixel is drawn.',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Architecting the experience — information hierarchy, technical structure, and motion language.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Crafting interfaces with intention. Every spacing decision, every transition, every detail matters.',
  },
  {
    step: '04',
    title: 'Development',
    description:
      'Building with clean, typed, performant code. Component-driven, accessible, and future-proof.',
  },
  {
    step: '05',
    title: 'Optimization',
    description:
      'Profiling, refining, and polishing until the experience feels effortless at 60 frames per second.',
  },
  {
    step: '06',
    title: 'Deployment',
    description:
      'Shipping with confidence — continuous integration, monitoring, and zero-downtime releases.',
  },
];

export const achievements = [
  { label: 'Years of experience', value: 6, suffix: '+' },
  { label: 'Projects completed', value: 50, suffix: '+' },
  { label: 'Technologies used', value: 24, suffix: '+' },
  { label: 'Clients & companies', value: 30, suffix: '+' },
];

export const awards = [
  { title: 'Awwwards Honorable Mention', org: 'Awwwards', year: '2024' },
  { title: 'Frontend Developer Certificate', org: 'Meta', year: '2023' },
  { title: 'Production Website of the Day', org: 'CSS Design Awards', year: '2024' },
  { title: 'Open Source Contributor', org: 'GitHub', year: '2023' },
  { title: 'BSc Computer Science', org: 'Tashkent IT University', year: '2020' },
];

export const testimonials = [
  {
    quote:
      'Muhammad doesn’t just build websites — he engineers experiences. The way he translates a brand into motion is something I’ve rarely seen in this industry.',
    name: 'Sarah Chen',
    title: 'Creative Director, Monolith Studio',
  },
  {
    quote:
      'Working with Rizo felt less like hiring a developer and more like collaborating with a designer who happens to write world-class code. Every detail was considered.',
    name: 'Marcus Webb',
    title: 'Founder, Echo OS',
  },
  {
    quote:
      'The performance of our platform after the rebuild was night and day. Load times dropped, conversions went up, and our users actually enjoy using the dashboard now.',
    name: 'Aisha Karimova',
    title: 'Product Lead, Aurora Finance',
  },
  {
    quote:
      'He delivered ahead of schedule and exceeded every expectation. The animations alone won us an award. I would hire him again in a heartbeat.',
    name: 'David Park',
    title: 'CEO, Lumen Commerce',
  },
];

export const stats = achievements;
