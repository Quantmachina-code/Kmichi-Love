export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'kimchi' | 'kl-own' | 'pantry';
  subcategory?: string;
  price: number;
  weight?: string;
  description: string;
  shortDescription: string;
  image: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  ingredients?: string[];
  allergens?: string[];
  nutritionPer100g?: {
    energy: string;
    fat: string;
    carbohydrates: string;
    protein: string;
    salt: string;
  };
  sku?: string;
  gtin?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  publishedAt: string;
  author: string;
  featuredProducts?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PantryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}
