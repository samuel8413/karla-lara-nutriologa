// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * URL pública y ruta base del sitio.
 * - GitHub Pages: el workflow las inyecta (p. ej. https://usuario.github.io + /repo).
 * - Netlify / dominio propio: definir SITE_URL=https://midominio.com y dejar BASE_PATH sin definir.
 */
// Netlify expone automáticamente `URL` (dominio principal del sitio) durante el build.
const site = process.env.SITE_URL ?? process.env.URL ?? 'https://karlalara.example.com';
const base = process.env.BASE_PATH ?? '/';

const poppins = (/** @type {400 | 500 | 600} */ weight) => ({
  src: /** @type {[string]} */ ([`@fontsource/poppins/files/poppins-latin-${weight}-normal.woff2`]),
  weight,
  style: /** @type {const} */ ('normal'),
});

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  security: {
    // Content Security Policy con hashes generados en build (vía <meta>, funciona también en GitHub Pages).
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        // El formulario de contacto abre WhatsApp.
        'form-action https://wa.me https://api.whatsapp.com',
      ],
    },
  },
  build: {
    // Una sola página: incrustar el CSS elimina una petición que bloquea el render.
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      // Astro genera una fuente de respaldo con métricas ajustadas para evitar CLS.
      fallbacks: ['sans-serif'],
      options: {
        variants: [poppins(400), poppins(500), poppins(600)],
      },
    },
  ],
});
