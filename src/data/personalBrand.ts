/**
 * Centralized configuration for Personal Brand Identity & Profile Logo.
 * 
 * IMPORTANT:
 * - Dedicated personal profile image for Sayed Ahmad: `public/images/brand-logo/sayed-ahmad.webp`
 * - When uploaded/replaced in `public/images/brand-logo/sayed-ahmad.webp`, it automatically updates everywhere.
 * - This personal logo system is strictly separated from client SVG logos and favicon.
 */

export const PERSONAL_LOGO = '/images/brand-logo/sayed-ahmad.webp';

export const PERSONAL_BRAND = {
  name: 'Sayed Ahmad',
  shortName: 'Sayed',
  initial: 'S',
  role: 'Digital Solutions Partner',
  logoPath: PERSONAL_LOGO,
  altText: 'Sayed Ahmad - Personal Profile Avatar',
} as const;

export default PERSONAL_BRAND;
