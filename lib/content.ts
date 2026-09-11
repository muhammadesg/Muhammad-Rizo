import { CraftImg, DsBanner, InfoCom, VatanBanner } from "@/assets/images";

export const projects = [
  {
    id: 'ds-access',
    name: 'DS Access Group',
    category: 'Corporate Website',
    description:
      'A modern corporate website developed for DS Access Group, presenting industrial solutions and company services through a clean, responsive, and user-friendly interface.',
    tech: ['React', 'Vite', 'TypeScript', 'Laravel', 'Tailwind'],
    role: 'Fullstack Developer',
    year: '2026',
    image:
    DsBanner.src,
    liveDemo: 'https://dsaccessgroup.com',
    github: 'https://github.com/muhammadesg/dsaccessgroup-frontend',
    accent: 'from-white/20 to-white/0',
  },
  {
    id: 'infocom',
    name: 'InfoCom',
    category: 'Website',
    description:
      'A modern digital platform built for InfoCom, featuring a clean interface, responsive layouts, and intuitive navigation. Developed with a focus on clear information presentation, performance, and a smooth user experience.',
    tech: ['React', 'Vite', 'TypeScript', 'SCSS', 'Ant Design'],
    role: 'Frontend Developer',
    year: '2024',
    image:
    InfoCom.src,
    liveDemo: 'https://infocom.uz/en',
    github: null,
    accent: 'from-white/15 to-white/0',
  },
  {
    id: 'vatandoshlar-fondi',
    name: 'Vatandoshlar Fondi',
    category: 'Organization Website',
    description:
      'A professional website developed for Vatandoshlar Fondi, focused on clear information presentation, modern responsive layouts, and an accessible user experience.',
    tech: ['React', 'Vite', 'TypeScript', 'AntDesign', 'Laravel/PHP'],
    role: 'Frontend Developer',
    year: '2025',
    image:
    VatanBanner.src,
    liveDemo: 'https://vatandoshlar.uz/en',
    github: null,
    accent: 'from-white/20 to-white/0',
  },
  {
    id: 'craftbazar',
    name: 'CraftBazar',
    category: 'Minecraft Marketplace',
    description:
      'A digital marketplace built for the Minecraft community, offering a simple and engaging platform to discover, browse, and purchase Minecraft-related products and content.',
    tech: ['React', 'Vite', 'TypeScript', 'SCSS',],
    role: 'Frontend Developer',
    year: '2026',
    image:
    CraftImg.src,
    liveDemo: 'https://craftbazar.uz/',
    github: null,
    accent: 'from-white/15 to-white/0',
  },
];

export const experiences = [
  {
    company: 'Napa Team',
    position: 'Frontend Developer',
    period: '2026 — Present',
    location: 'Tashkent, UZ',
    description:
      'Working on a variety of web projects, contributing to frontend development, responsive interfaces, and the implementation of modern web experiences.',
    tech: ['React', 'TypeScript', 'Vite', 'SCSS', 'Ant Design', 'Laravel'],
    achievements: [
      'Worked on projects including CraftBazar, Jamg’arma, and other client projects',
      'Developed responsive interfaces and reusable frontend components',
      'Collaborated with the team to implement new features and improve existing products',
    ],
  },

  {
    company: 'Napa Team / Mio Beauty',
    position: 'Frontend Developer',
    period: '2025 — 2026',
    location: 'Tashkent, UZ',
    description:
      'Contributed to commercial web projects, including the Mio Beauty platform and the Vatandoshlar Fondi website.',
    tech: ['React', 'TypeScript', 'Vite', 'Next.js', 'Ant Design', 'Laravel'],
    achievements: [
      'Developed interfaces for the Mio Beauty administration panel',
      'Implemented features for managing customer conversations and orders',
      'Contributed to the frontend development of the Vatandoshlar Fondi website',
    ],
  },

  {
    company: 'Napa Team',
    position: 'Frontend Developer',
    period: '2024 — 2025',
    location: 'Tashkent, UZ',
    description:
      'Worked on real-world web development projects for organizations and businesses, focusing primarily on frontend development and user interfaces.',
    tech: ['React', 'TypeScript', 'Vite', 'SCSS', 'Ant Design'],
    achievements: [
      'Worked on projects including InfoCom and E-Protocol',
      'Built responsive pages and reusable UI components',
      'Integrated frontend interfaces with APIs and backend services',
    ],
  },
];

export const techStack = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Ant Design',
      'Framer Motion',
      'React Query',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Laravel',
      'Node.js',
      'Livewire',
      'REST APIs',
    ],
  },
  {
    category: 'Database',
    items: [
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    category: 'Cloud',
    items: [
      'Vercel',
      'Netlify',
      'Railway',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Codex',
      'GitHub',
      'Figma',
      'Cursor',
      'VS Code',
      'Bolt.ai',
    ],
  },
  {
    category: 'Design',
    items: [
      'Figma',
      'UI/UX Design',
      'Responsive Design',
      'Design Systems',
    ],
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
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Projects completed', value: 14, suffix: '+' },
  { label: 'Technologies used', value: 20, suffix: '+' },
  { label: 'Clients & companies', value: 10, suffix: '+' },
];

export const awards = [
  {
    title: 'Napa Team Certificate',
    org: 'Napa Team',
    year: '2026',
  },
  {
    title: 'InfoCom Certificate',
    org: 'InfoCom',
    year: '2024',
  },
  {
    title: 'Web Development Certificate',
    org: 'IT Step Academy',
    year: '2021',
  },
  {
    title: 'React Development Certificate',
    org: 'IT School',
    year: '2024',
  },
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
