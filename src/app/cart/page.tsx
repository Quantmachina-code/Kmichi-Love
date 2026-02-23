'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { state, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 text-center px-4">
        <ShoppingBag size={64} className="text-gray-200 mb-6" />
        <h1 className="font-display text-3xl font-bold text-kimchi-black mb-3">
          Váš košík je prázdný
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Prozkoumejte naše kimchi a korejské produkty a začněte nakupovat.
        </p>
        <Link href="/kimchi" className="btn-primary flex items-center gap-2 group">
          Přejít na produkty
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 1000 ? 0 : 99;
  const totalWithShipping = totalPrice + shipping;

  return (
    <section className="py-12 bg-kimchi-cream min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-8">
          Košík ({totalItems} {totalItems === 1 ? 'položka' : totalItems < 5 ? 'položky' : 'položek'})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-5 flex gap-5 shadow-sm"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-kimchi-cream shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-kimchi-black">
                        {item.product.name}
                        {item.product.weight && (
                          <span className="text-gray-400 font-normal"> – {item.product.weight}</span>
                        )}
                      </h3>
                      <p className="text-gray-500 text-sm mt-0.5">{item.product.shortDescription}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-1 shrink-0"
                      aria-label="Odebrat položku"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Snížit množství"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-semibold text-kimchi-black w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Zvýšit množství"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-kimchi-red">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/kimchi"
              className="flex items-center gap-2 text-kimchi-red font-medium hover:gap-3 transition-all group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Pokračovat v nákupu
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-kimchi-black text-lg mb-5">Souhrn objednávky</h2>

              <div className="space-y-3 mb-5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Mezisoučet</span>
                  <span className="font-medium text-kimchi-black">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Doprava (Praha)</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-kimchi-black'}`}>
                    {shipping === 0 ? 'Zdarma' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400 bg-kimchi-cream rounded-lg px-3 py-2">
                    Přidejte zboží za{' '}
                    <span className="font-semibold text-kimchi-red">{formatPrice(1000 - totalPrice)}</span>{' '}
                    pro dopravu zdarma v Praze.
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-kimchi-black">Celkem</span>
                  <span className="text-2xl font-bold text-kimchi-red">
                    {formatPrice(totalWithShipping)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Ceny jsou uvedeny vč. DPH</p>
              </div>

              <Link
                href="/checkout"
                className="btn-primary block w-full text-center py-4 text-base"
              >
                Přejít k pokladně
              </Link>

              {/* Trust badges */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-400">
                  <div>
                    <p className="text-lg mb-1">🔒</p>
                    <p>Bezpečná platba</p>
                  </div>
                  <div>
                    <p className="text-lg mb-1">🚚</p>
                    <p>Rychlé doručení</p>
                  </div>
                  <div>
                    <p className="text-lg mb-1">❄️</p>
                    <p>Chlazená zásilka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
