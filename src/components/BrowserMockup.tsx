import React from 'react';
import type { Project } from '../types/portfolio';
import { Lock, ExternalLink } from 'lucide-react';

interface BrowserMockupProps {
  project: Project;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ project }) => {
  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    : 'web-application.app';

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-800/80 overflow-hidden">
      {/* Browser Top Window Header */}
      <div className="h-8 px-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800/80 text-[11px] text-slate-400 select-none">
        {/* Window controls (traffic lights) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-[210px] mx-2 px-2.5 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 flex items-center justify-center gap-1.5 text-[10px] text-slate-300 truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
          <span className="truncate font-mono">{displayUrl}</span>
        </div>

        {/* External Link Action */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} website in new tab`}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Screenshot / Web Canvas */}
      <div className="relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
        {project.realScreenshotUrl ? (
          <img
            src={project.realScreenshotUrl}
            alt={`${project.name} Web Platform`}
            className="w-full h-auto block select-none pointer-events-none"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-[16/10] bg-slate-900 flex items-center justify-center text-slate-500 text-xs">
            {project.name} Web Preview
          </div>
        )}
      </div>
    </div>
  );
};
