import fs from "fs";
import path from "path";

const SUPPORTED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.avif'
]);

export function getDiscoveredBrandLogos(rootDir: string = process.cwd()): string[] {
  const brandLogoDir = path.join(rootDir, 'public', 'images', 'brand-logo');
  if (!fs.existsSync(brandLogoDir)) {
    try {
      fs.mkdirSync(brandLogoDir, { recursive: true });
    } catch {
      // ignore
    }
    return [];
  }

  try {
    const entries = fs.readdirSync(brandLogoDir, { withFileTypes: true });
    const logoFiles = entries
      .filter((entry) => {
        if (!entry.isFile()) return false;
        const ext = path.extname(entry.name).toLowerCase();
        if (!SUPPORTED_EXTENSIONS.has(ext)) return false;
        const baseName = path.basename(entry.name, ext).toLowerCase();
        if (baseName === 'profile' || baseName === 'avatar') return false;
        return true;
      })
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    return logoFiles.map((filename) => `/images/brand-logo/${filename}`);
  } catch (err) {
    console.error('[Brand Logos] Error reading directory:', err);
    return [];
  }
}
