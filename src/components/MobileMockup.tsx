import React from 'react';
import type { Project } from '../types/portfolio';
import { MapPin, Wifi, Shield, UserCheck, RefreshCw } from 'lucide-react';

interface MobileMockupProps {
  project: Project;
}

export const MobileMockup: React.FC<MobileMockupProps> = ({ project }) => {
  // If a real production screenshot is provided, display the 100% full screenshot
  // without any cropping, fake notches, fake status bars, top badges, or hover scale/bounce
  if (project.realScreenshotUrl) {
    return (
      <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] rounded-[26px] bg-slate-900 p-2 sm:p-2.5 shadow-xl ring-1 ring-slate-800/80">
        <div className="relative w-full rounded-[18px] overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
          <img
            src={project.realScreenshotUrl}
            alt={`${project.name} Production Screenshot`}
            className="w-full h-auto block select-none pointer-events-none"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // Fallback interactive UI mockup for confidential projects without uploaded screenshots
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] aspect-[460/960] rounded-[28px] bg-slate-900 p-2.5 shadow-xl ring-1 ring-slate-800/80 flex flex-col">
      <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-slate-50 flex flex-col text-slate-800 select-none">
        {/* Status Bar */}
        <div className="h-7 px-4 pt-1.5 flex items-center justify-between text-[10px] font-semibold text-slate-500 bg-white/70 backdrop-blur-xs shrink-0">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-2.5 h-2.5" />
            <div className="w-4 h-2 rounded-xs border border-slate-500 p-0.5">
              <div className="w-full h-full bg-slate-700 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Dynamic Project Screen Content */}
        {project.id === 'omada-hrms' && (
          <div className="flex-1 p-3.5 flex flex-col justify-between bg-gradient-to-b from-blue-50/60 via-white to-slate-50">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-[#3875DE] tracking-wide uppercase">Omada HRMS</span>
                <span className="flex items-center gap-1 text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Geofence Active
                </span>
              </div>

              {/* Punch In Card */}
              <div className="p-3 bg-white rounded-xl shadow-xs border border-blue-100 mb-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#3875DE]">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-800">Shift: General (9 AM - 6 PM)</p>
                    <p className="text-[9px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#3875DE]" /> Sector 62 Office (In-range)
                    </p>
                  </div>
                </div>

                <div className="bg-[#3875DE] text-white text-center py-2 rounded-lg font-bold text-[11px] shadow-sm shadow-blue-400">
                  Selfie &amp; Location Punch
                </div>
              </div>

              {/* Attendance metrics */}
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="p-2 bg-white rounded-lg border border-slate-100">
                  <div className="text-[12px] font-bold text-slate-800">22</div>
                  <div className="text-[8px] text-slate-500 uppercase">Present</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-100">
                  <div className="text-[12px] font-bold text-amber-600">01</div>
                  <div className="text-[8px] text-slate-500 uppercase">Late</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-100">
                  <div className="text-[12px] font-bold text-[#3875DE]">04</div>
                  <div className="text-[8px] text-slate-500 uppercase">Leaves</div>
                </div>
              </div>
            </div>

            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-between text-[9px] text-blue-900">
              <span className="font-semibold">Next Salary Slip Ready</span>
              <span className="underline font-bold">Download</span>
            </div>
          </div>
        )}

        {project.id === 'bharat-bank-w' && (
          <div className="flex-1 p-3.5 flex flex-col justify-between bg-gradient-to-b from-blue-50/60 via-white to-slate-50">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-blue-700 tracking-wide uppercase">Bharat Bank W</span>
                <span className="flex items-center gap-1 text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-medium">
                  <Shield className="w-2.5 h-2.5" /> Biometric Secured
                </span>
              </div>

              {/* UPI Card */}
              <div className="p-3 bg-gradient-to-tr from-blue-700 to-indigo-700 text-white rounded-xl shadow-md mb-2.5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] text-blue-200">Total Available Balance</span>
                  <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">UPI</span>
                </div>
                <p className="text-[15px] font-extrabold tracking-tight">₹ 84,250.00</p>
                <p className="text-[8px] text-blue-200 mt-2 font-mono">•••• •••• •••• 4028</p>
              </div>

              {/* Payment Actions */}
              <div className="grid grid-cols-3 gap-1.5 text-center mb-2">
                <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                  <div className="w-5 h-5 mx-auto bg-blue-50 text-blue-600 rounded flex items-center justify-center text-[10px] font-bold mb-1">
                    UPI
                  </div>
                  <span className="text-[8px] font-semibold text-slate-700 block">Transfer</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                  <div className="w-5 h-5 mx-auto bg-blue-50 text-blue-600 rounded flex items-center justify-center text-[10px] font-bold mb-1">
                    ⚡
                  </div>
                  <span className="text-[8px] font-semibold text-slate-700 block">Bills</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs">
                  <div className="w-5 h-5 mx-auto bg-blue-50 text-blue-600 rounded flex items-center justify-center text-[10px] font-bold mb-1">
                    📱
                  </div>
                  <span className="text-[8px] font-semibold text-slate-700 block">Recharge</span>
                </div>
              </div>
            </div>

            <div className="p-2 bg-slate-100 rounded-lg flex items-center justify-between text-[9px] text-slate-600">
              <span className="font-medium">Recent: Electricity Bill Paid</span>
              <span className="font-bold text-slate-800">₹1,420</span>
            </div>
          </div>
        )}

        {project.id === 'omniassist-w' && (
          <div className="flex-1 p-3.5 flex flex-col justify-between bg-gradient-to-b from-purple-50/60 via-white to-slate-50">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-purple-700 tracking-wide uppercase">OmniAssist DMS</span>
                <span className="flex items-center gap-1 text-[8px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-full font-bold">
                  <RefreshCw className="w-2 h-2 animate-spin" /> Realm Synced
                </span>
              </div>

              {/* Route Map Card */}
              <div className="p-2.5 bg-white rounded-xl shadow-xs border border-purple-100 mb-2">
                <div className="flex items-center justify-between text-[9px] text-slate-500 mb-1.5">
                  <span className="font-semibold text-slate-800">Daily Sales Route (GT)</span>
                  <span className="text-purple-600 font-bold">8 / 12 Outlets</span>
                </div>

                <div className="h-14 rounded-lg bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:6px_6px]" />
                  <div className="relative z-10 flex items-center gap-1.5 text-[9px] font-semibold text-purple-900 bg-white/90 px-2 py-1 rounded shadow-xs">
                    <MapPin className="w-3 h-3 text-purple-600" /> Next: Sharma Wholesalers
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-2 bg-white rounded-lg border border-slate-100 flex items-center justify-between text-[9px]">
                <div>
                  <div className="text-[8px] text-slate-400 uppercase font-semibold">Orders Booked (Offline)</div>
                  <div className="text-[12px] font-extrabold text-slate-800">₹ 2,45,800</div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[8px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">
                    +50% Sales Boost
                  </span>
                </div>
              </div>
            </div>

            <div className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center text-[9px] font-bold shadow-xs">
              + New Retailer Order (Offline Mode)
            </div>
          </div>
        )}

        {/* Home Indicator */}
        <div className="h-3 flex items-center justify-center bg-white/70 mt-auto shrink-0">
          <div className="w-20 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
