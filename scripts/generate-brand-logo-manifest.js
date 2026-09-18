import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BRAND_LOGO_DIR = path.join(rootDir, 'public', 'images', 'brand-logo');
const OUTPUT_JSON_FILE = path.join(rootDir, 'src', 'data', 'brandLogosManifest.json');

const SUPPORTED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.avif'
]);

export function scanBrandLogos() {
  if (!fs.existsSync(BRAND_LOGO_DIR)) {
    fs.mkdirSync(BRAND_LOGO_DIR, { recursive: true });
    return [];
  }

  const entries = fs.readdirSync(BRAND_LOGO_DIR, { withFileTypes: true });

  const logoFiles = entries
    .filter((entry) => {
      if (!entry.isFile()) return false;
      const ext = path.extname(entry.name).toLowerCase();
      if (!SUPPORTED_EXTENSIONS.has(ext)) return false;
      
      // Exclude personal profile avatar images if accidentally placed here
      const baseName = path.basename(entry.name, ext).toLowerCase();
      if (baseName === 'profile' || baseName === 'avatar') return false;

      return true;
    })
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return logoFiles.map((filename) => `/images/brand-logo/${filename}`);
}

export function generateBrandLogoManifest() {
  try {
    const logos = scanBrandLogos();
    const outputDir = path.dirname(OUTPUT_JSON_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(logos, null, 2) + '\n', 'utf-8');
    console.log(`[Brand Logo Manifest] Generated manifest with ${logos.length} logo(s) -> ${path.relative(rootDir, OUTPUT_JSON_FILE)}`);
    return logos;
  } catch (error) {
    console.error('[Brand Logo Manifest] Error generating manifest:', error);
    return [];
  }
}

// Auto-run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateBrandLogoManifest();
}
