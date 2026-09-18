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

/**
 * Normalizes asset paths for production, ensuring compatibility with
 * root domains, base URL subpaths, CDNs, Vercel, and preview environments.
 */
function resolveAssetUrl(rawPath: string): string {
  if (!rawPath) return '';
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('data:')) {
    return rawPath;
  }
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
}

export default function PersonalBrandLogo({
  variant = 'navbar',
  size,
  className,
  imageSrc = PERSONAL_LOGO,
  alt = PERSONAL_BRAND.altText,
}: PersonalBrandLogoProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveAssetUrl(imageSrc);

  // Variant size & style presets
  const variantStyles = {
    navbar: 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10',
    footer: 'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11',
    custom: 'w-10 h-10',
  };

  const customStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div
      style={customStyle}
      className={cn(
        'relative flex-shrink-0 flex items-center justify-center select-none transition-transform duration-300',
        variantStyles[variant] || variantStyles.navbar,
        className
      )}
      aria-label={`${PERSONAL_BRAND.name} Logo`}
    >
      {!hasError ? (
        <img
          src={resolvedSrc}
          alt={alt}
          width={size || 44}
          height={size || 44}
          decoding="async"
          onError={() => setHasError(true)}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-opacity duration-300"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-[#0B132B] flex items-center justify-center text-[#D4AF37] font-bold text-xs">
          {PERSONAL_BRAND.initial}
        </div>
      )}
    </div>
  );
}
