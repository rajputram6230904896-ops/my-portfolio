import { ProfileInfo, Skill, Project, Experience, Certification, Statistic, Testimonial } from '../types';

export const initialProfile: ProfileInfo = {
  name: "Rajput Ram",
  title: "Software Developer",
  tagline: "Crafting futuristic digital experiences at the intersection of high-performance code, AI architectures, and elegant visual design.",
  shortBio: "I design and build cutting-edge web applications, interactive interfaces, and secure full-stack platforms with meticulous craftsmanship and modern visual art direction.",
  fullBio: "Rajput Ram is a premier full-stack engineer and creative developer specializing in ultra-responsive web applications, bespoke UI/UX designs, React architectures, and high-performance full-stack solutions. My philosophy centers around clean software engineering, spatial typography, smooth micro-interactions, and flawless speed.",
  location: "Punjab, India - 140401",
  email: "rajputram630904896@gmail.com",
  phone: "6230904896",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  availableForHire: true,
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    dribbble: "https://dribbble.com",
    instagram: "https://instagram.com/rajputram._17",
    youtube: "https://youtube.com"
  }
};

export const skillsData: Skill[] = [
  {
    id: 'skill-1',
    name: 'Frontend Development',
    category: 'Frontend',
    level: 95,
    iconName: 'Code',
    description: 'Mastery in React, TypeScript, Next.js, Vite, Tailwind CSS, and Framer Motion animation engines.',
    featured: true
  },
  {
    id: 'skill-2',
    name: 'JavaScript / ESNext',
    category: 'Frontend',
    level: 92,
    iconName: 'FileCode2',
    description: 'Deep understanding of async execution, memory profiling, closure patterns, and DOM performance.',
    featured: true
  },
  {
    id: 'skill-3',
    name: 'UI/UX Design',
    category: 'UI/UX',
    level: 90,
    iconName: 'Layout',
    description: 'Architecting high-conversion interfaces, design systems, micro-interactions, and accessibility standards.',
    featured: true
  },
  {
    id: 'skill-4',
    name: 'React Ecosystem',
    category: 'Frontend',
    level: 90,
    iconName: 'Atom',
    description: 'Custom hooks, concurrent rendering, state management (Zustand, Redux), and server components.',
    featured: true
  },
  {
    id: 'skill-5',
    name: 'Node.js & Express',
    category: 'Backend',
    level: 88,
    iconName: 'Server',
    description: 'Building high-throughput REST APIs, WebSockets, microservices, and GraphQL endpoints.',
    featured: true
  },
  {
    id: 'skill-6',
    name: 'Python Development',
    category: 'AI & DevOps',
    level: 85,
    iconName: 'Terminal',
    description: 'FastAPI backends, data modeling, LLM pipelines, automated web scraping, and scripting.',
    featured: true
  },
  {
    id: 'skill-7',
    name: 'Cyber Security',
    category: 'Cyber Security',
    level: 80,
    iconName: 'ShieldCheck',
    description: 'OWASP security auditing, JWT/OAuth2 flows, payload validation, and data encryption standards.',
    featured: true
  },
  {
    id: 'skill-8',
    name: 'Tailwind CSS & Styling',
    category: 'UI/UX',
    level: 96,
    iconName: 'Palette',
    description: 'Responsive design systems, glassmorphism, fluid typography scales, and custom animation tokens.',
    featured: false
  },
  {
    id: 'skill-9',
    name: 'PostgreSQL & Databases',
    category: 'Backend',
    level: 86,
    iconName: 'Database',
    description: 'Relational schema architecture, indexing optimization, Drizzle ORM, and Firestore integration.',
    featured: false
  },
  {
    id: 'skill-10',
    name: 'Docker & DevOps',
    category: 'AI & DevOps',
    level: 82,
    iconName: 'Cpu',
    description: 'Containerization, Cloud Run, GitHub Actions CI/CD pipelines, and cloud environment configs.',
    featured: false
  }
];

