import { motion, type Variants } from 'motion/react';

interface OutcomeItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

const outcomes: OutcomeItem[] = [
  {
    number: "01",
    tag: "CREDIBILITY",
    title: "BUILD TRUST",
    description: "Make the business easier to understand, trust, and choose."
  },
  {
    number: "02",
    tag: "CONVERSION",
    title: "CREATE OPPORTUNITIES",
    description: "Turn clear messaging and purposeful user journeys into meaningful enquiries."
  },
  {
    number: "03",
    tag: "EXPERIENCE",
    title: "IMPROVE EXPERIENCES",
    description: "Make every interaction simpler, faster, and more intuitive for visitors and customers."
  },
  {
    number: "04",
    tag: "EFFICIENCY",
    title: "SIMPLIFY OPERATIONS",
    description: "Connect functionality and workflows to reduce friction behind the scenes."
  }
];

export default function ValueProposition() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section 
      id="business-value"
      className="py-22 sm:py-28 lg:py-32 bg-[#0B0F17] text-[#FAF8F5] relative overflow-hidden border-t border-b border-white/[0.06]"
    >
      {/* Delicate background ambient illumination */}
      <div 
        className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/[0.025] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch"
        >
          {/* Left Column: 35-40% width */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <span className="inline-block text-[11.5px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#D4AF37] mb-4">
                BEYOND THE WEBSITE ITSELF
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-display font-medium text-[#FAF8F5] leading-[1.12] tracking-tight mb-6">
                A Website Should Do More Than Exist.
              </h2>

              {/* Supporting text */}
              <p className="text-[16px] sm:text-[17px] text-[#A6AFBD] leading-relaxed font-normal max-w-xl">
                It should build trust, create opportunities, improve experiences, and make business easier to run.
              </p>
            </div>

            {/* Closing Micro-Line */}
            <div className="pt-8 sm:pt-10 border-t border-white/[0.08] mt-10 lg:mt-14">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                <p className="text-[14px] sm:text-[14.5px] leading-relaxed">
                  <span className="text-[#FAF8F5] font-medium">Good design attracts attention.</span>{' '}
                  <span className="text-[#9BA3AF]">Business-focused design gives that attention a purpose.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 60-65% width - Refined 2x2 Outcome Editorial Grid */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-7 flex items-center"
          >
            <div className="w-full rounded-2xl lg:rounded-3xl border border-white/10 bg-white/[0.015] overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {outcomes.map((outcome, index) => {
                  // Mathematical border styling to create a seamless '+' cross-divider
                  const isTopLeft = index === 0;
                  const isTopRight = index === 1;
                  const isBottomLeft = index === 2;
                  const isBottomRight = index === 3;

                  let borderClasses = '';
                  if (isTopLeft) {
                    borderClasses = 'border-b border-white/10 sm:border-r';
                  } else if (isTopRight) {
                    borderClasses = 'border-b border-white/10';
                  } else if (isBottomLeft) {
                    borderClasses = 'border-b sm:border-b-0 border-white/10 sm:border-r';
                  } else if (isBottomRight) {
                    borderClasses = '';
                  }

                  return (
                    <div
                      key={outcome.number}
                      id={`outcome-${outcome.number}`}
                      className={`group relative p-7 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.025] min-h-[220px] sm:min-h-[240px] ${borderClasses}`}
                    >
                      {/* Oversized Ghost Number */}
                      <span 
                        className="absolute top-5 right-6 sm:top-6 sm:right-7 text-4xl sm:text-5xl lg:text-6xl font-display font-light text-white/[0.07] group-hover:text-[#D4AF37]/25 transition-colors duration-300 select-none pointer-events-none"
                        aria-hidden="true"
                      >
                        {outcome.number}
                      </span>

                      {/* Content Area */}
                      <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                        {/* Eyebrow / Small Number indicator */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80 group-hover:bg-[#D4AF37] transition-colors" />
                          <span className="text-[10.5px] font-mono tracking-[0.16em] uppercase text-[#D4AF37] font-semibold">
                            {outcome.number} / {outcome.tag}
                          </span>
                        </div>

                        {/* Outcome Title */}
                        <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-display font-medium text-[#FAF8F5] group-hover:text-white tracking-wide mb-3 transition-colors duration-300 leading-snug">
                          {outcome.title}
                        </h3>

                        {/* Outcome Description */}
                        <p className="text-[13.5px] sm:text-[14px] text-[#A6AFBD] group-hover:text-[#D1D7E0] leading-relaxed font-normal transition-colors duration-300 max-w-xs">
                          {outcome.description}
                        </p>
                      </div>

                      {/* Minimal Directional Line / Subtle Accent Indicator */}
                      <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between">
                        <div className="w-4 h-px bg-white/20 group-hover:w-8 group-hover:bg-[#D4AF37] transition-all duration-300" />
                        <svg 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          className="w-3.5 h-3.5 text-white/25 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          aria-hidden="true"
                        >
                          <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
