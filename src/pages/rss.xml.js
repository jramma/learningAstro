import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro alumno | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://velvety-klepon-41a3e7.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}