import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Clock, Users, ChefHat } from 'lucide-react';
import { recipes, getRecipeBySlug } from '@/data/recipes';
import { getProductBySlug } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} – Recepty | Kimchi Love`,
    description: recipe.excerpt,
    alternates: { canonical: `https://www.kimchilove.cz/recipes/${recipe.slug}` },
    openGraph: {
      title: recipe.title,
      description: recipe.excerpt,
      type: 'article',
      publishedTime: recipe.publishedAt,
      authors: [recipe.author],
    },
  };
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) notFound();

  const featuredProducts = recipe.featuredProducts
    ?.map((slug) => getProductBySlug(slug))
    .filter(Boolean) ?? [];

  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.excerpt,
    author: { '@type': 'Organization', name: recipe.author },
    datePublished: recipe.publishedAt,
    prepTime: `PT${recipe.prepTime.replace(' min', 'M')}`,
    cookTime: `PT${recipe.cookTime.replace(' min', 'M')}`,
    recipeYield: `${recipe.servings} porce`,
    keywords: recipe.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-kimchi-cream py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-kimchi-red transition-colors">Domů</Link>
            <ChevronRight size={14} />
            <Link href="/recipes" className="hover:text-kimchi-red transition-colors">Recepty</Link>
            <ChevronRight size={14} />
            <span className="text-kimchi-black font-medium line-clamp-1">{recipe.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[40vh] md:h-[50vh] bg-kimchi-black">
        <Image
          src={`https://images.unsplash.com/photo-${
            ['1569050467447-ce54b3bbc37d', '1568901346375-23c9450c58cd', '1547592180-85f173990554', '1563379091339-03246963d51a'][
              parseInt(recipe.id) - 1
            ]
          }?w=1600&q=85`}
          alt={recipe.title}
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><Clock size={14} /> Příprava: {recipe.prepTime}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> Vaření: {recipe.cookTime}</span>
          <span className="flex items-center gap-1.5"><Users size={14} /> {recipe.servings} porce</span>
          <span className="flex items-center gap-1.5"><ChefHat size={14} /> {recipe.author}</span>
          <span
            className={`ml-auto px-3 py-0.5 rounded-full text-xs font-semibold ${
              recipe.difficulty === 'easy'
                ? 'bg-green-100 text-green-700'
                : recipe.difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {recipe.difficulty === 'easy' ? 'Snadné' : recipe.difficulty === 'medium' ? 'Střední' : 'Náročné'}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-kimchi-black mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 text-xl leading-relaxed mb-10 border-b border-gray-100 pb-8">
          {recipe.excerpt}
        </p>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-kimchi-black prose-h2:text-2xl prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-kimchi-black"
          dangerouslySetInnerHTML={{ __html: recipe.content.replace(/\n/g, '<br/>').replace(/##\s/g, '<h2>').replace(/###\s/g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="bg-kimchi-cream text-gray-600 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Featured products */}
        {featuredProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="font-display text-2xl font-bold text-kimchi-black mb-6">
              Produkty v receptu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProducts.map(
                (p) => p && <ProductCard key={p.id} product={p} />
              )}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