export const statisticsData: Statistic[] = [
  {
    id: 'stat-1',
    label: 'Projects Completed',
    value: 50,
    suffix: '+',
    icon: 'Briefcase',
    description: 'Shipped to production across web & mobile platforms'
  },
  {
    id: 'stat-2',
    label: 'Clients Served',
    value: 20,
    suffix: '+',
    icon: 'Users',
    description: 'Global brands, venture startups & creative studios'
  },
  {
    id: 'stat-3',
    label: 'Years Experience',
    value: 5,
    suffix: '+',
    icon: 'Award',
    description: 'Building scalable full-stack web applications'
  },
  {
    id: 'stat-4',
    label: 'Technologies',
    value: 30,
    suffix: '+',
    icon: 'Layers',
    description: 'Modern frameworks, libraries & DevOps toolchains'
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Aetheria AI Studio',
    subtitle: 'Generative Creative Suite for Designers',
    description: 'A futuristic SaaS workspace with real-time AI image generation, vector editing, and collaborative canvas tools built with WebGL and React.',
    fullDetails: 'Aetheria AI combines multi-modal AI generation with intuitive vector canvas manipulation. Built on Node.js and Gemini API, featuring real-time collaborative editing via WebSockets and sub-100ms render pipeline.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    tags: ['React 19', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Framer Motion', 'Canvas API'],
    githubUrl: 'https://github.com/rajputram/aetheria-ai-studio',
    liveUrl: 'https://aetheria-ai-demo.example.com',
    featured: true,
    metrics: [
      { label: 'Latency', value: '<80ms' },
      { label: 'Active Users', value: '45K+' },
      { label: 'Rating', value: '4.9/5' }
    ]
  },
  {
    id: 'proj-2',
    title: 'Nexus Cyber Shield',
    subtitle: 'Real-Time Threat Detection Dashboard',
    description: 'Enterprise security monitoring console providing packet-level telemetry, anomaly detection graphs, and automated incident triage.',
    fullDetails: 'Engineered for high-security environments, Nexus Shield aggregates security logs from distributed servers. Features live SVG attack maps, encrypted data channels, and automated firewall policy generation.',
    category: 'Cyber Security',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'D3.js', 'Cyber Security', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rajputram/nexus-cyber-shield',
    liveUrl: 'https://nexus-shield-demo.example.com',
    featured: true,
    metrics: [
      { label: 'Threat Block Rate', value: '99.8%' },
      { label: 'Throughput', value: '25GB/s' },
      { label: 'Uptime', value: '99.99%' }
    ]
  },
  {
    id: 'proj-3',
    title: 'Vanguard Trading Hub',
    subtitle: 'High-Frequency Crypto Analytics Platform',
    description: 'Ultra-fast cryptocurrency trading workstation with custom technical indicators, order book visualizations, and automated arbitrage alerts.',
    fullDetails: 'Designed for quantitative traders, Vanguard Hub renders thousands of tick updates per second using custom Canvas rendering and web workers, minimizing main thread lag.',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'Chart.js', 'Tailwind CSS', 'Redis'],
    githubUrl: 'https://github.com/rajputram/vanguard-trading-hub',
    liveUrl: 'https://vanguard-hub.example.com',
    featured: true,
    metrics: [
      { label: 'Tick Latency', value: '12ms' },
      { label: 'Daily Volume', value: '$12M+' },
      { label: 'Users', value: '18K' }
    ]
  },
  {
    id: 'proj-4',
    title: 'Hyperion Mobile Design System',
    subtitle: 'Cross-Platform UI Framework',
    description: 'A comprehensive tokenized design system for iOS and Android with micro-interactions, dark mode tokens, and automated component documentation.',
    fullDetails: 'Built from scratch for a multi-product tech startup, Hyperion provides over 60 accessible UI components with full touch gesture support and automated Figma-to-code synchronizers.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['Figma', 'UI/UX', 'React Native', 'Tailwind', 'Storybook'],
    githubUrl: 'https://github.com/rajputram/hyperion-design-system',
    liveUrl: 'https://hyperion-docs.example.com',
    featured: false,
    metrics: [
      { label: 'Components', value: '65+' },
      { label: 'Adoption Rate', value: '100%' }
    ]
  },
  {
    id: 'proj-5',
    title: 'OmniStream Video Cloud',
    subtitle: 'Distributed Edge Media Processing',
    description: 'Cloud video encoding and streaming pipeline supporting dynamic adaptive bitrate, automated closed captions, and real-time content moderation.',
    fullDetails: 'Leveraging Node.js, FFmpeg server clusters, and AI speech recognition, OmniStream encodes video uploads into multiple qualities while detecting offensive content automatically.',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Node.js', 'Express', 'FFmpeg', 'Cloud Run', 'Python', 'React'],
    githubUrl: 'https://github.com/rajputram/omnistream-video-cloud',
    liveUrl: 'https://omnistream.example.com',
    featured: false,
    metrics: [
      { label: 'Transcode Speed', value: '4x Realtime' },
      { label: 'Files Processed', value: '1M+' }
    ]
  },
  {
    id: 'proj-6',
    title: 'Pulse Health Tracker',
    subtitle: 'Next-Gen Wearables Companion App',
    description: 'Biometric health dashboard visualizing sleep cycles, heart rate variability, and biometric readiness scores with personalized AI health insights.',
    fullDetails: 'Smooth mobile web companion app integrating bluetooth stream telemetry and predictive wellness suggestions using local machine learning models.',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1510519138161-58446230f699?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/rajputram/pulse-health-tracker',
    liveUrl: 'https://pulse-health.example.com',
    featured: false,
    metrics: [
      { label: 'Sync Speed', value: '<2s' },
      { label: 'Store Rating', value: '4.8' }
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack & Lead UI Architect',
    company: 'Luminary Interactive',
    location: 'San Francisco, CA',
    period: '2023 — Present',
    type: 'Lead',
    description: 'Spearheading the engineering and design direction for next-gen interactive web applications and AI creative tools.',
    responsibilities: [
      'Architected high-throughput React & Express platforms serving over 250,000 active monthly creative professionals.',
      'Designed a custom glassmorphic UI component library reducing frontend technical debt and accelerating sprint output by 40%.',
      'Integrated server-side Gemini AI models for multi-modal code generation and automated image synthesis.',
      'Mentored a team of 8 engineers on performance profiling, motion physics, and accessible component building.'
    ],
    achievements: [
      'Shipped flagship product 3 weeks ahead of schedule with 99.98% uptime.',
      'Reduced initial page load bundle sizes by 52% through code splitting and asset pipeline optimization.'
    ],
    skillsUsed: ['React 19', 'TypeScript', 'Node.js', 'Gemini API', 'Tailwind CSS', 'Motion']
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend Engineer',
    company: 'Apex Digital Systems',
    location: 'Austin, TX (Remote)',
    period: '2021 — 2023',
    type: 'Full-time',
    description: 'Developed high-performance web dashboards and real-time visualization applications for fintech and security clients.',
    responsibilities: [
      'Built reactive WebSocket streaming clients handling 10,000+ real-time updates per second.',
      'Created custom D3.js data charts and interactive security map displays for enterprise monitoring.',
      'Enforced OWASP security best practices across authentication and client-side data caching layers.'
    ],
    achievements: [
      'Recognized as top engineering contributor of the year for zero critical production security bugs.',
      'Pioneered dark-mode red neon design tokens now adopted across 4 company products.'
    ],
    skillsUsed: ['React', 'JavaScript', 'D3.js', 'Tailwind CSS', 'Node.js', 'WebSockets']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Developer & UI Designer',
    company: 'Vanguard Creative Lab',
    location: 'New York, NY',
    period: '2019 — 2021',
    type: 'Full-time',
    description: 'Crafted custom web applications, e-commerce storefronts, and brand identities for venture-backed startups.',
    responsibilities: [
      'Designed and coded responsive websites from initial Figma wireframes to full Node.js production deployment.',
      'Implemented custom micro-interactions, canvas particle backgrounds, and scroll-driven page animations.',
      'Collaborated closely with product managers and founders to convert complex business goals into simple UI.'
    ],
    achievements: [
      'Received 3 Awwwards Site of the Day honors for client brand launches.',
      'Maintained 100% client satisfaction score across 22 completed projects.'
    ],
    skillsUsed: ['JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'UI/UX Design', 'Figma']
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Meta Certified Professional Full-Stack Software Engineer',
    issuer: 'Meta Platforms',
    date: '2024',
    credentialId: 'META-SE-882914',
    credentialUrl: 'https://coursera.org/verify/meta-fullstack',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    skills: ['React', 'Node.js', 'System Architecture', 'Database Design']
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-ASA-901238',
    credentialUrl: 'https://aws.amazon.com/verification',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    skills: ['Cloud Infrastructure', 'Docker', 'Serverless', 'Security']
  },
  {
    id: 'cert-3',
    title: 'Certified Ethical Hacker (CEH) & Security Specialist',
    issuer: 'EC-Council',
    date: '2023',
    credentialId: 'ECC-CEH-543102',
    credentialUrl: 'https://eccouncil.org/verify',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    skills: ['Penetration Testing', 'Cyber Security', 'Network Auditing', 'OWASP']
  },
  {
    id: 'cert-4',
    title: 'Google Cloud Professional AI Developer',
    issuer: 'Google Cloud Platform',
    date: '2024',
    credentialId: 'GCP-AI-391084',
    credentialUrl: 'https://cloud.google.com/certification',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    skills: ['Gemini API', 'Machine Learning', 'Python', 'Cloud Run']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ayush Chandail',
    role: 'Chief Product Officer',
    company: 'Aetheria Creative Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    content: 'Rajput Ram transformed our complex AI studio vision into an ultra-sleek, responsive reality. His attention to sub-pixel typography, smooth red neon glow accents, and flawless execution set a new standard for our company.',
    rating: 5,
    projectRelation: 'Aetheria AI Studio Development'
  },
  {
    id: 'test-2',
    name: 'Ayush Chandail',
    role: 'VP of Engineering',
    company: 'Apex Digital Systems',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    content: 'Finding an engineer like Rajput Ram who excels equally at high-frequency data architecture AND visual UI polish is exceptionally rare. He delivers top-tier code that is clean, secure, and performant under heavy load.',
    rating: 5,
    projectRelation: 'Nexus Threat Shield Dashboard'
  },
  {
    id: 'test-3',
    name: 'Sarah Chen',
    role: 'Founder & Design Director',
    company: 'Vanguard Creative Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    content: 'Working with Rajput Ram was an absolute breeze. He understands motion physics, responsive breakpoints, and modern aesthetics intuitively. Our launch site earned multiple industry design awards.',
    rating: 5,
    projectRelation: 'Vanguard Trading Hub & Brand System'
  }
];
