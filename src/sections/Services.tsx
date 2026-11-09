import React from 'react';
import { services } from '../data/workflow';
import { Smartphone, Globe, Zap, ArrowRight, type LucideIcon } from 'lucide-react';

const serviceIcons: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Zap
};

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Summary (matching Homepage.jpg layout) */}
          <div className="lg:col-span-4">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#3875DE] uppercase bg-blue-50 border border-blue-100 rounded-full">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What I do?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Specialized engineering services centered around high-performance mobile apps, web CRM interfaces, and robust backend integration pipelines.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-[#3875DE] hover:bg-[#2962C4] shadow-md shadow-[#3875DE]/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>Hire My Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Service Cards Stacked */}
          <div className="lg:col-span-8 space-y-5">
            {services.map((service, idx) => {
              const Icon = serviceIcons[service.icon] || Smartphone;
              return (
                <div
                  key={idx}
                  className="group p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-100/90 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0 group-hover:bg-[#3875DE] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#3875DE] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:pl-16">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:pl-16">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
