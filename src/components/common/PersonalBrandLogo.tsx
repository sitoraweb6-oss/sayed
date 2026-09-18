import React, { useState } from 'react';
import { PERSONAL_BRAND, PERSONAL_LOGO } from '../../data/personalBrand';
import { cn } from '../../lib/utils';

export interface PersonalBrandLogoProps {
  /**
   * Layout variant tailored for specific application zones
   * @default 'navbar'
   */
  variant?: 'navbar' | 'footer' | 'custom';
  /**
   * Optional custom pixel dimension for width/height (square 1:1)
   */
  size?: number;
  /**
   * Optional extra Tailwind classes
   */
  className?: string;
  /**
   * Custom image source if overriding the centralized config
   */
  imageSrc?: string;
  /**
   * Custom alt attribute for accessibility
   */
  alt?: string;
}

export default function PersonalBrandLogo({
  variant = 'navbar',
  size,
  className,
  imageSrc = PERSONAL_LOGO,
  alt = PERSONAL_BRAND.altText,
}: PersonalBrandLogoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Variant size & style presets
  const variantStyles = {
    navbar: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ring-1 ring-slate-900/10 group-hover:ring-[#D4AF37]/50 shadow-sm',
    footer: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 ring-1 ring-stone-300/80 shadow-sm',
    custom: 'w-10 h-10 ring-1 ring-slate-900/10 shadow-sm',
  };

  const customStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div
      style={customStyle}
      className={cn(
        'relative flex-shrink-0 rounded-full overflow-hidden select-none transition-all duration-300',
        variantStyles[variant] || variantStyles.navbar,
        className
      )}
      aria-label={`${PERSONAL_BRAND.name} Avatar`}
    >
      {/* 
        Graceful Monogram Fallback ("S"):
        Visible whenever the image hasn't loaded yet or encounters an error (e.g., file not yet uploaded).
        Prevents layout shift, broken image icons, or blank containers.
      */}
      <div
        className={cn(
          'w-full h-full flex items-center justify-center font-display font-bold uppercase transition-colors duration-200',
          variant === 'footer'
            ? 'bg-stone-200 text-stone-800'
            : 'bg-[#0B132B] text-[#FAF8F5]',
          hasError || !isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <span className="text-[13px] sm:text-sm md:text-base font-bold tracking-tight text-[#D4AF37]">
          {PERSONAL_BRAND.initial}
        </span>
      </div>

      {/* 
        Personal Profile Photo:
        Rendered from centralized configuration (public/images/brand-logo/profile.webp).
        Fades in smoothly upon successful load.
      */}
      {!hasError && (
        <img
          src={imageSrc}
          alt={alt}
          width={size || 44}
          height={size || 44}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="eager"
          referrerPolicy="no-referrer"
          className={cn(
            'absolute inset-0 w-full h-full object-cover object-center rounded-full transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
}
