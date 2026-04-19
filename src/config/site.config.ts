import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Seguridad Online',
  description: 'Organización independiente dedicada a la auditoría digital. Investigamos reportes de infracciones, notificamos preventivamente y gestionamos casos ante proveedores.',
  url:'https://seguridadonline.org',
  ogImage: '/og-default.png',
  author: 'Organización de Seguridad Online',
  email: 'info@seguridadonline.org',
  socialLinks: [
    'https://x.com/sguridadonline',
  ],
  // Twitter metadata - update with your actual handles or remove
  twitter: {
    site: '@sguridadonline',
    creator: '@sguridadonline',
  },
  verification: {
    google: '',
    bing: '',
  },
  // Branding: Logo files live in src/assets/branding/
  // Replace the SVG files there with your own branding
  branding: {
    logo: {
      alt: 'Logo de Seguridad Online',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#008cff',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
