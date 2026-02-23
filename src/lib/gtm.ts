import { Product } from '@/types';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXX';

// Push events to dataLayer
export const gtmPush = (data: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// GA4 E-commerce Events
export const trackViewItem = (product: Product) => {
  gtmPush({
    event: 'view_item',
    ecommerce: {
      currency: 'CZK',
      value: product.price,
      items: [
        {
          item_id: product.sku || product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: 1,
        },
      ],
    },
  });
};

export const trackAddToCart = (product: Product, quantity: number) => {
  gtmPush({
    event: 'add_to_cart',
    ecommerce: {
      currency: 'CZK',
      value: product.price * quantity,
      items: [
        {
          item_id: product.sku || product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity,
        },
      ],
    },
  });
};

export const trackRemoveFromCart = (product: Product, quantity: number) => {
  gtmPush({
    event: 'remove_from_cart',
    ecommerce: {
      currency: 'CZK',
      value: product.price * quantity,
      items: [
        {
          item_id: product.sku || product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity,
        },
      ],
    },
  });
};

export const trackBeginCheckout = (
  items: Array<{ product: Product; quantity: number }>,
  total: number
) => {
  gtmPush({
    event: 'begin_checkout',
    ecommerce: {
      currency: 'CZK',
      value: total,
      items: items.map(({ product, quantity }) => ({
        item_id: product.sku || product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity,
      })),
    },
  });
};

export const trackPurchase = (
  orderId: string,
  items: Array<{ product: Product; quantity: number }>,
  total: number
) => {
  gtmPush({
    event: 'purchase',
    ecommerce: {
      transaction_id: orderId,
      currency: 'CZK',
      value: total,
      items: items.map(({ product, quantity }) => ({
        item_id: product.sku || product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity,
      })),
    },
  });
};

// Type declaration for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
