import { Metadata } from 'next';
import Image from 'next/image';
import { ProductCard } from '@/components/ui/ProductCard';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: 'KL Own – Vlastní produkty Kimchi Love',
  description:
    'KL Own – naše vlastní korejské produkty. Takuwan, Spicy Anchovies, Gochujang a další. Vybrané s láskou přímo z Koreje.',
  alternates: { canonical: 'https://www.kimchilove.cz/kl-own' },
};

export default function KLOwnPage() {
  const products = getProductsByCategory('kl-own');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-kimchi-black py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
            alt="KL Own produkty"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Naše vlastní výběr
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            KL Own
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Produkty vybrané a připravené přímo námi – Takuwan, pikantní ančovičky,
            gochujang a další korejské speciality.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-kimchi-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why KL Own */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">Proč KL Own?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            KL Own je naše vlastní linie produktů, kde pečlivě vybíráme ty nejlepší korejské
            delikatesy a přidáváme k nim vlastní touch. Každý produkt pod značkou KL Own
            prošel naším přísným výběrem kvality – chceme, abyste měli přístup
            k autentickým korejským chutím.
          </p>
        </div>
      </section>
    </>
  );
}
