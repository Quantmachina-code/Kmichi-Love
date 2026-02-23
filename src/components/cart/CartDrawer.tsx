'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeCart]);

  // Lock body scroll when open
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.isOpen]);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-lg text-kimchi-black">
                Košík ({totalItems} {totalItems === 1 ? 'položka' : totalItems < 5 ? 'položky' : 'položek'})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-gray-500 hover:text-kimchi-black transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Zavřít košík"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag size={48} className="text-gray-300" />
                  <p className="text-gray-500 font-medium">Váš košík je prázdný</p>
                  <p className="text-gray-400 text-sm">Přidejte si naše kimchi nebo produkty z Koreje</p>
                  <button
                    onClick={closeCart}
                    className="mt-2 bg-kimchi-red text-white px-6 py-2.5 rounded-full font-medium hover:bg-kimchi-red-dark transition-colors"
                  >
                    Pokračovat v nákupu
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {state.items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-kimchi-cream shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-kimchi-black text-sm line-clamp-2">
                          {item.product.name}
                          {item.product.weight && (
                            <span className="text-gray-400 font-normal"> {item.product.weight}</span>
                          )}
                        </h3>
                        <p className="text-kimchi-red font-semibold text-sm mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-kimchi-red hover:text-kimchi-red transition-colors"
                              aria-label="Snížit množství"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-kimchi-red hover:text-kimchi-red transition-colors"
                              aria-label="Zvýšit množství"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label="Odebrat z košíku"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-6 space-y-4">
                {totalPrice >= 1000 && (
                  <div className="bg-green-50 text-green-700 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2">
                    <span>🚚</span>
                    <span className="font-medium">Doprava zdarma v Praze!</span>
                  </div>
                )}
                {totalPrice < 1000 && (
                  <div className="bg-kimchi-cream text-kimchi-black text-sm rounded-lg px-4 py-2.5">
                    Přidejte zboží za{' '}
                    <span className="font-semibold text-kimchi-red">
                      {formatPrice(1000 - totalPrice)}
                    </span>{' '}
                    a doprava v Praze zdarma.
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-kimchi-black">Celkem</span>
                  <span className="text-xl font-bold text-kimchi-red">{formatPrice(totalPrice)}</span>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-kimchi-red text-white text-center py-3.5 rounded-full font-semibold hover:bg-kimchi-red-dark transition-colors"
                >
                  Přejít k pokladně
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-sm text-gray-500 hover:text-kimchi-black transition-colors"
                >
                  Pokračovat v nákupu
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
