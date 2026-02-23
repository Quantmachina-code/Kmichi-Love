import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductsBySubcategory } from '@/data/products';

const categoryMeta: Record<string, { name: string; description: string }> = {
  noodles: {
    name: 'Nudle',
    description: 'Korejské a asijské nudle – ramen, udon a další.',
  },
  rice: {
    name: 'Rýže',
    description: 'Prémiová korejská rýže pro dokonalou přílohu.',
  },
  'pancake-mix': {
    name: 'Pancake mix',
    description: 'Mixes pro přípravu tradičních korejských palačinek pajeon.',
  },
  seaweed: {
    name: 'Mořské řasy',
    description: 'Pečené a sušené mořské řasy pro korejské recepty.',
  },
  sauces: {
    name: 'Omáčky & Oleje',
    description: 'Sojová omáčka, sezamový olej, gochujang a další.',
  },
  tools: {
    name: 'Kuchyňské vybavení',
    description: 'Nástroje a nádobí pro korejskou kuchyni.',
  },
};

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categoryMeta[params.category];
  if (!cat) return {};
  return {
    title: `${cat.name} – Spíž | Kimchi Love`,
    description: cat.description,
    alternates: { canonical: `https://www.kimchilove.cz/pantry/${params.category}` },
  };
}

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export default function PantryCategoryPage({ params }: Props) {
  const cat = categoryMeta[params.category];
  if (!cat) notFound();

  const products = getProductsBySubcategory(params.category);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-kimchi-cream py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-kimchi-red transition-colors">Domů</Link>
            <ChevronRight size={14} />
            <Link href="/pantry" className="hover:text-kimchi-red transition-colors">Spíž</Link>
            <ChevronRight size={14} />
            <span className="text-kimchi-black font-medium">{cat.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-kimchi-cream pb-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-heading mb-2">{cat.name}</h1>
          <p className="text-gray-600 text-lg">{cat.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🚧</p>
              <h2 className="font-display text-2xl font-bold text-kimchi-black mb-2">
                Brzy dostupné
              </h2>
              <p className="text-gray-500">Pracujeme na doplnění produktů v této kategorii.</p>
              <Link href="/pantry" className="btn-primary mt-6 inline-block">
                Zpět na Spíž
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
