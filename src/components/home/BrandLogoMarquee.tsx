import React, { useState, useEffect, useMemo } from 'react';
import initialManifest from '../../data/brandLogosManifest.json';

/**
 * Format a filename (e.g., 'acme-corp.png') into a human-readable brand label for accessible alt text.
 */
function getAltFromPath(logoPath: string): string {
  try {
    const filename = logoPath.split('/').pop() || '';
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
    const cleanName = nameWithoutExt
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return cleanName ? `${cleanName} Logo` : 'Client Brand Logo';
  } catch {
    return 'Client Brand Logo';
  }
}

/**
 * Ensures a row of logos is repeated enough times so that a 50% translation loop
 * is visually seamless across all screen sizes without gaps or sudden resets.
 */
function createSeamlessTrack(row: string[], minItems: number = 14): string[] {
  if (row.length === 0) return [];
  const repeatCount = Math.max(1, Math.ceil(minItems / row.length));
  const baseBlock: string[] = [];
  for (let i = 0; i < repeatCount; i++) {
    baseBlock.push(...row);
  }
  // Duplicate the base block exactly once so 0% -> -50% is an identical loop
  return [...baseBlock, ...baseBlock];
}

export default function BrandLogoMarquee() {
  const [logos, setLogos] = useState<string[]>(
    Array.isArray(initialManifest) ? (initialManifest as string[]) : []
  );
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Dynamically sync with backend endpoint to detect newly uploaded images without rebuilding
  useEffect(() => {
    let isMounted = true;
    fetch('/api/brand-logos')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setLogos(data);
        }
      })
      .catch(() => {
        // Fall back to initialManifest
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter out any corrupted or missing image paths
  const validLogos = useMemo(() => {
    return logos.filter((logo) => !failedImages.has(logo));
  }, [logos, failedImages]);

  const handleImageError = (logoSrc: string) => {
    setFailedImages((prev) => {
      const next = new Set(prev);
      next.add(logoSrc);
      return next;
    });
  };

  // Rule 5: If the folder is empty, hide the showcase gracefully without disruption
  if (validLogos.length === 0) {
    return null;
  }

  // Calculate rows according to Rules 3 & 5:
  // - 1–13 logos: 1 single row
  // - 14 logos: exactly 2 rows of 7
  // - > 14 logos: chunks of max 7 logos per row
  const rows: string[][] = [];
  if (validLogos.length <= 13) {
    rows.push(validLogos);
  } else {
    const chunkSize = 7;
    for (let i = 0; i < validLogos.length; i += chunkSize) {
      rows.push(validLogos.slice(i, i + chunkSize));
    }
  }

  const isFewerThanSeven = validLogos.length < 7;

  return (
    <section 
      className="py-14 sm:py-18 md:py-24 relative bg-[#FAF8F5] border-y border-[#0B132B]/5 overflow-hidden"
      aria-label="Client Brand Logos"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#D4AF37]/[0.025] blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8 sm:mb-12 md:mb-14 relative z-10">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2 sm:mb-3 block">
          Trusted By
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-display font-bold uppercase tracking-tight text-[#0B132B] mb-2.5 sm:mb-3.5">
          Brands I've Worked With
        </h2>
        <p className="text-[#0B132B]/60 max-w-xl mx-auto font-medium text-xs sm:text-sm md:text-[15px] leading-relaxed">
          A selection of businesses and organizations I've supported through web development, e-commerce, and digital solutions.
        </p>
      </div>

      {/* Case A: Fewer than 7 logos -> Center them elegantly without spinning marquee */}
      {isFewerThanSeven ? (
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 relative z-10">
          {validLogos.map((logoPath, idx) => (
            <LogoCard
              key={`centered-${logoPath}-${idx}`}
              src={logoPath}
              onError={() => handleImageError(logoPath)}
            />
          ))}
        </div>
      ) : (
        /* Case B: 7 or more logos -> Infinite marquee rows with alternating directions */
        <div 
          className="relative w-full overflow-hidden flex flex-col gap-3 sm:gap-4 md:gap-5"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {rows.map((rowLogos, rowIndex) => {
            const isReverse = rowIndex % 2 === 1; // Alternating direction: Row 0 (RTL), Row 1 (LTR), Row 2 (RTL)...
            const trackItems = createSeamlessTrack(rowLogos, 14);

            return (
              <div 
                key={`marquee-row-${rowIndex}`}
                className="relative flex overflow-hidden w-full group select-none marquee-track"
              >
                <div 
                  className={`flex whitespace-nowrap items-center py-1 sm:py-1.5 md:py-2 ${
                    isReverse ? 'animate-marquee-ltr' : 'animate-marquee-rtl'
                  }`}
                >
                  {trackItems.map((logoPath, itemIndex) => {
                    const isDuplicate = itemIndex >= rowLogos.length;
                    return (
                      <LogoCard
                        key={`row-${rowIndex}-item-${logoPath}-${itemIndex}`}
                        src={logoPath}
                        ariaHidden={isDuplicate}
                        onError={() => handleImageError(logoPath)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

/**
 * Individual Brand Logo Card
 */
interface LogoCardProps {
  src: string;
  ariaHidden?: boolean;
  onError: () => void;
}

function LogoCard({ src, ariaHidden, onError }: LogoCardProps) {
  const altText = useMemo(() => getAltFromPath(src), [src]);

  return (
    <div 
      aria-hidden={ariaHidden ? 'true' : undefined}
      className="mx-2 sm:mx-2.5 md:mx-3.5 flex-shrink-0 w-[116px] h-[52px] sm:w-[136px] sm:h-[60px] md:w-[156px] md:h-[68px] flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-lg border border-slate-900/[0.06] hover:border-[#D4AF37]/50 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_-4px_rgba(212,175,55,0.16)] transition-all duration-300 p-2.5 sm:p-3 md:p-3.5 group/card"
    >
      <img
        src={src}
        alt={ariaHidden ? '' : altText}
        width={156}
        height={68}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={onError}
        className="max-h-full max-w-full object-contain filter grayscale opacity-55 contrast-[0.9] group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:contrast-100 transition-all duration-300 transform group-hover/card:scale-105"
      />
    </div>
  );
}
