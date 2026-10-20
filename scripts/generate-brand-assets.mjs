// Genera los assets de marca optimizados a partir de los originales en /assets.
// Uso: node scripts/generate-brand-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'assets';
const OUT_IMG = 'src/assets/brand';
const OUT_PUBLIC = 'public';
const TEAL = '#8FAEB1';

await mkdir(OUT_IMG, { recursive: true });

// 1. Logos recortados (sin márgenes vacíos) para usarlos con <Image /> de Astro.
const logos = {
  'Isotipo.png': 'isotipo.png',
  'Logotipo Principal Sin Fondo.png': 'logo-principal.png',
  'Marca de Agua.png': 'logo-blanco.png',
};
for (const [src, out] of Object.entries(logos)) {
  await sharp(`${SRC}/${src}`).trim().png({ compressionLevel: 9 }).toFile(`${OUT_IMG}/${out}`);
}

// 2. Favicons / iconos de la app a partir del isotipo.
const iso = await sharp(`${SRC}/Isotipo.png`).trim().toBuffer();
const icon = (size, pad, bg) =>
  sharp(iso)
    .resize(Math.round(size * (1 - pad * 2)), Math.round(size * (1 - pad * 2)), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: Math.round(size * pad), bottom: Math.round(size * pad), left: Math.round(size * pad), right: Math.round(size * pad), background: bg })
    .resize(size, size)
    .png({ compressionLevel: 9 });

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const white = { r: 255, g: 255, b: 255, alpha: 1 };
await icon(32, 0.02, transparent).toFile(`${OUT_PUBLIC}/favicon-32.png`);
await icon(180, 0.12, white).flatten({ background: '#ffffff' }).toFile(`${OUT_PUBLIC}/apple-touch-icon.png`);
await icon(192, 0.12, white).toFile(`${OUT_PUBLIC}/icon-192.png`);
await icon(512, 0.12, white).toFile(`${OUT_PUBLIC}/icon-512.png`);
// Icono "maskable": zona segura del 80 %.
await icon(512, 0.2, white).toFile(`${OUT_PUBLIC}/icon-maskable-512.png`);

// 3. Imagen Open Graph 1200x630 (logo blanco sobre teal de marca).
const logoWhite = await sharp(`${SRC}/Marca de Agua.png`).trim().resize(900).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: TEAL } })
  .composite([{ input: logoWhite, gravity: 'center' }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT_PUBLIC}/og-image.jpg`);

console.log('Assets de marca generados.');
