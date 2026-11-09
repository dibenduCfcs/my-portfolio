import React from 'react';
import { personalInfo } from '../data/socialLinks';
import { Download, CheckCircle2, Smartphone, Database, Zap, GitBranch, Shield, MapPin, Briefcase } from 'lucide-react';

const coreHighlights = [
  { icon: Smartphone, label: 'React Native (Android & iOS)' },
  { icon: Database, label: 'Offline-First & Realm Database' },
  { icon: Zap, label: 'Redux Toolkit State Architecture' },
  { icon: GitBranch, label: 'Fastlane CI/CD Store Pipelines' },
  { icon: Shield, label: 'Secure Biometrics & Deep Linking' },
  { icon: Briefcase, label: 'React.js, Next.js & CRM Portals' }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/60 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/30 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container mirroring Homepage.jpg */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-100/90 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Visual Profile Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-6 flex flex-col justify-between text-white shadow-xl shadow-blue-900/10">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#3875DE]/20 blur-2xl" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    About Me
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Profile Center Avatar */}
                <div className="relative z-10 text-center my-auto py-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#3875DE] to-blue-600 p-1 mb-4 shadow-lg ring-2 ring-white/20 overflow-hidden">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Dibendu Gorai
                  </h3>
                  <p className="text-xs font-medium text-blue-300 mt-1">
                    React Native Developer
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-2">
                    <MapPin className="w-3 h-3 text-[#3875DE]" /> Greater Noida, UP, India
                  </p>
                </div>

                {/* Bottom Quick Facts */}
                <div className="relative z-10 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase">Experience</span>
                    <span className="font-bold text-white text-sm">3.5+ Years</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase">Education</span>
                    <span className="font-bold text-white text-sm">B.Tech (8.2)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Professional Overview */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#3875DE] uppercase bg-blue-50 border border-blue-100 rounded-full">
                Engineering Journey
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                I am a Professional Frontend & Mobile Application Developer
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                With <strong>3.5+ years of production experience</strong> in frontend and mobile engineering, 
                I have built and delivered <strong>7+ applications</strong>, managed <strong>5+ App Store and Play Store deployments</strong>, 
                and delivered <strong>3+ enterprise CRM websites</strong> with extensive client handling.
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                My core expertise lies in architecting <strong>offline-first systems with Realm DB</strong>, low-latency REST API synchronization, state hydration using <strong>Redux Toolkit</strong>, and end-to-end automation with <strong>Fastlane</strong> for Google Play Store and Apple App Store deployments.
              </p>

              {/* Core Highlight Chips */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                {coreHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100/90 text-xs font-semibold text-slate-800"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#3875DE] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold text-white bg-[#3875DE] hover:bg-[#2962C4] shadow-md shadow-[#3875DE]/25 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold text-slate-800 bg-white border border-slate-200/90 hover:bg-slate-50 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Let's Discuss Opportunities</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
