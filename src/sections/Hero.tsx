import React from 'react';
import { personalInfo } from '../data/socialLinks';
import { Download, ArrowRight, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Pastel Gradient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-200/35 via-sky-100/25 to-indigo-100/25 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-blue-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] bg-sky-50/50 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Intro */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3875DE] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#3875DE]">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-4">
              Dibendu Gorai
            </h1>

            {/* Title / Role */}
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3875DE] via-blue-600 to-indigo-800 mb-5">
              {personalInfo.title}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              I build scalable, high-performance mobile and web applications using 
              <span className="font-semibold text-slate-900"> React Native</span>, 
              <span className="font-semibold text-slate-900"> React.js</span>, 
              <span className="font-semibold text-slate-900"> Next.js</span>, and 
              <span className="font-semibold text-slate-900"> TypeScript</span>. 
              Specialized in offline-first mobile architecture, enterprise web platforms, and automated CI/CD releases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#3875DE] to-blue-600 hover:from-[#2962C4] hover:to-blue-700 shadow-lg shadow-[#3875DE]/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-slate-200/90 hover:bg-slate-50 hover:border-blue-300 shadow-xs transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-[#3875DE]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Contact Quick-Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Connect:
              </span>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50/50 shadow-2xs transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50/50 shadow-2xs transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.emailMailto}
                className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50/50 shadow-2xs transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.phoneTel}
                className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-[#3875DE] hover:border-blue-200 hover:bg-blue-50/50 shadow-2xs transition-all"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Photograph (without side floating badges) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Soft Pastel Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3875DE]/25 via-sky-300/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Image Container */}
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[4/5] rounded-[36px] bg-gradient-to-b from-white via-blue-50/40 to-blue-100/50 p-2.5 shadow-2xl border border-white/80 ring-1 ring-slate-100/80">
              <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-slate-100 shadow-inner group">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom of photo for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Available Status Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>

                {/* Identity Tag at bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-slate-900">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#3875DE]">
                        React Native Developer
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#3875DE] flex items-center justify-center font-bold text-xs">
                      {personalInfo.monogram}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Bar underneath Hero with all 5 updated metrics */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm shadow-blue-900/5">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-3 text-center ${
                  idx !== 0 ? 'border-t sm:border-t-0 sm:border-l border-slate-100' : ''
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3875DE] to-blue-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
