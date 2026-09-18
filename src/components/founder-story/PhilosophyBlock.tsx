import React from 'react';
import { motion } from 'motion/react';

export default function PhilosophyBlock() {
  const principles = [
    {
      num: '01',
      title: 'UNDERSTAND',
      tagline: 'Grasp the commercial reality before touching a line of code.',
      desc: 'Understand business model, target audience, competitive landscape, and the conversion action needed.',
    },
    {
      num: '02',
      title: 'BUILD',
      tagline: 'Construct with architectural discipline and intentional simplicity.',
      desc: 'Choose the right tech stack, write clean and maintainable code, and avoid unnecessary bloat or fragile hacks.',
    },
    {
      num: '03',
      title: 'REFINE',
      tagline: 'Examine every viewport, loading state, and user micro-interaction.',
      desc: 'Obsess over typography hierarchy, page load latency, mobile ergonomics, and frictionless form completion.',
    },
    {
      num: '04',
      title: 'DELIVER',
      tagline: 'Hand over an asset built for long-term operational autonomy.',
      desc: 'Provide clear documentation, transparent client communication, seamless hosting handover, and ongoing support.',
    },
  ];

  return (
    <div className="my-10 sm:my-14 py-8 sm:py-12 border-y border-stone-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {principles.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#8C701B] block mb-2">
                PRINCIPLE {p.num}
              </span>
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 uppercase tracking-tight mb-2">
                {p.title}
              </h4>
              <p className="text-xs sm:text-[13px] font-semibold text-stone-800 leading-snug mb-3">
                {p.tagline}
              </p>
            </div>
            <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed pt-3 border-t border-stone-200">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
