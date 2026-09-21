import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';

const rotatingPhrases = [
  "DELIVER",
  "CONVERT",
  "SCALE"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92dvh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-16 overflow-hidden isolate bg-white">
      
      {/* Three Soft Floating Atmospheric Bubbles on Right Side */}
      <HeroBackground />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-3 md:mt-8">
        
        {/* Top Eyebrow Status */}
        <motion.div 
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 sm:mb-6 text-[#456E9E] italic text-xs sm:text-sm md:text-base font-serif flex items-center justify-center gap-1.5"
        >
          <span className="text-xs">•</span>
          <span>Available for selected projects</span>
        </motion.div>
        
        {/* Condensed Ultra-Tall Display Headline (3 Lines) - LCP optimized */}
        <motion.h1 
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="font-display font-bold tracking-tight text-[10vw] xs:text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.92] sm:leading-[0.9] uppercase flex flex-col items-center w-full select-none"
        >
          <span className="block text-[#143564] whitespace-nowrap">I BUILD DIGITAL</span>
          <span className="block text-[#143564] mt-0.5 sm:mt-1 whitespace-nowrap">EXPERIENCES</span>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mt-1 sm:mt-2 w-full whitespace-nowrap">
            <span className="text-[#143564]">THAT</span>
            <span className="inline-grid relative items-center justify-items-center text-[#5581B8]">
              <span className="invisible col-start-1 row-start-1 pointer-events-none select-none">
                DELIVER
              </span>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 18, filter: "blur(2px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(2px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="col-start-1 row-start-1 whitespace-nowrap"
                >
                  {rotatingPhrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.h1>
        
        {/* Specialty Tag below Headline and above Description */}
        <motion.div 
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 sm:mt-7 mb-2 sm:mb-3"
        >
          <span className="inline-block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#143564] bg-[#143564]/5 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#143564]/10">
            WordPress & WooCommerce Specialist
          </span>
        </motion.div>
        
        {/* Supporting Description */}
        <motion.p 
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-[1.05rem] text-[#1E3A68]/85 max-w-[340px] sm:max-w-lg md:max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          I help businesses turn their identity into high-performing websites that build trust, generate more leads and sales, and create real business value.
        </motion.p>
        
        {/* CTA Buttons: Polished Single-Line Mobile Experience */}
        <motion.div 
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4.5 w-full max-w-lg sm:max-w-none sm:w-auto px-1">
            {/* Primary Navy Pill with Avatar */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center pl-2 sm:pl-2.5 pr-3.5 sm:pr-6 py-2.5 sm:py-3 text-[11px] xs:text-xs sm:text-sm font-bold sm:font-semibold text-white bg-[#16345F] hover:bg-[#11284A] rounded-full shadow-[0_10px_25px_-5px_rgba(22,52,95,0.38)] hover:shadow-[0_14px_28px_-4px_rgba(22,52,95,0.48)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group whitespace-nowrap"
            >
              <img 
                src="/images/profile/founder.webp" 
                alt="Sayed Ahmad" 
                width={28}
                height={28}
                decoding="async"
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover border border-white/90 mr-1.5 sm:mr-2.5 flex-shrink-0"
              />
              <span>LET'S WORK TOGETHER &rarr;</span>
            </Link>
            
            {/* Secondary Clean Outline Pill */}
            <Link 
              to="/work" 
              className="inline-flex items-center justify-center px-3.5 sm:px-6 py-2.5 sm:py-3 text-[11px] xs:text-xs sm:text-sm font-bold sm:font-semibold text-[#16345F] bg-white border-[1.6px] border-[#16345F] hover:bg-[#16345F] hover:text-white rounded-full hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group whitespace-nowrap"
            >
              <span>VIEW MY WORK &rarr;</span>
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

