import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { Check } from 'lucide-react';
import { techStack, techPrinciples, type Technology } from '../../data/techStack';

export default function TechnicalFoundations() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  const topRowTechs = techStack.filter(t => t.row === 'top');
  const bottomRowTechs = techStack.filter(t => t.row === 'bottom');

  return (
    <div 
      id="technical-foundations"
      className="mt-14 sm:mt-20 md:mt-24 lg:mt-32 pt-10 sm:pt-14 md:pt-16 sm:pt-20 border-t border-[#0B132B]/10 relative"
    >
      {/* Ambient background lighting */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#D4AF37]/[0.025] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#0B132B]/[0.02] rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-14 items-center"
      >
        {/* LEFT COLUMN: Editorial Content & Principles (~40% on Desktop) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between z-10"
        >
          <div>
            {/* Eyebrow with gold dash */}
            <div className="flex items-center gap-3 mb-3.5 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#D4AF37] rounded-full" />
              <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase text-[#0B132B]/60">
                TECHNICAL FOUNDATIONS & TOOLING
              </span>
            </div>

            {/* Headline with 2-part editorial contrast */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] tracking-tight leading-[1.1] mb-4 sm:mb-6">
              <span className="block font-display font-bold text-[#0B132B]">
                Modern Tools.
              </span>
              <span className="block font-serif italic font-normal text-[#0B132B] mt-1">
                Real-World Results.
              </span>
            </h2>

            {/* Supporting paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] md:text-[16.5px] text-[#0B132B]/70 leading-relaxed font-normal max-w-lg mb-6 sm:mb-8">
              I work with proven technologies and practical development workflows to build fast, maintainable, and business-focused digital solutions.
            </p>

            {/* 4 Supporting Principles in 2x2 layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3.5 mb-6 sm:mb-8 max-w-lg">
              {techPrinciples.map((principle) => (
                <div key={principle.id} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 text-[#8C701B]">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#0B132B]/85">
                    {principle.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Architectural Status Line */}
            <div className="pt-4 sm:pt-5 border-t border-[#0B132B]/8 flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-[0.14em] uppercase text-[#0B132B]/50 max-w-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="font-semibold text-[#0B132B]/70">THE RIGHT TOOLS</span>
              <span className="text-[#0B132B]/20">/</span>
              <span>FOR PRACTICAL, LONG-LASTING VALUE</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Layered Code Panel & Floating Logo Cards (~60% on Desktop) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 xl:col-span-7 relative w-full"
        >
          {/* Top-Right Editorial Connected Label */}
          <div className="hidden xl:flex items-center justify-end gap-3 mb-4 pr-4">
            <span className="text-[9.5px] font-mono tracking-[0.18em] uppercase text-[#0B132B]/40 text-right leading-tight">
              FROM IDEAS<br />TO REAL SOLUTIONS
            </span>
            <div className="w-8 h-px bg-[#0B132B]/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>

          {/* Canvas Container with Ambient Lines & Code Panel */}
          <div className="relative pt-6 sm:pt-8 pb-4">
            
            {/* Background Decorative Connector SVG Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none stroke-[#0B132B]/[0.07]" 
              fill="none" 
              viewBox="0 0 700 450" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M50,160 C150,140 250,110 380,90 C480,75 580,90 660,60" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M120,330 C220,340 380,330 520,360 C580,375 620,370 650,380" strokeWidth="1" />
              <circle cx="380" cy="90" r="3" fill="#D4AF37" fillOpacity="0.4" />
              <circle cx="520" cy="360" r="3" fill="#D4AF37" fillOpacity="0.4" />
            </svg>

            {/* Dark Graphite Floating Code Panel in Background */}
            <div 
              className="relative mx-auto mb-[-24px] sm:mb-[-32px] max-w-[340px] sm:max-w-[420px] bg-[#121620] rounded-2xl p-4 sm:p-5 border border-white/10 shadow-[0_20px_50px_rgba(11,19,43,0.18)] z-0 transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[10px] font-mono text-white/30 ml-2">// core.config.ts</span>
              </div>

              {/* Realistic Code Lines */}
              <div className="font-mono text-[11px] sm:text-[12px] leading-relaxed text-slate-300">
                <div className="text-slate-500">// Build for real businesses</div>
                <div className="mt-0.5">
                  <span className="text-[#38BDF8]">const</span>{' '}
                  <span className="text-white">betterWeb</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-[#F59E0B]">true</span>;
                </div>
                <div className="text-slate-500 mt-0.5">// intentional, scalable, robust</div>
              </div>
            </div>

            {/* FOREGROUND: Tech Logo Cards Showcase */}
            <div className="relative z-10 space-y-4 sm:space-y-4">
              
              {/* TOP ROW: 6 Technologies (WordPress, WooCommerce, PHP, JavaScript, React, Next.js) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-3.5">
                {topRowTechs.map((tech) => (
                  <TechCard key={tech.id} tech={tech} />
                ))}
              </div>

              {/* BOTTOM ROW: 4 Technologies Centered (Tailwind, MySQL, REST APIs, Figma) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 max-w-3xl mx-auto">
                {bottomRowTechs.map((tech) => (
                  <TechCard key={tech.id} tech={tech} />
                ))}
              </div>

            </div>

            {/* Bottom-Right Editorial Sub-signature */}
            <div className="flex items-center justify-end gap-3 mt-6 pr-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
              <span className="text-[13.5px] font-serif italic text-[#0B132B]/80 font-normal">
                Better Tools. <span className="text-[#0B132B]">Stronger Solutions.</span>
              </span>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function TechCard({ tech }: { tech: Technology }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4.5 flex flex-col items-center justify-center text-center border border-[#0B132B]/8 shadow-[0_4px_20px_rgba(11,19,43,0.03)] hover:shadow-[0_12px_28px_rgba(11,19,43,0.07)] hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-300 min-h-[110px] sm:min-h-[136px]"
    >
      {/* Top Hairline Accent line on hover */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Logo container */}
      <div className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center mb-2 sm:mb-2.5 relative">
        {!imgError ? (
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-[#0B132B]/5 flex items-center justify-center font-mono font-bold text-xs text-[#0B132B]/70">
            {tech.shortLabel.slice(0, 3)}
          </div>
        )}
      </div>

      {/* Technology Name */}
      <div className="text-[12px] sm:text-[13.5px] font-display font-medium text-[#0B132B] group-hover:text-[#0B132B] transition-colors leading-tight mb-0.5 sm:mb-1">
        {tech.name}
      </div>

      {/* Category / Subtitle */}
      <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.14em] uppercase text-[#0B132B]/50 font-medium group-hover:text-[#8C701B] transition-colors">
        {tech.category}
      </div>
    </div>
  );
}
