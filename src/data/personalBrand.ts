/**
 * Centralized configuration for Personal Brand Identity & Profile Logo.
 * 
 * IMPORTANT:
 * - Upload your personal photo/avatar to `public/images/brand-logo/profile.webp`
 * - When you replace or rename the image, only update `PERSONAL_LOGO` below.
 * - This personal logo system is strictly separated from client logos in `public/images/brand-logo/`.
 */

export const PERSONAL_LOGO = '/images/profile/profile.webp';

export const PERSONAL_BRAND = {
  name: 'Sayed Ahmad',
  shortName: 'Sayed',
  initial: 'S',
  role: 'Digital Solutions Partner',
  logoPath: PERSONAL_LOGO,
  altText: 'Sayed Ahmad - Personal Profile Avatar',
} as const;

export default PERSONAL_BRAND;
