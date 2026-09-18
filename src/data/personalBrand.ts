/**
 * Centralized configuration for Personal / Site Brand Identity & Logo.
 * 
 * IMPORTANT:
 * - Official site & personal logo: `public/images/site-logo.webp` -> `/images/site-logo.webp`
 * - When uploaded/replaced in `public/images/site-logo.webp`, it automatically updates in both Navbar and Footer.
 * - This logo is strictly separate from `public/favicon.webp` (browser tab icon only).
 */

export const PERSONAL_LOGO = '/images/site-logo.webp';

export const PERSONAL_BRAND = {
  name: 'Sayed Ahmad',
  shortName: 'Sayed',
  initial: 'S',
  role: 'Digital Solutions Partner',
  logoPath: PERSONAL_LOGO,
  altText: 'Sayed Ahmad - Site Logo',
} as const;

export default PERSONAL_BRAND;
