import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const SUPPORTED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.avif'
]);

/**
 * Searches for brand logos across source, dist, and deployment root directories.
 * ESM safe without bare __dirname references.
 */
export function getDiscoveredBrandLogos(rootDir: string = process.cwd()): string[] {
  let moduleDir = '';
  try {
    moduleDir = path.dirname(fileURLToPath(import.meta.url));
  } catch {
    moduleDir = rootDir;
  }

  const candidateDirs = [
    path.join(rootDir, 'public', 'images', 'brand-logo'),
    path.join(rootDir, 'dist', 'images', 'brand-logo'),
    path.join(moduleDir, '..', 'public', 'images', 'brand-logo'),
    path.join(moduleDir, '..', 'dist', 'images', 'brand-logo'),
    path.join(moduleDir, 'images', 'brand-logo'),
  ];

  const brandLogoDir = candidateDirs.find((dir) => {
    try {
      return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
    } catch {
      return false;
    }
  });

  if (!brandLogoDir) {
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
