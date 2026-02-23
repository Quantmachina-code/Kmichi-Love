'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Flame } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: '100% přírodní',
    desc: 'Žádné konzervační látky, žádná chemie. Jen čerstvé ingredience a tradice.',
  },
  {
    icon: Flame,
    title: 'Autentická chuť',
    desc: 'Recept přímo z Pusanu, Jižní Korea. Generace zkušeností v každém soustu.',
  },
  {
    icon: Heart,
    title: 'Vyrobeno s láskou',
    desc: 'Každá dávka kimchi je ručně vyrobena s péčí a respektem k tradici.',
  },
];

export function AboutTeaser() {
  return (
    <section className="py-20 bg-kimchi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=800&q=85"
                alt="Výroba kimchi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-kimchi-red text-white rounded-2xl px-6 py-4 shadow-lg">
              <p className="font-display text-3xl font-bold">Pusan</p>
              <p className="text-sm text-white/80">Jižní Korea</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
              Náš příběh
            </p>
            <h2 className="section-heading mb-6">
              Recept starý
              <br />
              <span className="italic text-kimchi-red">generace</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kimchi Love vzniklo ze zájmu o korejskou kulturu a lásky ke kvašeným potravinám.
              Náš recept pochází přímo z Pusanu – je to rodinný recept přenášený z generace
              na generaci. Přivezli jsme ho do Česka a chceme se o něj podělit s vámi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Každé kimchi připravujeme ručně, bez konzervantů a bez chemie.
              Jen čínské zelí, gochugaru, česnek, zázvor a čas. Výsledek?
              Živé, probiotiky nabité kimchi plné chuti.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={20} className="text-kimchi-red" />
                  </div>
                  <h3 className="font-semibold text-kimchi-black text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary flex items-center gap-2 group w-fit"
            >
              Přečíst náš příběh
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
