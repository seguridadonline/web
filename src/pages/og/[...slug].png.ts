import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOGImage } from '@/lib/og';
import { routes, footerRoutes } from '@/i18n/routes';
import { locales, defaultLocale } from '@/i18n/config';
import { getTranslations } from '@/i18n';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const allRouteDefinitions = { ...routes, ...footerRoutes };

for (const locale of locales) {
    const translations = getTranslations(locale as any) as any;

    for (const [routeId, definition] of Object.entries(allRouteDefinitions)) {
      const slugValue = definition[locale as keyof typeof definition] as string;
      
      let finalSlug: string;

      if (slugValue === '') {
        // Es una página de inicio (root de ese idioma)
        // Si es el default (es), queda como 'index'. Si no, como 'en', 'fr', etc.
        finalSlug = locale === defaultLocale ? 'index' : locale;
      } else {
        // Es una subpágina. Mantenemos el esquema: 'en/about' o 'sobre-nosotros'
        const langPrefix = locale === defaultLocale ? '' : `${locale}/`;
        finalSlug = `${langPrefix}${slugValue}`;
      }

      const meta = translations[routeId]?.meta || {};
      
      paths.push({
        params: { slug: finalSlug },
        props: {
          title: meta.title || 'Seguridad Online',
          description: meta.description || '',
        },
      });
    }
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as {
    title: string;
    description?: string;
  };

  const png = await generateOGImage({
    title,
    description,
    type: 'website',
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};