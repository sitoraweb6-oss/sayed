import React from 'react';
import LocalImage from './LocalImage';

export default function SitoraWebBlock() {
  const deliveryPillars = [
    { title: 'CLIENT UNDERSTANDING', desc: 'Direct dialogue with business leadership to map objectives.' },
    { title: 'PROJECT DIRECTION', desc: 'Technical architecture, milestone planning, and technology selection.' },
    { title: 'QUALITY CONTROL', desc: 'Cross-browser, performance, security, and responsive inspection.' },
    { title: 'DELIVERY', desc: 'Smooth deployment, staging verification, and handover.' },
    { title: 'LONG-TERM SUPPORT', desc: 'Ongoing maintenance, iterative enhancements, and stability.' },
  ];

  return (
    <div className="my-10 sm:my-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Story Column (7 cols) */}
      <div className="lg:col-span-7 space-y-5 text-stone-600 leading-relaxed text-base sm:text-[17px]">
        <p>
          As projects and responsibilities expanded, I established <strong className="text-stone-900 font-semibold">Sitora Web</strong> as a dedicated platform through which I could deliver web development and digital solutions with greater professionalism, scale, and operational clarity.
        </p>
        <p>
          In the beginning, I handled almost every facet myself—from initial discovery and client communication to technical architecture, design translation, custom development, testing, revisions, and post-launch follow-up.
        </p>
        <p>
          As the volume and complexity of client engagements grew, I gradually formed relationships with a trusted circle of specialized collaborators who assist with specific facets of the delivery process.
        </p>
        <p>
          Today, I remain personally and directly involved in every engagement: scoping client requirements, defining project direction, conducting code reviews, solving technical bottlenecks, and ensuring the finished build genuinely accomplishes the commercial purpose it was commissioned for.
        </p>
      </div>

      {/* Sitora Web Identity & Operational Block (5 cols) */}
      <div className="lg:col-span-5">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B132B] text-[#FAF8F5] border border-white/10 relative overflow-hidden shadow-sm">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <span className="text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
              AGENCY & STUDIO PLATFORM
            </span>
            <span className="text-[10px] font-mono uppercase text-white/40">
              EST. 2021
            </span>
          </div>

          <div className="relative z-10 mb-6">
            <h4 className="text-2xl sm:text-3xl font-display font-bold text-[#FAF8F5] tracking-tight uppercase mb-2">
              Sitora Web
            </h4>
            <p className="text-xs sm:text-[13px] font-mono text-[#FAF8F5]/65">
              Purpose-built web solutions for businesses, with selected support for digital agencies.
            </p>
          </div>

          <div className="relative z-10 space-y-3 pt-2">
            {deliveryPillars.map((pillar, idx) => (
              <div key={pillar.title} className="flex items-start gap-2.5 text-left">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAF8F5] block">
                    {pillar.title}
                  </span>
                  <span className="text-[11px] text-[#FAF8F5]/60 leading-tight block">
                    {pillar.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAF8F5]/40">
              OPERATED PERSONALLY BY SAYED AHMAD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
