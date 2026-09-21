import { motion, useScroll, useSpring } from 'motion/react';

/**
 * ScrollProgressBar renders a subtle, high-performance animated progress bar
 * fixed at the very top edge of the viewport.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-black/[0.03]"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-gradient-to-r from-[#D4AF37] via-[#E8CA65] to-[#16345F] origin-left shadow-[0_0_8px_rgba(212,175,55,0.45)]"
      />
    </div>
  );
}
