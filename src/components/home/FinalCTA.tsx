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
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0B132B] text-[#FAF8F5] relative overflow-hidden border-t border-white/5 content-visibility-auto"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[52px] font-display font-bold text-[#FAF8F5] uppercase tracking-tight leading-[1.14] sm:leading-[1.1] mb-3.5 sm:mb-5 md:mb-6 max-w-4xl"
          >
            <span className="block">Ready to Build Something</span>
            <span className="block text-[#FAF8F5]/90">That Moves Your Business Forward?</span>
          </motion.h2>

          {/* Supporting Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-[13.5px] sm:text-[15.5px] md:text-[18px] text-[#FAF8F5]/75 leading-relaxed font-normal max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-1"
          >
            Whether you need a new business website, a better eCommerce experience, a custom web solution, or help turning an idea into a working product, let's talk about what you're trying to achieve.
          </motion.p>

          {/* Action Buttons: Primary & Secondary */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <a 
              href="https://cal.com/sayed-ahmad/project-consultation" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 1:1 Call with Sayed Ahmad (opens in a new tab)"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#0B132B] bg-[#FAF8F5] rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(250,248,245,0.1)] hover:shadow-[0_8px_28px_rgba(250,248,245,0.2)] hover:-translate-y-0.5 group"
            >
              <span>Book a 1:1 Call</span>
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B132B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#FAF8F5] bg-white/[0.04] border border-white/15 rounded-full hover:bg-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Understated Personal Brand Closing Detail */}
          <motion.div 
            variants={itemVariants}
            className="w-full mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] md:text-[11.5px] font-mono tracking-[0.16em] sm:tracking-[0.18em] text-[#FAF8F5]/45 uppercase text-center sm:text-left gap-2 sm:gap-4"
          >
            <span>DIRECT COMMUNICATION • CLEAR DELIVERY • BUILT FOR BUSINESS VALUE</span>
            <span className="text-[#FAF8F5]/35">SAYED AHMAD • WEB DEVELOPMENT PARTNER</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

