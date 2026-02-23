'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/kimchi', label: 'Kimchi' },
  { href: '/kl-own', label: 'KL Own' },
  { href: '/pantry', label: 'Spíž' },
  { href: '/recipes', label: 'Recepty' },
  { href: '/about', label: 'O nás' },
  { href: '/find-us', label: 'Kde nás najdete' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-40 h-10">
              <Image
                src="/images/logo.svg"
                alt="Kimchi Love"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-kimchi-black hover:text-kimchi-red font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2 text-kimchi-black hover:text-kimchi-red transition-colors"
              aria-label={`Košík (${totalItems} položek)`}
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-kimchi-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-kimchi-black hover:text-kimchi-red transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Navigační menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-kimchi-black hover:text-kimchi-red hover:bg-kimchi-cream rounded-lg font-medium transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="block px-4 py-3 text-kimchi-black hover:text-kimchi-red hover:bg-kimchi-cream rounded-lg font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
