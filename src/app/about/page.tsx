import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Heart, Flame, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nás – Náš příběh | Kimchi Love',
  description:
    'Kimchi Love – příběh o lásce ke korejské kuchyni a tradičnímu kimchi. Ručně vyráběné kimchi podle rodinného receptu z Pusanu v Jižní Koreji.',
  alternates: { canonical: 'https://www.kimchilove.cz/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-kimchi-black py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=1600&q=80"
            alt="Výroba kimchi"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-4">
            Náš příběh
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
            Láska na první sousto
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Kimchi Love vzniklo z vášně pro korejskou kuchyni a přesvědčení,
            že autentické jídlo bez chemie může být dostupné každému.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="section-heading mb-6">
                Z Pusanu do Česka
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Vše začalo láskou ke korejské kuchyni a fascinací fermentovanými potravinami.
                Recept na kimchi, který dnes používáme, pochází přímo z Pusanu – druhého
                největšího města Jižní Koreje.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Je to rodinný recept přenášený z generace na generaci, plný tradice a lásky.
                Rozhodli jsme se ho přivézt do Česka a sdílet ho s vámi – zachovávajíce
                autenticitu a poctivost, na které korejská kuchyně stojí.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Každá dávka našeho kimchi je ručně vyrobena s pečlivostí a úctou k tradici.
                Žádné zkratky, žádné kompromisy. Jen čerstvé ingredience, čas a láska.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=800&q=85"
                  alt="Výroba kimchi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-kimchi-red text-white p-5 rounded-2xl shadow-lg">
                <p className="font-display text-3xl font-bold">Pusan</p>
                <p className="text-white/80 text-sm">Rodinný recept z Koreje</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Leaf,
                title: '100% přírodní',
                desc: 'Žádné konzervační látky, emulgátory ani barviva. Jen to, co matka příroda dala.',
              },
              {
                icon: Flame,
                title: 'Autentická chuť',
                desc: 'Recept z Pusanu, Jižní Korea. Generace zkušeností v každém soustu.',
              },
              {
                icon: Heart,
                title: 'Vyrobeno ručně',
                desc: 'Každá dávka kimchi je ručně připravena s péčí a respektem k tradici.',
              },
              {
                icon: Award,
                title: 'Živé probiotika',
                desc: 'Přirozená fermentace bez pasterizace zachovává všechny živé kultury.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-kimchi-cream rounded-2xl p-6">
                <div className="w-12 h-12 bg-kimchi-red/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-kimchi-red" />
                </div>
                <h3 className="font-semibold text-kimchi-black text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-kimchi-black text-white rounded-3xl p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Naše mise
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Chceme, aby každý mohl zažít skutečnou chuť korejského kimchi – živého,
              fermentovaného, plného probiotik a chuťové hloubky. Bez kompromisů, bez zkratek.
              Jen láska na prvním soustu.
            </p>
            <Link href="/kimchi" className="btn-primary inline-flex items-center gap-2 group">
              Vyzkoušet naše kimchi
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-kimchi-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Máte otázku?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Rádi se s vámi spojíme. Napište nám nebo zavolejte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@kimchilove.cz" className="btn-primary">
              info@kimchilove.cz
            </a>
            <a href="tel:+420775213766" className="btn-outline">
              +420 775 213 766
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
