'use client';

import { useState } from 'react';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import { faqItems } from '@/data/faq';
import { motion, AnimatePresence } from 'framer-motion';

const categories = Array.from(new Set(faqItems.map((f) => f.category)));

function FAQItem({ item }: { item: (typeof faqItems)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-kimchi-cream/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-kimchi-black pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-kimchi-red transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? faqItems.filter((f) => f.category === activeCategory)
    : faqItems;

  return (
    <>
      {/* Hero */}
      <section className="bg-kimchi-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Máte otázku?
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-kimchi-black mb-4">
            FAQ
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Nejčastěji kladené otázky o našich produktech, doručení a korejské kuchyni.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? 'bg-kimchi-red text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-kimchi-cream'
              }`}
            >
              Vše
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-kimchi-red text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-kimchi-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items grouped by category */}
          <div className="space-y-8">
            {(activeCategory ? [activeCategory] : categories).map((cat) => {
              const items = filteredItems.filter((f) => f.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat}>
                  <h2 className="font-display text-xl font-bold text-kimchi-black mb-4">
                    {cat}
                  </h2>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <FAQItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-kimchi-black text-white rounded-3xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold mb-3">
              Nenašli jste odpověď?
            </h2>
            <p className="text-gray-300 mb-6">
              Napište nám nebo zavolejte – rádi pomůžeme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@kimchilove.cz"
                className="flex items-center gap-2 bg-kimchi-red text-white px-6 py-3 rounded-full font-medium hover:bg-kimchi-red-dark transition-colors"
              >
                <Mail size={16} />
                info@kimchilove.cz
              </a>
              <a
                href="tel:+420775213766"
                className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                +420 775 213 766
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
