import type { WorkflowStep, ServiceItem } from '../types/portfolio';

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Understand Requirements',
    icon: 'Compass',
    points: [
      'Analyze business rules and core user workflows.',
      'Identify edge cases, authentication barriers, and offline modes.',
      'Plan scalable component hierarchy and state architecture.'
    ]
  },
  {
    number: '02',
    title: 'Development',
    icon: 'Layers',
    points: [
      'Build reusable, modular React Native UI components.',
      'Implement scalable state management with Redux Toolkit.',
      'Integrate REST APIs, hardware sensors, and biometrics.'
    ]
  },
  {
    number: '03',
    title: 'Testing & Optimization',
    icon: 'SlidersHorizontal',
    points: [
      'Profile memory, JS thread frame rates, and render cycles.',
      'Test extensively across physical Android & iOS devices.',
      'Audit battery consumption and background sync integrity.'
    ]
  },
  {
    number: '04',
    title: 'Deployment',
    icon: 'Rocket',
    points: [
      'Configure optimized production bundles and signing keys.',
      'Automate builds and distribution tracks with Fastlane.',
      'Publish seamlessly to Google Play Store and Apple App Store.'
    ]
  }
];

export const services: ServiceItem[] = [
  {
    title: 'Mobile Application Development',
    description:
      'Designing and developing scalable, high-performance cross-platform applications for Android and iOS using React Native, TypeScript, and modern mobile libraries.',
    icon: 'Smartphone',
    tags: ['React Native', 'Android', 'iOS', 'Cross-Platform', 'Native Modules']
  },
  {
    title: 'Frontend Web Development',
    description:
      'Crafting clean, accessible, and responsive user interfaces using React.js and Next.js, with server-side rendering and polished component architectures.',
    icon: 'Globe',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI']
  },
  {
    title: 'API Integration & Optimization',
    description:
      'Seamless REST API integration, offline-first local caching (Realm DB, MMKV), Redux Toolkit state synchronization, and application runtime performance optimization.',
    icon: 'Zap',
    tags: ['REST APIs', 'Realm DB', 'Offline-First', 'Redux Toolkit', 'Performance']
  }
];
