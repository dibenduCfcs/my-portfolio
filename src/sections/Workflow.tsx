import React from 'react';
import { workflowSteps } from '../data/workflow';
import { SectionHeading } from '../components/SectionHeading';
import { Compass, Layers, SlidersHorizontal, Rocket, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Layers,
  SlidersHorizontal,
  Rocket
};

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Work Process"
          title="How I Build Mobile Applications"
          subtitle="A disciplined, end-to-end engineering methodology to deliver scalable, stable, and production-tested mobile apps."
        />

        {/* 4 Cards Grid mirroring the 4 process cards from Homepage.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => {
            const Icon = iconMap[step.icon] || Compass;
            return (
              <div
                key={step.number}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#3875DE] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#3875DE] group-hover:text-white text-[#3875DE] flex items-center justify-center shadow-xs border border-slate-100 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#3875DE] transition-colors">
                    {step.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3875DE]/70 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Phase {step.number}</span>
                  <span className="text-[#3875DE] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Quality Assured
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
