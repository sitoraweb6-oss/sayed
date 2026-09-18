import React from 'react';
import { motion } from 'motion/react';

export default function JourneyTimeline() {
  const stages = [
    {
      marker: '01',
      phase: 'MARKETING & PROMOTION',
      subtitle: 'Understanding real business drivers',
      detail: 'Observing how client acquisition works and why social media campaigns alone cannot substitute for an owned digital home.',
    },
    {
      marker: '02',
      phase: 'STRUCTURED LEARNING',
      subtitle: 'Two institutes in Dhaka & intensive study',
      detail: 'Nearly two years of disciplined technical education in WordPress, PHP, front-end technologies, and database mechanics while commuting across Dhaka.',
    },
    {
      marker: '03',
      phase: 'BUSINESS-FOCUSED DEVELOPMENT',
      subtitle: 'Bridging engineering with commercial outcomes',
      detail: 'Architecting websites, WooCommerce stores, and custom solutions designed from inception to deliver tangible business utility.',
    },
  ];

  return (
    <div className="py-8 my-8 sm:my-12">
      {/* Minimal Vertical Journey Marker */}
      <div className="relative border-l-2 border-[#D4AF37]/30 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
        {stages.map((stage, idx) => (
          <motion.div 
            key={stage.phase}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Dot on line */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-stone-50 border-2 border-[#8C701B] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </span>

            <div className="flex items-baseline gap-2.5 mb-1.5">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#8C701B]">
                {stage.marker}
              </span>
              <h4 className="text-base sm:text-lg font-display font-bold text-stone-900 uppercase tracking-tight">
                {stage.phase}
              </h4>
            </div>

            <p className="text-xs sm:text-[13px] font-mono uppercase text-stone-400 mb-2">
              {stage.subtitle}
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
              {stage.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
