import type { Locale } from './config';

/**
 * Navigation configuration for a route
 */
export type NavConfig = {
  /** Whether to show this route in the navbar */
  show: boolean;
  /** Sort order in navigation (lower = first) */
  order: number;
  /** Translation key for the navigation label (e.g., 'nav.about') */
  label: string;
};

/**
 * A route definition maps each locale to its URL slug
 * Optionally includes navigation configuration
 */
export type RouteDefinition = Record<Locale, string> & {
  nav?: NavConfig;
};

/**
 * Route definitions for all static pages (Mainly for Header)
 */
export const routes = {
  // Home page (root) - not shown in nav (logo links there)
  home: {
    es: '', en: '', fr: '',
    nav: { show: false, order: 0, label: 'nav.home' },
  },

  // Static pages
  audit: {
    es: 'auditoria', en: 'audit', fr: 'audit',
    nav: { show: true, order: 1, label: 'nav.audit' },
  },

  about: {
    es: 'sobre-nosotros', en: 'about', fr: 'a-propos',
    nav: { show: true, order: 2, label: 'nav.about' },
  },

  contact: {
    es: 'contacto', en: 'contact', fr: 'contact',
    nav: { show: true, order: 3, label: 'nav.contact' },
  },
  
  donate: {
    es: 'donar', en: 'donate', fr: 'soutien',
    nav: { show: true, order: 4, label: 'nav.donate' },
  },
} as const satisfies Record<string, RouteDefinition>;

/**
 * Route definitions for Footer specifically
 */
export const footerRoutes = {
  privacy: {
    es: 'privacidad', en: 'privacy', fr: 'confidentialite',
    nav: { show: true, order: 1, label: 'nav.privacy' },
  },
  terms: {
    es: 'terminos', en: 'terms', fr: 'conditions',
    nav: { show: true, order: 2, label: 'nav.terms' },
  },
  cookies: {
    es: 'cookies', en: 'cookies', fr: 'cookies',
    nav: { show: true, order: 3, label: 'nav.cookies' },
  },
} as const satisfies Record<string, RouteDefinition>;

/**
 * Type-safe route identifiers
 */
export type RouteId = keyof typeof routes;
export type FooterRouteId = keyof typeof footerRoutes;

/**
 * Get all available route IDs (from main routes)
 */
export const routeIds = Object.keys(routes) as RouteId[];

/**
 * Validate if a string is a valid route ID
 */
export function isValidRouteId(id: string): id is RouteId {
  return id in routes;
}

// Export types
export type { NavConfig };