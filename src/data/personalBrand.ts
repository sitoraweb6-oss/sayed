/**
 * Centralized configuration for Personal / Site Brand Identity & Logo.
 * 
 * IMPORTANT:
 * - Official site & personal logo: `public/images/profile/founder.webp` -> `/images/profile/founder.webp`
 * - Favicon: `public/images/profile/Modern.png` -> `/images/profile/Modern.png`
 */

export const PERSONAL_LOGO = '/images/profile/founder.webp';

export const PERSONAL_BRAND = {
  name: 'Sayed Ahmad',
  shortName: 'Sayed',
  initial: 'S',
  role: 'Digital Solutions Partner',
  logoPath: PERSONAL_LOGO,
  altText: 'Sayed Ahmad',
} as const;

export default PERSONAL_BRAND;
