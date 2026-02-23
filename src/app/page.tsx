import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductHighlights } from '@/components/home/ProductHighlights';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { RecipesTeaser } from '@/components/home/RecipesTeaser';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Kimchi Love – love at first bite | Ručně vyráběné kimchi z Koreje',
  description:
    'Kimchi Love – ručně vyráběné kimchi podle starého rodinného receptu z Pusanu. Bez konzervantů, bez chemie. Kimchi Classic, Vegan kimchi a korejské potraviny. Doručujeme po celé ČR.',
  alternates: {
    canonical: 'https://www.kimchilove.cz',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductHighlights />
      <AboutTeaser />
      <RecipesTeaser />
      <TestimonialsSection />
    </>
  );
}
