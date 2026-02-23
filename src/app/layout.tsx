import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DeliveryBanner } from '@/components/layout/DeliveryBanner';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { GTMScript, GTMNoScript } from '@/components/analytics/GTMScript';
import { defaultMetadata } from '@/lib/metadata';
import { buildOrganizationSchema } from '@/lib/metadata';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="cs">
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
      <body>
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
