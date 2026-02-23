import { Metadata } from 'next';

const siteUrl = 'https://www.kimchilove.cz';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kimchi Love – love at first bite | Ručně vyráběné kimchi z Koreje',
    template: '%s | Kimchi Love',
  },
  description:
    'Kimchi Love – ručně vyráběné kimchi podle starého rodinného receptu z Pusanu. Bez konzervantů, bez chemie. Doručujeme po celé ČR.',
  keywords: [
    'kimchi',
    'korejské kimchi',
    'kimchi Praha',
    'korejská kuchyně',
    'fermentované zelí',
    'probiotika',
    'kimchi recept',
    'koupit kimchi',
    'kimchi online',
    'česky kimchi',
  ],
  authors: [{ name: 'Kimchi Love', url: siteUrl }],
  creator: 'Kimchi Love',
  publisher: 'Kimchi Love',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'Kimchi Love',
    title: 'Kimchi Love – love at first bite',
    description:
      'Ručně vyráběné kimchi podle starého rodinného receptu z Pusanu. Bez konzervantů, bez chemie.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kimchi Love – korejské kimchi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimchi Love – love at first bite',
    description:
      'Ručně vyráběné kimchi podle starého rodinného receptu z Pusanu. Bez konzervantů, bez chemie.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'cs-CZ': `${siteUrl}/cs`,
      'en-US': `${siteUrl}/en`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export function buildProductSchema(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  sku?: string;
  inStock: boolean;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Kimchi Love',
    },
    offers: {
      '@type': 'Offer',
      url: siteUrl,
      priceCurrency: 'CZK',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Kimchi Love',
      },
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kimchi Love',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+420-775-213-766',
      contactType: 'customer service',
      availableLanguage: ['Czech', 'Korean'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Žižkova brána 1085',
      addressLocality: 'Čáslav',
      postalCode: '286 01',
      addressCountry: 'CZ',
    },
    sameAs: [
      'https://www.facebook.com/eat.kimchilove',
      'https://www.instagram.com/kimchi.love',
    ],
  };
}
