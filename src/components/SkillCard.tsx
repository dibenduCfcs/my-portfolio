import React from 'react';
import type { SkillCategory } from '../types/portfolio';
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Wrench,
  type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Layers,
  Server,
  Database,
  Cpu,
  Wrench
};

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
  isLast?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, className = '', isLast = false }) => {
  const IconComponent = iconMap[category.icon] || Code2;

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between py-4 sm:py-5 ${
        isLast ? '' : 'border-b border-slate-100'
      } px-3 sm:px-5 rounded-xl hover:bg-blue-50/30 transition-colors gap-3 md:gap-6 ${className}`}
    >
      {/* Category Title & Icon */}
      <div className="md:w-60 lg:w-64 shrink-0 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-[#3875DE] flex items-center justify-center shrink-0">
          <IconComponent className="w-4 h-4" />
        </div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
          {category.title}
        </h3>
      </div>

      {/* Skills Pill List */}
      <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-800 border border-slate-200/60 hover:bg-white hover:border-[#3875DE]/60 hover:text-[#3875DE] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
