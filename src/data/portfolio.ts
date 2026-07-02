import { Code2, Mail, Network } from 'lucide-react'
import type { JourneyItem, LinkItem, NavItem, Project, SkillGroup } from '../types/portfolio'

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/bundavit', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vath-bundavit', icon: Network },
  { label: 'Email', href: 'mailto:bundavitvath@gmail.com', icon: Mail },
]

export const projects: Project[] = [
  {
    title: 'Campus Found',
    category: 'Full-stack web platform',
    description:
      'A responsive lost-and-found management system for campus communities, built to replace scattered Telegram reporting with a central workflow.',
    bullets: [
      'Built public browsing, reporting, ownership claims, email verification, password reset, and account dashboards.',
      'Implemented role-based admin moderation for reports, claims, disputes, users, and audit activity.',
      'Deployed to DigitalOcean with Laravel, MySQL, Nginx, PHP-FPM, queues, and production asset builds.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API', 'Sanctum', 'Nginx', 'DigitalOcean'],
    image: '/projects/campus-found-homepage.png',
    imageAlt: 'Campus Found homepage showing the campus lost-and-found web platform.',
    github: 'https://github.com/bundavit/Campus-Found-V1',
    live: 'https://campusfound.me',
  },
  {
    title: 'Campus Found Android',
    category: 'Native Android app',
    description:
      'A mobile lost-and-found app that lets students browse as guests, search listings, report items, and manage their posts from Android.',
    bullets: [
      'Developed guest browsing, authentication, lost/found reporting, profile management, search, filters, and pull-to-refresh.',
      'Used MVVM, Hilt, Retrofit, Room, StateFlow, Coroutines, Material 3, and offline cache fallback.',
      'Designed as a student portfolio release with MockAPI sync and practical mobile user flows.',
    ],
    tech: ['Kotlin', 'Android', 'MVVM', 'Hilt', 'Retrofit', 'Room', 'Material 3', 'StateFlow'],
    image: '/projects/campus-found-mobile-home.png',
    imageAlt: 'Campus Found Android home screen displaying lost-and-found posts.',
    github: 'https://github.com/bundavit/Campus-Found-Mobile',
  },
  {
    title: 'DearYou',
    category: 'Private letter platform',
    description:
      'A private digital letter platform for creating styled letters, publishing expiring private links, and collecting recipient responses.',
    bullets: [
      'Built creator accounts, draft management, private recipient links, media-rich letters, reactions, replies, and keepsake downloads.',
      'Added admin tools for users, feedback, moderation, storage limits, expiry options, audit history, and platform stats.',
      'Deployed with Laravel, MySQL, Vite, queues, scheduler, Nginx, PHP-FPM, and DigitalOcean.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Sanctum', 'Vite', 'Nginx', 'DigitalOcean'],
    image: '/projects/dearyou-homepage.png',
    imageAlt: 'DearYou homepage for the private digital letter platform.',
    github: 'https://github.com/bundavit/Dearyou',
    live: 'https://dearyous.app',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', skills: ['PHP', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'C', 'C++'] },
  { title: 'Frameworks', skills: ['Laravel', 'Bootstrap', 'React', 'Android', 'MVVM'] },
  { title: 'Database', skills: ['MySQL', 'SQLite'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Vite', 'Nginx', 'DigitalOcean'] },
]

export const journeyItems: JourneyItem[] = [
  {
    title: 'Bachelor of Engineering, Information Technology Engineering',
    organization: 'Royal University of Phnom Penh',
    date: '2024 - Expected Jul 2027',
    description: [
      'Final-year Information Technology Engineering student focused on full-stack web, Android, databases, and REST APIs.',
    ],
  },
  {
    title: 'Cambodia Book Fair and National Reading Day',
    organization: 'Cambodia Book Fair (2023 & 2024) and National Reading Day (2024)',
    date: '2023 - 2024',
    role: 'Logistics Team',
    description: [
      'Assisted with procurement, inventory management, and distribution of event supplies.',
      'Coordinated logistics with organizers and volunteers to support event operations.',
    ],
  },
  {
    title: 'International Conference of Asian Political Parties',
    organization: 'ICAPP',
    date: 'November 2024',
    role: 'Liaison Officer',
    description: [
      'Assisted international delegates with communication, coordination, and logistical support.',
      'Collaborated with organizers and volunteers to ensure smooth conference operations.',
    ],
  },
  {
    title: '4th National Ju-Jitsu Championship',
    organization: 'National Ju-Jitsu Championship',
    date: 'March 2026',
    role: 'IT Team',
    description: [
      'Configured and operated the digital scoreboard and managed match data using Smoothcomp.',
      'Assisted with live streaming and provided technical support during the competition.',
    ],
  },
]
