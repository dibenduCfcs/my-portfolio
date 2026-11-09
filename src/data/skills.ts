import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    description: 'Cross-platform mobile and web application frameworks',
    icon: 'Smartphone',
    skills: ['React Native', 'React.js', 'Next.js', 'SwiftUI'],
    badge: 'Primary Core',
    highlight: '7+ Apps Delivered',
    featured: true,
    group: 'mobile'
  },
  {
    title: 'Programming Languages',
    description: 'Core typed and object-oriented client languages',
    icon: 'Code2',
    skills: ['JavaScript', 'TypeScript', 'Kotlin', 'Swift'],
    badge: 'Languages',
    highlight: 'Type-Safe',
    group: 'mobile'
  },
  {
    title: 'State Management',
    description: 'Predictable client state architecture and caching',
    icon: 'Layers',
    skills: ['Redux Toolkit', 'Redux', 'Context API'],
    badge: 'Architecture',
    highlight: 'Scalable State',
    group: 'data'
  },
  {
    title: 'Database & Storage',
    description: 'Offline-first databases and high-speed local caches',
    icon: 'Database',
    skills: ['Realm', 'MongoDB', 'Offline Storage (AsyncStorage / MMKV)'],
    badge: 'Offline-First',
    highlight: 'Realm DB',
    group: 'data'
  },
  {
    title: 'API & Backend',
    description: 'RESTful endpoints, runtime environments, and networking',
    icon: 'Server',
    skills: ['REST API Integration', 'Node.js', 'NestJS', 'Express.js'],
    badge: 'Networking',
    highlight: 'REST & Node.js',
    group: 'data'
  },
  {
    title: 'Third-Party Integrations',
    description: 'Cloud SDKs, maps, camera OCR, and native mobile APIs',
    icon: 'Cpu',
    skills: [
      'Firebase',
      'Google Maps API',
      'Push Notifications',
      'Deep Linking',
      'OCR (Optical Character Recognition)'
    ],
    badge: 'Native SDKs',
    highlight: 'Hardware & Cloud',
    group: 'devops'
  },
  {
    title: 'CI/CD & Developer Tools',
    description: 'Automated release pipelines, store distribution, and IDEs',
    icon: 'Wrench',
    skills: [
      'Fastlane',
      'Git',
      'GitHub',
      'VS Code',
      'Android Studio',
      'Xcode',
      'Google Play Store',
      'Apple App Store'
    ],
    badge: 'Store DevOps',
    highlight: '5+ Store Deployments',
    group: 'devops'
  }
];
