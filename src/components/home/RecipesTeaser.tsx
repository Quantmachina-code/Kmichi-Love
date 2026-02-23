'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { recipes } from '@/data/recipes';

export function RecipesTeaser() {
  const featured = recipes.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-2">
              Inspirace v kuchyni
            </p>
            <h2 className="section-heading">Recepty</h2>
          </div>
          <Link
            href="/recipes"
            className="flex items-center gap-2 text-kimchi-red font-semibold hover:gap-3 transition-all group shrink-0"
          >
            Všechny recepty
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((recipe, i) => (
            <motion.article
              key={recipe.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/recipes/${recipe.slug}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={`https://images.unsplash.com/photo-${['1569050467447-ce54b3bbc37d', '1568901346375-23c9450c58cd', '1547592180-85f173990554'][i]}?w=600&q=80`}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      recipe.difficulty === 'easy'
                        ? 'bg-green-500 text-white'
                        : recipe.difficulty === 'medium'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                      {recipe.difficulty === 'easy' ? 'Snadné' : recipe.difficulty === 'medium' ? 'Střední' : 'Náročné'}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-kimchi-black group-hover:text-kimchi-red transition-colors mb-2 line-clamp-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{recipe.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {recipe.prepTime} + {recipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {recipe.servings} porce
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
