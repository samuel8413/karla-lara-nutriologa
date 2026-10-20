# Karla Lara · Nutrióloga — Landing page

Landing page de **Karla Alexia Lara Baltazar, Nutrióloga** — *Nutrición para la vida real*.

Construida con [Astro](https://astro.build) como sitio 100 % estático: HTML pre-renderizado, CSS en línea,
~1 KB de JavaScript y sin dependencias de terceros en el navegador.

## Requisitos

- Node.js 24 (ver `.nvmrc`; mínimo 22.22)

## Scripts

| Comando           | Acción                                           |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala dependencias                             |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build`   | Genera el sitio en `dist/`                       |
| `npm run preview` | Sirve `dist/` localmente                         |
| `npm run check`   | Verificación de tipos y diagnósticos de Astro    |

## Editar el contenido

Todo el texto (servicios, precios, testimonios, preguntas frecuentes, datos de contacto) vive en
**`src/data/site.ts`**. Los valores marcados con `// MOCK` son de ejemplo y deben reemplazarse antes de
publicar con dominio propio:

- Teléfono / WhatsApp, correo, dirección, horario y redes sociales
- Cédula profesional
- Precios y duración de las consultas
- Testimonios (usar únicamente testimonios reales y con autorización)
- Biografía en "Sobre mí"
- Fotografía profesional: reemplazar el logotipo de `src/components/About.astro` por una foto en `src/assets/`
- Texto del aviso de privacidad (`src/pages/aviso-de-privacidad.astro`), que debe revisarse conforme a la LFPDPPP

## Estructura

```
assets/                     Archivos originales de marca (fuente)
scripts/                    Generación de logos recortados, favicons e imagen Open Graph
public/                     Favicons, iconos de la app e imagen OG (generados)
src/
  assets/brand/             Logos optimizados por Astro (AVIF/WebP en build)
  components/               Secciones de la página
  data/site.ts              Contenido y datos de contacto
  layouts/Layout.astro      <head>, SEO, Open Graph y datos estructurados (JSON-LD)
  pages/                    Portada, aviso de privacidad, 404, robots.txt y manifest
  styles/global.css         Tokens de diseño y estilos base
```

Si cambian los archivos de marca, regenera los derivados con:

```sh
node scripts/generate-brand-assets.mjs
```

## Rendimiento y accesibilidad

- Lighthouse (móvil y escritorio): 100 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- Fuente Poppins auto-hospedada (solo latin, 3 pesos, `woff2`) con fuente de respaldo de métricas ajustadas → CLS 0.
- Imágenes responsivas en AVIF/WebP con dimensiones explícitas; la imagen del hero se carga con prioridad alta.
- Contraste WCAG AA: los colores de marca se usan como decoración y para texto se emplean tonos oscurecidos
  derivados de la paleta (ver `src/styles/global.css`).
- Enlace para saltar al contenido, navegación por teclado, foco visible, menú móvil con `aria-expanded`,
  soporte para `prefers-reduced-motion` y funcionamiento sin JavaScript.
- Content Security Policy con hashes generada por Astro.

## Despliegue

La URL pública y la ruta base se leen de variables de entorno en `astro.config.mjs`:

| Variable    | Descripción                                   |
| ----------- | --------------------------------------------- |
| `SITE_URL`  | Origen público, p. ej. `https://midominio.com` |
| `BASE_PATH` | Subruta, p. ej. `/repo` (solo GitHub Pages)    |

### GitHub Pages

1. Sube el repositorio a GitHub (rama `main`).
2. En **Settings → Pages**, selecciona **Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que configura `SITE_URL` y `BASE_PATH`
   automáticamente y publica en `https://<usuario>.github.io/<repo>/`.

### Netlify (dominio propio)

1. Importa el repositorio en Netlify; `netlify.toml` ya define build, versión de Node, caché y cabeceras de seguridad.
2. Agrega el dominio en **Domain management**. Netlify expone la variable `URL` y el sitio la usa como URL canónica
   (o define `SITE_URL` explícitamente).
3. Opcional: desactiva el workflow de GitHub Pages para tener un solo despliegue.

## Notas

- El formulario de contacto no requiere servidor: compone el mensaje y abre WhatsApp. Sin JavaScript,
  envía el campo de mensaje directamente a `wa.me`. En Netlify podría migrarse a Netlify Forms si se desea
  recibir los mensajes por correo.
- `assets/Logotipo animado.mp4` (4.9 MB) no se usa en la página para no penalizar la carga; si se quiere
  incluir, conviene comprimirlo (WebM/MP4 < 500 KB) y cargarlo con `preload="none"` y un `poster`.
