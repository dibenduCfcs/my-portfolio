import React from 'react';
import { experiences } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { Briefcase, MapPin, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Career Journey"
          title="Professional Work Experience"
          subtitle="3.5+ years of delivering high-impact production mobile applications and enterprise systems."
        />

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Track Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3875DE] via-blue-400 to-slate-200" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 sm:pl-20 pb-8">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute top-8 left-4 sm:left-8 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#3875DE] ring-4 ring-blue-100 flex items-center justify-center text-white shadow-md z-10">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3875DE] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 mb-2">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-[#3875DE] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      <Calendar className="w-3.5 h-3.5 text-[#3875DE]" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 gap-2.5 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#3875DE] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Stack Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/70 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

          {/* Verification Badge */}
          <div className="relative pl-12 sm:pl-20">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-3 text-xs text-emerald-800 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Full employment history verified at CFCS Cloud Solutions, Noida.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
