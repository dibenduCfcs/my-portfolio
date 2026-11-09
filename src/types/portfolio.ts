export interface Project {
  id: string;
  name: string;
  platform?: 'mobile' | 'web';
  category: 'In-House Product' | 'B2B FinTech SaaS' | 'E-Commerce SaaS' | 'Service-Based Work' | '3rd-Party (PaaS/SaaS)' | 'Enterprise Web Platform' | 'Next.js Web Platform' | string;
  categoryGroup?: 'In-House Products' | '3rd-Party (SaaS/PaaS)' | 'Service-Based Work' | 'Web Applications';
  subtitle: string;
  duration: string;
  technologies: string[];
  summary: string;
  impactHighlight?: string;
  features: string[];
  contribution: string[];
  architectureNotes?: string[];
  mockupTheme: {
    badge: string;
    primaryColor: string;
    screenTitle: string;
    accentGradient: string;
  };
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  iconUrl?: string;
  realScreenshotUrl?: string;
  gallery?: string[];
}

export interface SkillItem {
  name: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
  badge?: string;
  highlight?: string;
  featured?: boolean;
  group?: 'mobile' | 'data' | 'devops';
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  badge: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade: string;
  highlights: string[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  points: string[];
  icon: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}
