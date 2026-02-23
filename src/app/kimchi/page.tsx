import { Metadata } from 'next';
import Image from 'next/image';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: 'Kimchi – Tradiční korejské kimchi',
  description:
    'Ručně vyráběné kimchi podle rodinného receptu z Pusanu. Kimchi Classic, Vegan a Extra Spicy. Bez konzervantů, bez chemie. Objednávejte online.',
  alternates: { canonical: 'https://www.kimchilove.cz/kimchi' },
  openGraph: {
    title: 'Kimchi – Kimchi Love',
    description: 'Ručně vyráběné kimchi z Pusanu. Bez konzervantů.',
    images: [{ url: '/images/og-kimchi.jpg' }],
  },
};

export default function KimchiPage() {
  const kimchiProducts = getProductsByCategory('kimchi');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-kimchi-black py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1600&q=80"
            alt="Kimchi"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Naše stěžejní produkty
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Kimchi
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Fermentované, živé, plné probiotik. Podle starého rodinného receptu z&nbsp;Pusanu,
            bez konzervantů a chemie.
          </p>
        </div>
      </section>

      {/* Info strip */}
      <div className="bg-kimchi-red text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <span>🥬 100% přírodní ingredience</span>
            <span>🦠 Plné živých probiotik</span>
            <span>🚫 Bez konzervantů</span>
            <span>🌶️ Recept z Pusanu, Korea</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 bg-kimchi-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kimchiProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About kimchi section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">Co je kimchi?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Kimchi (김치) je tradiční korejská fermentovaná zelenina – nejčastěji čínské zelí
            s česnekem, zázvorem a gochugaru (korejská chilli pasta). Je to základní součást
            korejské kuchyně a jeden z nejzdravějších fermentovaných pokrmů na světě.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fermentace kimchi přirozeně konzervuje zeleninu a obohacuje ji o miliardy
            prospěšných bakterií (Lactobacillus). Výsledkem je živý, probiotiky nabitý pokrm
            plný vitaminů C, B6 a K.
          </p>
        </div>
      </section>
    </>
  );
}
