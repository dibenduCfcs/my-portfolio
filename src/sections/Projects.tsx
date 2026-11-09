import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Info } from 'lucide-react';

const categories = [
  'All',
  'Mobile Apps (React Native)',
  'Web Platforms (React / Next.js)',
  'In-House Products',
  '3rd-Party (SaaS/PaaS)',
  'Service-Based Work'
] as const;
type CategoryFilter = typeof categories[number];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Mobile Apps (React Native)'
    ? projects.filter((p) => !p.platform || p.platform === 'mobile')
    : activeFilter === 'Web Platforms (React / Next.js)'
    ? projects.filter((p) => p.platform === 'web')
    : activeFilter === 'In-House Products'
    ? projects.filter((p) => p.categoryGroup === 'In-House Products' || p.category === 'In-House Product')
    : activeFilter === '3rd-Party (SaaS/PaaS)'
    ? projects.filter((p) => p.categoryGroup === '3rd-Party (SaaS/PaaS)' || p.category.includes('SaaS'))
    : projects.filter((p) => p.categoryGroup === 'Service-Based Work' || p.category === 'Service-Based Work');

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Portfolio"
          title="Featured Production Mobile & Web Projects"
          subtitle="Enterprise mobile apps (React Native) and scalable web platforms (React.js & Next.js) built for high performance and live production."
        />

        {/* Confidentiality Notice Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 max-w-3xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-blue-950">
          <Info className="w-5 h-5 text-[#3875DE] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-blue-950">
              Professional Production Projects (CFCS Cloud Solutions)
            </span>
            All projects represent delivered commercial software. Technical architecture, feature summaries, and metrics are presented strictly within corporate confidentiality guidelines.
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#3875DE] text-white shadow-md shadow-[#3875DE]/25 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified 7+ Apps Developed • 5+ App Store Deployments • 3+ CRM Websites • Client Handling</span>
          </div>
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
