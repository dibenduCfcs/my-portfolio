import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3875DE]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>Mobile App Architecture & Engineering</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
          Have a Project Idea? Let's discuss your next project!
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 mb-8 font-normal">
          Whether you need a full-cycle React Native mobile build from scratch, offline-first data synchronization, or performance optimization for an existing Android & iOS codebase.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#3875DE] hover:bg-[#2962C4] shadow-lg shadow-[#3875DE]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Let's Work Together</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
