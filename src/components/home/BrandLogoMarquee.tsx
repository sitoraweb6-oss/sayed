import React, { useState, useEffect, useMemo } from 'react';
import initialManifest from '../../data/brandLogosManifest.json';

// Guaranteed fallback list of all 18 brand logos embedded directly into the JS bundle
const DEFAULT_BRAND_LOGOS: string[] = [
  '/images/brand-logo/01-mithaq.svg',
  '/images/brand-logo/02-tanowra.svg',
  '/images/brand-logo/03-haya-fashion.svg',
  '/images/brand-logo/04-continental-health.svg',
  '/images/brand-logo/05-brac.svg',
  '/images/brand-logo/06-mahnur-hijab.svg',
  '/images/brand-logo/07-ocean-international.svg',
  '/images/brand-logo/08-glamtouch.svg',
  '/images/brand-logo/09-style-decor.svg',
  '/images/brand-logo/10-jothsna-elearning.svg',
  '/images/brand-logo/11-global-science-circle.svg',
  '/images/brand-logo/12-north-shore-roofing.svg',
  '/images/brand-logo/13-continental-auto-services.svg',
  '/images/brand-logo/14-inaya-abaya.svg',
  '/images/brand-logo/15-tazbeed.svg',
  '/images/brand-logo/16-al-ishaq-academy.svg',
  '/images/brand-logo/17-evaglow.svg',
  '/images/brand-logo/18-al-nisbah.svg',
];

/**
 * Normalizes asset paths for production, ensuring compatibility with
 * root domains, base URL subpaths, CDNs, and preview environments.
 */
export function resolveLogoUrl(rawPath: string): string {
  if (!rawPath) return '';
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('data:')) {
    return rawPath;
  }
  
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  
  if (baseUrl) {
    return `${baseUrl}${cleanPath}`;
  }
  return cleanPath;
}

/**
 * Derives a clean human-readable alt label from filename.
 */
function getAltFromPath(logoPath: string): string {
  try {
    const filename = logoPath.split('/').pop() || '';
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
    const cleanName = nameWithoutExt
      .replace(/^[0-9]+[-_]?/, '')
      .replace(/[-_]+/g, ' ')
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return cleanName ? `${cleanName} Logo` : 'Client Brand Logo';
  } catch {
    return 'Client Brand Logo';
  }
}

/**
 * Builds a seamless infinite looping track:
 * Repeats the base array so there are at least `minItems` in one half,
 * then duplicates that half exactly once so `translate3d(0, 0, 0)` -> `translate3d(-50%, 0, 0)`
 * is a mathematically identical, gapless loop on all screen sizes.
 */
function createSeamlessTrack(logos: string[], minItems: number = 14): string[] {
  if (!logos || logos.length === 0) return [];
  const repeatCount = Math.max(1, Math.ceil(minItems / logos.length));
  const baseBlock: string[] = [];
  for (let i = 0; i < repeatCount; i++) {
    baseBlock.push(...logos);
  }
  // Duplicate the base block once for perfect 0% -> -50% infinite translation
  return [...baseBlock, ...baseBlock];
}

interface LogoCardProps {
  src: string;
  ariaHidden?: boolean;
}

/**
 * Fitted Brand Logo Frame:
 * Wraps tightly around the logo without excessive whitespace,
 * displaying the logo in its original full color and crisp sharpness.
 */
