import { useState } from 'react';
import { brands, Brand } from '../../data/brands';

export default function BrandsMarquee() {
  if (!brands || brands.length === 0) {
    return null;
  }

  // Duplicate the brands array enough times to ensure it spans ultra-wide screens seamlessly
  const trackBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#FCFBFA] border-y border-[#0B132B]/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2 sm:mb-3 block">
          Trusted By
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-wide text-[#0B132B] mb-2.5 sm:mb-4 md:mb-5">
          Brands I've Worked With
        </h2>
        <p className="text-[#0B132B]/60 max-w-2xl mx-auto font-medium text-sm sm:text-base md:text-lg leading-relaxed">
          A selection of businesses and organizations I've supported through web development and digital solutions.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div 
        className="relative flex overflow-hidden group w-full"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        {/* Primary Track */}
        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused] items-center py-2 sm:py-3 md:py-4">
          {trackBrands.map((brand, i) => (
            <LogoCard key={`primary-${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
        
        {/* Secondary Track (Clone for seamless looping) */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap group-hover:[animation-play-state:paused] items-center py-2 sm:py-3 md:py-4">
          {trackBrands.map((brand, i) => (
            <LogoCard key={`secondary-${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-marquee2 {
            animation-duration: 150s;
          }
        }
      `}} />
    </section>
  );
}

function LogoCard({ brand }: { brand: Brand }) {
  const [error, setError] = useState(false);

  return (
    <div className="group/logo mx-2 sm:mx-3 md:mx-4 flex-shrink-0 w-[124px] h-[58px] sm:w-[150px] sm:h-[70px] md:w-[170px] md:h-[85px] flex items-center justify-center bg-white rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_4px_15px_-5px_rgba(212,175,55,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden px-3 sm:px-4 md:px-6 relative">
      {error || !brand.filename ? (
        <span className="text-[11px] sm:text-xs md:text-[0.8rem] font-bold tracking-[0.15em] text-[#0B132B]/40 uppercase text-center whitespace-normal leading-tight group-hover/logo:text-[#0B132B]/80 transition-colors duration-500">
          {brand.name}
        </span>
      ) : (
        <img
          src={`/images/brand-logos/${brand.filename}`}
          alt={brand.name}
          loading="lazy"
          onError={() => setError(true)}
          className="w-full h-full object-contain grayscale opacity-50 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500 scale-95 group-hover/logo:scale-100"
        />
      )}
    </div>
  );
}
