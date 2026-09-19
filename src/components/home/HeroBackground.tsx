export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Bubble 1: Large Soft Slate/Periwinkle Circle (Top Right) */}
      <div 
        className="absolute top-[8%] sm:top-[12%] right-[-5%] sm:right-[4%] lg:right-[8%] w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#DCE7F5]/90 blur-[1px] md:blur-[2px] opacity-90 animate-float-bubble-1"
      />

      {/* Bubble 2: Small Warm Amber/Gold Circle (Middle Right) */}
      <div 
        className="absolute top-[48%] sm:top-[50%] right-[3%] sm:right-[8%] lg:right-[11%] w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] lg:w-[105px] lg:h-[105px] rounded-full bg-[#F6E3B8]/95 blur-[1px] opacity-90 animate-float-bubble-2"
      />

      {/* Bubble 3: Medium Slate Blue Circle (Bottom Right - positioned safely below CTA zone on mobile) */}
      <div 
        className="absolute bottom-[2%] sm:bottom-[10%] md:bottom-[12%] right-[1%] sm:right-[12%] lg:right-[18%] w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] rounded-full bg-[#A8C2E2]/70 sm:bg-[#A8C2E2]/85 blur-[1px] opacity-70 sm:opacity-85 animate-float-bubble-1"
      />
    </div>
  );
}