function LogoCard({ src, ariaHidden }: LogoCardProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = useMemo(() => resolveLogoUrl(src), [src]);
  const altText = useMemo(() => getAltFromPath(src), [src]);

  return (
    <div 
      aria-hidden={ariaHidden ? 'true' : undefined}
      className="mx-1.5 sm:mx-2 md:mx-2.5 flex-shrink-0 h-13 sm:h-15 md:h-17 lg:h-[72px] px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-white rounded-xl sm:rounded-2xl border border-stone-200/85 shadow-[0_2px_8px_-2px_rgba(11,19,43,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(11,19,43,0.08)] hover:border-[#D4AF37]/50 transition-all duration-300 inline-flex items-center justify-center group/logo select-none"
    >
      {!hasError ? (
        <img
          src={resolvedSrc}
          alt={ariaHidden ? '' : altText}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-auto max-h-7 sm:max-h-8 md:max-h-9 lg:max-h-10 max-w-[110px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[165px] object-contain transition-transform duration-300 group-hover/logo:scale-105"
          style={{
            filter: 'none',
          }}
        />
      ) : (
        <span className="text-xs font-semibold tracking-wider text-[#0B132B]/80 uppercase">
          {altText.replace(' Logo', '')}
        </span>
      )}
    </div>
  );
}

export default function BrandLogoMarquee() {
  // Initialize with manifest data, falling back to guaranteed static array
  const [logos, setLogos] = useState<string[]>(() => {
    if (Array.isArray(initialManifest) && initialManifest.length > 0) {
      return initialManifest as string[];
    }
    return DEFAULT_BRAND_LOGOS;
  });

  // Dynamically sync with backend endpoint to auto-discover any new images in real-time
  useEffect(() => {
    let isMounted = true;
    fetch('/api/brand-logos')
      .then((res) => {
        if (!res.ok) return null;
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setLogos(data);
        }
      })
      .catch(() => {
        // Retain current bundled logos seamlessly
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeLogos = useMemo(() => {
    return logos.length > 0 ? logos : DEFAULT_BRAND_LOGOS;
  }, [logos]);

  // Divide logos cleanly into two balanced, distinct rows
  const { row1Logos, row2Logos } = useMemo(() => {
    if (activeLogos.length === 1) {
      return { row1Logos: activeLogos, row2Logos: activeLogos };
    }
    const midpoint = Math.ceil(activeLogos.length / 2);
    return {
      row1Logos: activeLogos.slice(0, midpoint),
      row2Logos: activeLogos.slice(midpoint),
    };
  }, [activeLogos]);

  const track1 = useMemo(() => createSeamlessTrack(row1Logos, 14), [row1Logos]);
  const track2 = useMemo(() => createSeamlessTrack(row2Logos, 14), [row2Logos]);

  return (
    <section 
      id="brands-section"
      className="py-14 sm:py-18 md:py-24 relative bg-[#FAF8F5] border-y border-[#0B132B]/5 overflow-hidden"
      aria-label="Brands I've Worked With"
    >
      {/* Subtle ambient golden lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#D4AF37]/[0.025] blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8 sm:mb-12 md:mb-14 relative z-10">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-2 sm:mb-3 block">
          TRUSTED BY
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-display font-bold uppercase tracking-tight text-[#0B132B] mb-2.5 sm:mb-3.5">
          BRANDS I'VE WORKED WITH
        </h2>
        <p className="text-[#0B132B]/60 max-w-xl mx-auto font-medium text-xs sm:text-sm md:text-[15px] leading-relaxed">
          A selection of businesses and organizations I've supported through web development, e-commerce, and digital solutions.
        </p>
      </div>

      {/* Continuous Dual-Row Horizontal Marquee Container */}
      <div 
        className="relative w-full overflow-hidden flex flex-col gap-3.5 sm:gap-4 md:gap-5 marquee-track"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        {/* ROW 1: Right to Left (RTL) */}
        <div className="relative flex overflow-hidden w-full select-none">
          <div className="flex whitespace-nowrap items-center py-1 sm:py-1.5 animate-marquee-rtl will-change-transform">
            {track1.map((logoPath, index) => {
              const isDuplicate = index >= row1Logos.length;
              return (
                <LogoCard
                  key={`r1-logo-${logoPath}-${index}`}
                  src={logoPath}
                  ariaHidden={isDuplicate}
                />
              );
            })}
          </div>
        </div>

        {/* ROW 2: Left to Right (LTR) */}
        <div className="relative flex overflow-hidden w-full select-none">
          <div className="flex whitespace-nowrap items-center py-1 sm:py-1.5 animate-marquee-ltr will-change-transform">
            {track2.map((logoPath, index) => {
              const isDuplicate = index >= row2Logos.length;
              return (
                <LogoCard
                  key={`r2-logo-${logoPath}-${index}`}
                  src={logoPath}
                  ariaHidden={isDuplicate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
