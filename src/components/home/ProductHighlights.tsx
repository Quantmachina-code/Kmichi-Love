'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProductHighlights() {
  const featured = getFeaturedProducts();

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
              Nejoblíbenější
            </p>
            <h2 className="section-heading">Naše produkty</h2>
          </div>
          <Link
            href="/kimchi"
            className="flex items-center gap-2 text-kimchi-red font-semibold hover:gap-3 transition-all group shrink-0"
          >
            Všechny produkty
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Category tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
        >
          {[
            {
              href: '/kimchi',
              label: 'Kimchi',
              desc: 'Tradiční i vegan varianty',
              emoji: '🥬',
              bg: 'bg-kimchi-red',
            },
            {
              href: '/kl-own',
              label: 'KL Own',
              desc: 'Naše vlastní produkty',
              emoji: '⭐',
              bg: 'bg-kimchi-black',
            },
            {
              href: '/pantry',
              label: 'Spíž',
              desc: 'Korejské ingredience',
              emoji: '🍜',
              bg: 'bg-kimchi-cream-dark',
            },
          ].map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className={`${tile.bg} rounded-2xl p-6 flex items-center justify-between hover:opacity-90 transition-opacity group`}
            >
              <div>
                <p className={`font-display text-2xl font-bold ${tile.bg === 'bg-kimchi-cream-dark' ? 'text-kimchi-black' : 'text-white'}`}>
                  {tile.label}
                </p>
                <p className={`text-sm mt-1 ${tile.bg === 'bg-kimchi-cream-dark' ? 'text-gray-600' : 'text-white/70'}`}>
                  {tile.desc}
                </p>
              </div>
              <span className="text-4xl">{tile.emoji}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
