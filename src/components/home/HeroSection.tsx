'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-kimchi-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1920&q=85"
          alt="Kimchi v misce"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kimchi-black/90 via-kimchi-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-4">
              Ručně vyráběno s láskou
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              love at{' '}
              <span className="italic text-kimchi-red-light">first bite</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-lg">
              Kimchi podle starého rodinného receptu z Pusanu. Bez konzervantů,
              bez chemie – jen fermentované zelí, gochugaru a spicy love.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kimchi"
                className="btn-primary flex items-center gap-2 group text-base"
              >
                Objevit kimchi
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link href="/about" className="btn-outline text-white border-white hover:bg-white hover:text-kimchi-black text-base">
                Náš příběh
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20"
          >
            {[
              { value: '100%', label: 'Přírodní ingredience' },
              { value: 'Bez', label: 'Konzervantů & chemie' },
              { value: 'Pusan', label: 'Rodinný recept z Koreje' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce-soft" />
      </motion.div>
    </section>
  );
}
