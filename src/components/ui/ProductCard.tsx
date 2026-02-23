'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    openCart();
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-kimchi-cream overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-kimchi-red text-white text-xs font-bold px-2.5 py-1 rounded-full">
              NOVINKA
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full">
                Momentálně nedostupné
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-kimchi-black group-hover:text-kimchi-red transition-colors line-clamp-1">
            {product.name}
          </h3>
          {product.weight && (
            <p className="text-gray-400 text-xs mt-0.5">{product.weight}</p>
          )}
          <p className="text-gray-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-kimchi-red font-bold text-lg">{formatPrice(product.price)}</span>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex items-center gap-1.5 bg-kimchi-red text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-kimchi-red-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={14} />
              <span>Do košíku</span>
            </button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
