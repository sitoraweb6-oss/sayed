import { motion, useReducedMotion } from 'motion/react';

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Atmospheric Organic Orbs Animation Paths
  const orb1Anim = shouldReduceMotion ? { y: [0, -10, 0] } : {
    y: [0, -30, 20, 0],
    x: [0, 20, -10, 0],
    scale: [1, 1.05, 0.95, 1],
    rotate: [0, 5, -5, 0]
  };
  
  const orb2Anim = shouldReduceMotion ? { y: [0, 10, 0] } : {
    y: [0, 40, -15, 0],
    x: [0, -25, 20, 0],
    scale: [1, 1.02, 0.98, 1],
    rotate: [0, -8, 6, 0]
  };
  
  const orb3Anim = shouldReduceMotion ? { y: [0, -5, 0] } : {
    y: [0, -25, 30, 0],
    x: [0, 15, -25, 0],
    scale: [1, 0.96, 1.04, 1],
    rotate: [0, 10, -6, 0]
  };

  const orb4Anim = shouldReduceMotion ? { y: [0, 5, 0] } : {
    y: [0, 20, -20, 0],
    x: [0, -15, 25, 0],
    scale: [1, 1.04, 0.96, 1],
    rotate: [0, -5, 8, 0]
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large pale blue upper right */}
      <motion.div 
        animate={orb1Anim}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] md:top-[10%] right-[-10%] md:right-[5%] w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-[#B9D2ED] rounded-full blur-[80px] md:blur-[120px] opacity-40 md:opacity-50"
      />
      {/* Subtle pale blue left/mid */}
      <motion.div 
        animate={orb2Anim}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[45%] left-[-10%] md:top-[40%] md:left-[10%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-[#E8F0F8] rounded-full blur-[70px] md:blur-[100px] opacity-50 md:opacity-60"
      />
      {/* Muted blue bottom right */}
      <motion.div 
        animate={orb3Anim}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[5%] md:bottom-[10%] right-[10%] md:right-[20%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-[#C5D9F0] rounded-full blur-[70px] md:blur-[100px] opacity-40"
      />
      {/* Warm cream/yellow mid-right */}
      <motion.div 
        animate={orb4Anim}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] md:top-[50%] right-[5%] md:right-[15%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#F5E6C3] rounded-full blur-[60px] md:blur-[90px] opacity-60"
      />
    </div>
  );
}
