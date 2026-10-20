/**
 * Antepone la ruta base (p. ej. "/repo" en GitHub Pages, "/" en Netlify) a una ruta interna.
 */
export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
