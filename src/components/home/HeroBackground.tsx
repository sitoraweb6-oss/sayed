export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 60% Opacity Animated Floating Orb 1 (Warm Champagne/Gold tone - Left/Center) */}
      <div 
        className="absolute top-[18%] left-[-6%] sm:left-[6%] md:left-[10%] w-[270px] h-[270px] sm:w-[390px] sm:h-[390px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#E6D5B8] via-[#F5EADB] to-[#DECBA5] blur-[45px] sm:blur-[65px] md:blur-[80px] opacity-60 mix-blend-multiply animate-float-bubble-1"
      />

      {/* 60% Opacity Animated Floating Orb 2 (Atmospheric Soft Slate/Mist tone - Right/Center) */}
      <div 
        className="absolute bottom-[12%] right-[-6%] sm:right-[4%] md:right-[8%] w-[290px] h-[290px] sm:w-[410px] sm:h-[410px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-br from-[#C8D6E8] via-[#E2EAF4] to-[#BDD0E4] blur-[50px] sm:blur-[70px] md:blur-[85px] opacity-60 mix-blend-multiply animate-float-bubble-2"
      />
    </div>
  );
}
