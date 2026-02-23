import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DeliveryBanner } from '@/components/layout/DeliveryBanner';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { GTMScript, GTMNoScript } from '@/components/analytics/GTMScript';
import { defaultMetadata } from '@/lib/metadata';
import { buildOrganizationSchema } from '@/lib/metadata';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['700', '800'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Hreflang */}
        <link rel="alternate" hrefLang="cs" href="https://www.kimchilove.cz" />
        <link rel="alternate" hrefLang="en" href="https://www.kimchilove.cz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.kimchilove.cz" />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <GTMScript />
      </head>
      <body className={inter.className}>
        <GTMNoScript />
        <CartProvider>
          <DeliveryBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
