import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';

const rotatingPhrases = [
  "PERFORM", 
  "CONVERT", 
  "SCALE", 
  "DELIVER"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden isolate">
      
      {/* Soft Glassy Atmospheric Orbs */}
      <HeroBackground />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-6 md:mt-12">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-10 flex items-center justify-center text-brand-muted text-[0.8rem] md:text-[0.95rem] italic font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 mr-3 shadow-sm mb-0.5"></span>
          Available for selected projects
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display font-bold text-[14vw] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.95] md:leading-[0.9] tracking-wide text-brand-text uppercase flex flex-col items-center w-full"
        >
          <span className="block">I BUILD</span>
          <span className="block">DIGITAL</span>
          <span className="block">EXPERIENCES</span>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-5 mt-2 md:mt-3 w-full">
            <span>THAT</span>
            {/* The inline-grid ensures the container fits the widest word without layout shifts */}
            <span className="inline-grid relative items-center justify-items-center text-brand-accent">
              <span className="invisible col-start-1 row-start-1 pointer-events-none select-none">DELIVER</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="col-start-1 row-start-1 whitespace-nowrap"
                >
                  {rotatingPhrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.h1>
        
        {/* Role Label */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 md:mt-12 mb-6"
        >
           <span className="inline-block text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.25em] text-[#0B132B] uppercase bg-[#0B132B]/5 px-4 py-2 rounded-full border border-[#0B132B]/10">
             WORDPRESS & WOOCOMMERCE SPECIALIST
           </span>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-[1.05rem] text-brand-muted max-w-[320px] md:max-w-[480px] mx-auto mb-10 md:mb-12 leading-relaxed font-medium"
        >
          I help agencies and businesses turn designs, ideas, and complex requirements into reliable, production-ready digital experiences.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/work" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 md:py-4 text-[0.75rem] md:text-[0.8rem] font-bold tracking-widest text-white bg-brand-text rounded-full hover:bg-opacity-90 transition-colors group shadow-sm"
            >
              VIEW MY WORK 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 md:py-4 text-[0.75rem] md:text-[0.8rem] font-bold tracking-widest text-brand-text bg-white border border-brand-text/10 rounded-full hover:border-brand-text/30 transition-all group shadow-sm"
            >
              LET'S WORK TOGETHER
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Secondary Editorial Story CTA - Single Line Clean Highlight */}
          <div className="mt-5 md:mt-6 flex items-center justify-center">
            <Link
              to="/my-story"
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold tracking-[0.14em] uppercase text-stone-900 bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/20 transition-all duration-200 py-1.5 px-4 rounded-full group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C701B]" />
              <span className="group-hover:text-[#8C701B] transition-colors">
                MEET THE PERSON BEHIND THE WORK
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8C701B] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
