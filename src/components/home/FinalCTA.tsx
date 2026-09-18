import { Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FinalCTA() {
  return (
    <section 
      id="contact-cta"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0B132B] text-[#FAF8F5] relative overflow-hidden border-t border-white/5"
    >
      {/* Subtle Warm Amber & Gold Radial Atmosphere */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] bg-[#D4AF37]/[0.035] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#1E2942]/30 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Accent */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-[11.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
              START A CONVERSATION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] xl:text-[54px] font-display font-bold text-[#FAF8F5] uppercase tracking-tight leading-[1.12] sm:leading-[1.08] mb-3.5 sm:mb-5 md:mb-6 max-w-3xl"
          >
            <span className="block">Ready to Build</span>
            <span className="block text-[#FAF8F5]/90">Something That Matters?</span>
          </motion.h2>

          {/* Supporting Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-[13.5px] sm:text-[15.5px] md:text-[18px] text-[#FAF8F5]/75 leading-relaxed font-normal max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-1"
          >
            Whether you need reliable white-label development support, a business website, an eCommerce experience, or a custom digital solution, let's discuss what you're trying to achieve.
          </motion.p>

          {/* Action Buttons: Primary & Secondary */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-3.5 md:py-4 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#0B132B] bg-[#FAF8F5] rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(250,248,245,0.08)] hover:shadow-[0_8px_28px_rgba(250,248,245,0.18)] hover:-translate-y-0.5 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B132B] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a 
              href="https://cal.com/sayed-ahmad/project-consultation" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 1:1 Call with Sayed Ahmad (opens in a new tab)"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-3.5 md:py-4 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#FAF8F5] bg-white/[0.04] border border-white/15 rounded-full hover:bg-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>Book a 1:1 Call</span>
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Audience Pathways: 2 Tailored Entry Points */}
          <motion.div 
            variants={itemVariants}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-left"
          >
            {/* Card 1: For Digital Agencies */}
            <div className="group/card relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 bg-gradient-to-b from-white/[0.045] to-white/[0.015] border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#D4AF37]">
                    FOR DIGITAL AGENCIES
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-medium text-[#FAF8F5] tracking-tight mb-2 sm:mb-2.5 leading-snug">
                  White-Label Development Partner
                </h3>

                <p className="text-[13px] sm:text-[13.5px] md:text-sm text-[#FAF8F5]/70 leading-relaxed font-normal mb-4 sm:mb-6">
                  Need a dependable white-label development partner for overflow work or ongoing support?
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-white/10">
                <Link 
                  to="/contact?inquiry=agency"
                  className="inline-flex items-center gap-2 text-[11.5px] sm:text-xs md:text-[12.5px] font-semibold tracking-wider text-[#FAF8F5] group-hover/card:text-[#D4AF37] transition-colors uppercase"
                >
                  <span>Discuss a Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover/card:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: For Businesses & Founders */}
            <div className="group/card relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 bg-gradient-to-b from-white/[0.045] to-white/[0.015] border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#D4AF37]">
                    FOR BUSINESSES & FOUNDERS
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-display font-medium text-[#FAF8F5] tracking-tight mb-2 sm:mb-2.5 leading-snug">
                  Direct Digital Project Delivery
                </h3>

                <p className="text-[13px] sm:text-[13.5px] md:text-sm text-[#FAF8F5]/70 leading-relaxed font-normal mb-4 sm:mb-6">
                  Have a website, eCommerce project, or custom digital product that needs to be built properly?
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-white/10">
                <Link 
                  to="/contact?inquiry=project"
                  className="inline-flex items-center gap-2 text-[11.5px] sm:text-xs md:text-[12.5px] font-semibold tracking-wider text-[#FAF8F5] group-hover/card:text-[#D4AF37] transition-colors uppercase"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover/card:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Understated Personal Brand Closing Detail */}
          <motion.div 
            variants={itemVariants}
            className="w-full mt-8 sm:mt-12 md:mt-16 pt-5 sm:pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-mono tracking-[0.16em] sm:tracking-[0.18em] text-[#FAF8F5]/45 uppercase text-center sm:text-left gap-2 sm:gap-4"
          >
            <span>DIRECT COMMUNICATION • CLEAR DELIVERY • BUILT TO LAST</span>
            <span className="text-[#FAF8F5]/30">SAYED AHMAD • WEB DEVELOPMENT PARTNER</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

