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
      // Obtenemos el slug traducido para la URL del recurso
      const slugValue = definition[locale as keyof typeof definition] as string;
      
      // Construimos el path de la imagen: "es/index", "fr/a-propos", etc.
      // Si es el idioma por defecto y el slug es vacío (home), usamos 'index'
      const langPrefix = locale === defaultLocale ? '' : `${locale}/`;
      const finalSlug = slugValue === '' ? `${locale}/index` : `${langPrefix}${slugValue}`;

      // Intentamos sacar título y descripción del diccionario i18n
      // Buscamos en translations[routeId].meta.title
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