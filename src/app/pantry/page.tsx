import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spíž – Korejské potraviny a ingredience',
  description:
    'Korejské nudle, rýže, omáčky, řasy, pancake mix a kuchyňské vybavení. Vše pro vaši korejskou kuchyni.',
  alternates: { canonical: 'https://www.kimchilove.cz/pantry' },
};

const categories = [
  {
    slug: 'noodles',
    name: 'Nudle',
    description: 'Ramen, udon, skleněné nudle a další',
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
    count: 2,
    emoji: '🍜',
  },
  {
    slug: 'rice',
    name: 'Rýže',
    description: 'Prémiová korejská krátkozrnná rýže',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80',
    count: 1,
    emoji: '🍚',
  },
  {
    slug: 'pancake-mix',
    name: 'Pancake mix',
    description: 'Mixes na pajeon a haemul pajeon',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    count: 1,
    emoji: '🥞',
  },
  {
    slug: 'seaweed',
    name: 'Mořské řasy',
    description: 'Gim, nori a wakame',
    image: 'https://images.unsplash.com/photo-1611171711791-6a4b75c7a46d?w=600&q=80',
    count: 1,
    emoji: '🌿',
  },
  {
    slug: 'sauces',
    name: 'Omáčky & Oleje',
    description: 'Sojová omáčka, sezamový olej, gochujang',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600&q=80',
    count: 3,
    emoji: '🫙',
  },
  {
    slug: 'tools',
    name: 'Kuchyňské vybavení',
    description: 'Hrnce, pánve a nástroje pro korejskou kuchyni',
    image: 'https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=600&q=80',
    count: 0,
    emoji: '🔪',
  },
];

export default function PantryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-kimchi-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Korejská kuchyně doma
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-kimchi-black mb-4">
            Spíž
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Vše, co potřebujete pro autentickou korejskou kuchyni.
            Od nudlí přes omáčky až po kuchyňské nástroje.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/pantry/${cat.slug}`}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{cat.emoji}</span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-kimchi-black text-lg group-hover:text-kimchi-red transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-0.5">{cat.description}</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-gray-400 group-hover:text-kimchi-red group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
