import React, { useState } from 'react';

interface LocalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export default function LocalImage({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  fallbackTitle = 'SAYED AHMAD',
  fallbackSubtitle = 'Founder & Web Development Partner',
}: LocalImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} rounded-2xl sm:rounded-3xl bg-stone-100 ${className}`}>
      {!hasError && !isPlaceholder && (
        <img
          src={src}
          alt={alt}
          onLoad={(e) => {
            const img = e.currentTarget;
            // Detect if it's the unpopulated 1x1 initial placeholder
            if (img.naturalWidth <= 2 && img.naturalHeight <= 2) {
              setIsPlaceholder(true);
            } else {
              setIsLoaded(true);
            }
          }}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}

      {(hasError || isPlaceholder || !isLoaded) && (
        <div 
          className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-[#0B132B] text-[#FAF8F5] transition-opacity duration-300 ${
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[10.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              PORTFOLIO ARCHIVE
            </span>
            <span className="text-[#FAF8F5]/40">EST. 2021</span>
          </div>

          <div className="relative z-10 my-auto py-6 sm:py-8 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-lg font-display font-bold text-[#D4AF37] mb-4">
              SA
            </div>
            <span className="text-2xl sm:text-3xl font-display font-bold text-[#FAF8F5] tracking-tight block mb-1.5">
              {fallbackTitle}
            </span>
            <span className="text-xs sm:text-[13px] font-mono tracking-wider uppercase text-[#FAF8F5]/65 block">
              {fallbackSubtitle}
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#FAF8F5]/40 border-t border-white/10 pt-3.5">
            <span>SITORA WEB</span>
            <span>OWNED DIGITAL ASSET</span>
          </div>
        </div>
      )}
    </div>
  );
}
