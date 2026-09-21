import React from 'react';
import { motion } from 'motion/react';

const strategicPillars = [
  { label: 'Brand Positioning', desc: 'Establishing immediate credibility and distinction' },
  { label: 'Website Structure', desc: 'Intuitive information architecture that guides visitors' },
  { label: 'Customer Psychology', desc: 'Answering core questions before doubts emerge' },
  { label: 'Content Hierarchy', desc: 'Prioritizing essential messaging without visual clutter' },
  { label: 'Conversion Journeys', desc: 'Frictionless pathways toward inquiries and transactions' },
  { label: 'Performance & Speed', desc: 'Fast loading that keeps visitors engaged' },
  { label: 'Mobile Usability', desc: 'Flawless execution on every screen dimension' },
  { label: 'Technical Reliability', desc: 'Clean, robust code built for long-term endurance' },
];

export default function StrategyConstellation() {
  return (
    <div className="my-10 sm:my-14 p-6 sm:p-10 rounded-3xl bg-[#0B132B] text-[#FAF8F5] relative overflow-hidden border border-white/10">
      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative z-10 text-center mb-8 sm:mb-10">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] block mb-2 font-bold">
          THE INTERCONNECTED DISCIPLINE
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-[#FAF8F5]">
          Where Strategy Meets Engineering
        </h3>
        <p className="text-xs sm:text-sm text-[#FAF8F5]/60 max-w-lg mx-auto mt-2 font-mono">
          A website is not an isolated design artifact; it is an orchestrated business mechanism.
        </p>
      </div>

      {/* Central Core with Orbiting Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {strategicPillars.map((pillar, idx) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-4 sm:p-5 rounded-xl bg-white/[0.035] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                0{idx + 1}
              </span>
            </div>
            <h4 className="text-sm sm:text-[15px] font-semibold text-[#FAF8F5] tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors">
              {pillar.label}
            </h4>
            <p className="text-xs text-[#FAF8F5]/60 leading-snug">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Center Anchor Statement */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-center text-center">
        <span className="text-[10.5px] sm:text-xs font-mono tracking-[0.18em] uppercase text-[#D4AF37]/90 font-semibold">
          CENTERED ON: BUSINESS OUTCOMES • NOT JUST SURFACE AESTHETICS
        </span>
      </div>
    </div>
  );
}
