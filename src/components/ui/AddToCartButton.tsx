'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Quantity selector */}
      <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden w-fit">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-4 py-3 hover:bg-gray-50 transition-colors"
          aria-label="Snížit množství"
        >
          <Minus size={16} />
        </button>
        <span className="px-4 font-semibold text-kimchi-black w-12 text-center">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-4 py-3 hover:bg-gray-50 transition-colors"
          aria-label="Zvýšit množství"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 flex-1 sm:flex-none ${
          added
            ? 'bg-green-500'
            : product.inStock
            ? 'bg-kimchi-red hover:bg-kimchi-red-dark active:scale-95'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        {added ? (
          <>
            <Check size={18} />
            Přidáno!
          </>
        ) : (
          <>
            <ShoppingCart size={18} />
            {product.inStock ? 'Přidat do košíku' : 'Nedostupné'}
          </>
        )}
      </button>
    </div>
  );
}
