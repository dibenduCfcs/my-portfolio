import React from 'react';
import type { Project } from '../types/portfolio';
import { MobileMockup } from './MobileMockup';
import { BrowserMockup } from './BrowserMockup';
import { ArrowRight, Clock, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article
      className="group relative flex flex-col bg-white rounded-3xl border border-slate-100/90 shadow-sm hover:shadow-xl hover:border-blue-200/90 transition-all duration-300 overflow-hidden"
      aria-label={`${project.name} - ${project.subtitle}`}
    >
      {/* Visual Mockup Container */}
      <div className="relative pt-6 px-4 pb-4 bg-gradient-to-b from-slate-50 via-blue-50/20 to-transparent flex items-center justify-center border-b border-slate-100 overflow-hidden">
        <div className="w-full flex items-center justify-center">
          {project.platform === 'web' ? (
            <BrowserMockup project={project} />
          ) : (
            <MobileMockup project={project} />
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Metadata badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                project.category === 'In-House Product'
                  ? 'bg-blue-50 text-[#3875DE] border-blue-200/80'
                  : project.category === 'B2B FinTech SaaS'
                  ? 'bg-purple-50 text-purple-700 border-purple-200/80'
                  : project.category === 'E-Commerce SaaS'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                  : project.category === 'Enterprise Web Platform' || project.category === 'Next.js Web Platform'
                  ? 'bg-sky-50 text-sky-700 border-sky-200/80'
                  : 'bg-amber-50 text-amber-700 border-amber-200/80'
              }`}
            >
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5" /> <time>{project.duration}</time>
            </span>
          </div>

          {/* Title and subtitle */}
          <div className="flex items-center gap-2.5">
            {project.iconUrl && (
              <img
                src={project.iconUrl}
                alt={`${project.name} icon`}
                className="w-7 h-7 rounded-lg border border-slate-100 object-cover shrink-0 shadow-2xs"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#3875DE] transition-colors">
              {project.name}
            </h3>
          </div>
          <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 line-clamp-1">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Impact pill if available */}
          {project.impactHighlight && (
            <div className="mt-3 p-2 rounded-lg bg-blue-50/70 border border-blue-100/70 flex items-start gap-1.5 text-[11px] text-blue-900 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#3875DE] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{project.impactHighlight}</span>
            </div>
          )}

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          {project.playStoreUrl ? (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#3875DE] transition-colors"
            >
              <span>Play Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#3875DE] transition-colors"
            >
              <span>{project.platform === 'web' ? 'Visit Website' : 'CFCS Product'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Production App
            </span>
          )}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3875DE] group-hover:text-blue-800 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
