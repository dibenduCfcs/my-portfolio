import React, { useEffect, useState } from 'react';
import type { Project } from '../types/portfolio';
import { X, CheckCircle, Code, Layers, ShieldCheck, Clock, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  const activeScreenshot =
    selectedScreenshot && project?.gallery?.includes(selectedScreenshot)
      ? selectedScreenshot
      : (project?.gallery?.[0] ?? null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                project.category === 'In-House Product'
                  ? 'bg-blue-50 text-[#3875DE] border-blue-200'
                  : project.category === 'B2B FinTech SaaS'
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : project.category === 'E-Commerce SaaS'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : project.category === 'Enterprise Web Platform' || project.category === 'Next.js Web Platform'
                  ? 'bg-sky-50 text-sky-700 border-sky-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" /> {project.duration}
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
              Professional Production Project
            </span>
          </div>

          <div className="flex items-center gap-3.5 mt-2">
            {project.iconUrl && (
              <img
                src={project.iconUrl}
                alt={`${project.name} App Icon`}
                className="w-12 h-12 rounded-2xl shadow-md border border-slate-100 object-cover shrink-0"
              />
            )}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6 pb-6 border-b border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* App Screenshot Gallery if available */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#3875DE]" />
                <span>
                  {project.platform === 'web'
                    ? 'Official Web Platform Preview'
                    : project.playStoreUrl
                    ? 'Official Play Store Screenshots'
                    : 'Production Mobile App Screenshots'} ({project.gallery.length})
                </span>
              </h4>
              {project.playStoreUrl ? (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#3875DE] hover:underline"
                >
                  View on Play Store <ExternalLink className="w-3 h-3" />
                </a>
              ) : project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#3875DE] hover:underline"
                >
                  {project.platform === 'web' ? 'Visit Live Website' : 'CFCS Product Page'} <ExternalLink className="w-3 h-3" />
                </a>
              ) : null}
            </div>

            {/* Active Screenshot Full View */}
            {activeScreenshot && (
              <div className="flex justify-center mb-4">
                <div className="max-w-[240px] sm:max-w-[270px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950">
                  <img
                    src={activeScreenshot}
                    alt="Active Screenshot Preview"
                    className="w-full h-auto block select-none pointer-events-none"
                  />
                </div>
              </div>
            )}

            {/* Thumbnail Row if multiple images */}
            {project.gallery.length > 1 && (
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedScreenshot(img)}
                    className={`rounded-xl overflow-hidden border-2 aspect-[9/16] bg-slate-900 shadow-2xs transition-colors cursor-pointer ${
                      activeScreenshot === img
                        ? 'border-[#3875DE] ring-2 ring-[#3875DE]/30'
                        : 'border-slate-200/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Summary & Impact */}
        <div className="mb-6 space-y-3">
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            {project.summary}
          </p>
          {project.impactHighlight && (
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 text-sm font-medium flex items-start gap-3">
              <div className="mt-0.5 text-[#3875DE] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold block text-blue-900">Key Outcome & Impact:</span>
                {project.impactHighlight}
              </div>
            </div>
          )}
        </div>

        {/* Features & Contribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Key Features */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3.5">
              <Layers className="w-4 h-4 text-[#3875DE]" /> Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#3875DE] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Contribution */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3.5">
              <Code className="w-4 h-4 text-[#3875DE]" /> My Role & Contributions
            </h4>
            <ul className="space-y-2.5">
              {project.contribution.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3875DE] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Notes if available */}
        {project.architectureNotes && project.architectureNotes.length > 0 && (
          <div className="p-4 mb-6 rounded-xl bg-slate-100/70 border border-slate-200/60 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900 block mb-1.5">Architecture & Engineering Highlights:</span>
            <ul className="space-y-1 list-disc list-inside">
              {project.architectureNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Confidentiality Footer & Action */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            Built at CFCS Cloud Solutions. Architecture case study presented in accordance with client confidentiality.
          </p>
          <div className="flex items-center gap-3">
            {project.playStoreUrl ? (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#3875DE] hover:bg-[#2962C4] shadow-sm transition-all"
              >
                <span>Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#3875DE] hover:bg-[#2962C4] shadow-sm transition-all"
              >
                <span>{project.platform === 'web' ? 'Visit Live Website' : 'CFCS Product Page'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
