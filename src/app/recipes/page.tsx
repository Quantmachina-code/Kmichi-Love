import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ChefHat } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Recepty – Korejská kuchyně',
  description:
    'Korejské recepty s kimchi a dalšími produkty Kimchi Love. Kimchi jjigae, bibimbap, pajeon a další autentické korejské pokrmy.',
  alternates: { canonical: 'https://www.kimchilove.cz/recipes' },
};

export default function RecipesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-kimchi-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Inspirace
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-kimchi-black mb-4">
            Recepty
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Autentické korejské recepty od nás pro vás. Vyzkoušejte kimchi jjigae,
            bibimbap nebo pajeon a objevte kouzlo korejské kuchyně.
          </p>
        </div>
      </section>

      {/* Recipes grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/recipes/${recipe.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        ['1569050467447-ce54b3bbc37d', '1568901346375-23c9450c58cd', '1547592180-85f173990554', '1563379091339-03246963d51a'][
                          parseInt(recipe.id) - 1
                        ]
                      }?w=600&q=80`}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        recipe.difficulty === 'easy'
                          ? 'bg-green-500 text-white'
                          : recipe.difficulty === 'medium'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {recipe.difficulty === 'easy'
                        ? 'Snadné'
                        : recipe.difficulty === 'medium'
                        ? 'Střední'
                        : 'Náročné'}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-display font-bold text-xl text-kimchi-black group-hover:text-kimchi-red transition-colors mb-2 line-clamp-2">
                      {recipe.title}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{recipe.excerpt}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm border-t border-gray-50 pt-3">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {recipe.prepTime} + {recipe.cookTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {recipe.servings} {recipe.servings === 1 ? 'porce' : 'porce'}
                      </span>
                      <span className="flex items-center gap-1 ml-auto">
                        <ChefHat size={14} />
                        {recipe.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
