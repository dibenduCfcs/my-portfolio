import React from 'react';
import { skillCategories } from '../data/skills';
import { SkillCard } from '../components/SkillCard';
import { SectionHeading } from '../components/SectionHeading';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 bg-slate-50/70 relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div id="skills-heading">
          <SectionHeading
            badge="Technical Toolkit"
            title="Skills & Engineering Competencies"
            subtitle="Categorized overview of languages, client frameworks, state management, and deployment toolchains."
          />
        </div>

        {/* Clean Resume-Style Skills Sheet */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-8 md:p-10">
          
          {/* Top Resume Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-3 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 text-[#3875DE] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Technical Skills Summary
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct from resume • 3.5+ years commercial mobile &amp; web engineering
                </p>
              </div>
            </div>

            <a
              href="/Dibendu_Gorai_Resume.pdf"
              download="Dibendu_Gorai_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#3875DE] bg-blue-50/80 hover:bg-[#3875DE] hover:text-white border border-blue-200/70 rounded-xl transition-all self-start sm:self-auto cursor-pointer"
              title="Download official PDF resume"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>

          {/* Clean Categorized Rows */}
          <div className="divide-y-0">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                isLast={index === skillCategories.length - 1}
              />
            ))}
          </div>

          {/* Bottom Verification Note */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Production-tested stack across 7+ deployed commercial applications</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              28+ Verified Technologies
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
