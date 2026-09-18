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
        
        {/* Highlighted Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-10 inline-flex items-center justify-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-[0_2px_16px_rgba(212,175,55,0.18)] hover:border-[#D4AF37]/70 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11.5px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0B132B]">
            Available for selected projects
          </span>
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
        
        {/* CTAs: Clean, editorial, single primary with understated secondary */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link 
              to="/#selected-work" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-[0.75rem] md:text-[0.8rem] font-bold tracking-[0.18em] uppercase text-white bg-brand-text rounded-full hover:bg-opacity-90 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 text-[0.75rem] md:text-[0.8rem] font-extrabold tracking-[0.18em] uppercase text-brand-text bg-[#FAF8F5] border-2 border-brand-text/15 hover:border-brand-text hover:bg-brand-text hover:text-white rounded-full transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-98"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowRight className="ml-2 w-4 h-4 text-brand-accent group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
