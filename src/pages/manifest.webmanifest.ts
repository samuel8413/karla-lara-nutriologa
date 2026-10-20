import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { withBase } from '../utils/url';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: `${site.name} · Nutrióloga`,
      short_name: site.name,
      description: site.description,
      lang: 'es-MX',
      start_url: withBase('/'),
      scope: withBase('/'),
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#eef4f4',
      icons: [
        { src: withBase('icon-192.png'), sizes: '192x192', type: 'image/png' },
        { src: withBase('icon-512.png'), sizes: '512x512', type: 'image/png' },
        { src: withBase('icon-maskable-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
