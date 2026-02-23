'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Martina K.',
    location: 'Praha',
    rating: 5,
    text: 'Nejlepší kimchi, které jsem kdy ochutnala mimo Koreu! Chuť je autentická a živá. Objednávám každý měsíc.',
  },
  {
    name: 'Tomáš M.',
    location: 'Brno',
    rating: 5,
    text: 'Skvělá kvalita, rychlé doručení. Kimchi Classic je v naší domácnosti pravidelnou zásobou. Doporučuji!',
  },
  {
    name: 'Jana P.',
    location: 'Praha',
    rating: 5,
    text: 'Jako vegetariánka jsem ráda, že mají i veganskou variantu. Chuť je výborná a ingredience opravdu čisté.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-kimchi-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Co říkají zákazníci
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Hodnocení
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-5 italic">&quot;{t.text}&quot;</p>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
