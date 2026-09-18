import { motion, useInView, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    stiffness: 150,
    damping: 25,
    mass: 1,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function TrustStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-6 md:py-12 lg:py-16 bg-[#FCFBFA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-11 border-t border-l border-[#0B132B]/10"
        >
          {/* 50+ Primary */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 lg:col-span-5 lg:row-span-2 border-b border-r border-[#0B132B]/10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            <span className="text-[#D4AF37] text-[40px] lg:text-[4.75rem] leading-none font-display font-bold tracking-tight">
              <AnimatedNumber value={50} suffix="+" />
            </span>
            <h3 className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#0B132B] mt-2 mb-1">Websites Shipped</h3>
            <p className="text-[10px] lg:text-sm text-[#0B132B]/60 font-medium leading-tight lg:leading-snug max-w-[260px]">More than websites—digital foundations for growing businesses.</p>
          </motion.div>

          {/* 4+ */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 lg:col-span-3 border-b border-r border-[#0B132B]/10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            <span className="text-[#0B132B] text-[40px] lg:text-[3.5rem] leading-none font-display font-bold tracking-tight">
              <AnimatedNumber value={4} suffix="+" />
            </span>
            <h3 className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#0B132B] mt-2 mb-1">Countries Served</h3>
            <p className="text-[10px] lg:text-sm text-[#0B132B]/60 font-medium leading-tight lg:leading-snug">Collaborating across different markets and business needs.</p>
          </motion.div>

          {/* 3+ */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 lg:col-span-3 border-b border-r border-[#0B132B]/10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            <span className="text-[#0B132B] text-[40px] lg:text-[3.5rem] leading-none font-display font-bold tracking-tight">
              <AnimatedNumber value={3} suffix="+" />
            </span>
            <h3 className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#0B132B] mt-2 mb-1">Years Building</h3>
            <p className="text-[10px] lg:text-sm text-[#0B132B]/60 font-medium leading-tight lg:leading-snug">Focused on practical, scalable, and conversion-aware solutions.</p>
          </motion.div>

          {/* Direct */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 lg:col-span-3 border-b border-r border-[#0B132B]/10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center"
          >
            <span className="text-[#0B132B] text-[24px] lg:text-[2.75rem] leading-none font-display font-bold tracking-tight uppercase">Direct</span>
            <h3 className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#0B132B] mt-2 mb-1">Developer Partner</h3>
            <p className="text-[10px] lg:text-sm text-[#0B132B]/60 font-medium leading-tight lg:leading-snug">One point of contact from implementation to delivery.</p>
          </motion.div>

          {/* Decorative Spacer (Desktop only) */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block lg:col-span-3 border-b border-r border-[#0B132B]/10 bg-gradient-to-br from-[#0B132B]/[0.02] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
