import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import { buildProductSchema } from '@/lib/metadata';
import { ProductCard } from '@/components/ui/ProductCard';
import { AddToCartButton } from '@/components/ui/AddToCartButton';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} ${product.weight ?? ''} – Kimchi Love`,
    description: product.shortDescription,
    alternates: { canonical: `https://www.kimchilove.cz/products/${product.slug}` },
    openGraph: {
      title: `${product.name} – Kimchi Love`,
      description: product.shortDescription,
      images: [{ url: product.image }],
      type: 'website',
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const productSchema = buildProductSchema(product);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryLabels: Record<string, string> = {
    kimchi: 'Kimchi',
    'kl-own': 'KL Own',
    pantry: 'Spíž',
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-kimchi-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-kimchi-red transition-colors">Domů</Link>
            <ChevronRight size={14} />
            <Link href={`/${product.category}`} className="hover:text-kimchi-red transition-colors">
              {categoryLabels[product.category]}
            </Link>
            <ChevronRight size={14} />
            <span className="text-kimchi-black font-medium line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-kimchi-cream">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-kimchi-red text-white text-sm font-bold px-3 py-1.5 rounded-full">
                  NOVINKA
                </span>
              )}
            </div>

            {/* Info */}
            <div className="lg:sticky lg:top-24">
              <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-2">
                {categoryLabels[product.category]}
              </p>
              <h1 className="font-display text-4xl font-bold text-kimchi-black mb-1">
                {product.name}
              </h1>
              {product.weight && (
                <p className="text-gray-400 text-lg mb-4">{product.weight}</p>
              )}

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-kimchi-red">
                  {product.price.toLocaleString('cs-CZ')} Kč
                </span>
                <span className="text-gray-400 text-sm">vč. DPH</span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <AddToCartButton product={product} />

              {/* Free delivery notice */}
              <div className="mt-4 bg-kimchi-cream rounded-xl px-4 py-3 text-sm text-gray-600">
                🚚 <strong>Doprava zdarma v Praze</strong> pro objednávky nad 1&nbsp;000&nbsp;Kč
              </div>

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h2 className="font-semibold text-kimchi-black mb-2">Složení</h2>
                  <p className="text-gray-600 text-sm">
                    {product.ingredients.join(', ')}
                  </p>
                </div>
              )}

              {/* Allergens */}
              {product.allergens && product.allergens.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">
                    <strong className="text-kimchi-black">Alergeny:</strong>{' '}
                    {product.allergens.join(', ')}
                  </p>
                </div>
              )}

              {/* Nutrition */}
              {product.nutritionPer100g && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h2 className="font-semibold text-kimchi-black mb-3">Nutriční hodnoty / 100 g</h2>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(product.nutritionPer100g).map(([key, value]) => {
                      const labels: Record<string, string> = {
                        energy: 'Energetická hodnota',
                        fat: 'Tuky',
                        carbohydrates: 'Sacharidy',
                        protein: 'Bílkoviny',
                        salt: 'Sůl',
                      };
                      return (
                        <div key={key} className="flex justify-between py-1 border-b border-gray-50">
                          <span className="text-gray-500">{labels[key] || key}</span>
                          <span className="font-medium text-kimchi-black">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SKU */}
              {product.sku && (
                <p className="mt-4 text-gray-400 text-xs">SKU: {product.sku}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-kimchi-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-8">Mohlo by vás zajímat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
