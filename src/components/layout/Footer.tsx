import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-kimchi-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-36 h-9 mb-4">
              <Image
                src="/images/logo-white.svg"
                alt="Kimchi Love"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Ručně vyráběné kimchi podle starého rodinného receptu přímo z&nbsp;Pusanu.
              Bez konzervantů, bez chemie – jen spicy love.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/eat.kimchilove"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Kimchi Love"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/kimchi.love"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram Kimchi Love"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produkty</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/kimchi" className="hover:text-white transition-colors">
                  Kimchi
                </Link>
              </li>
              <li>
                <Link href="/kl-own" className="hover:text-white transition-colors">
                  KL Own
                </Link>
              </li>
              <li>
                <Link href="/pantry" className="hover:text-white transition-colors">
                  Spíž
                </Link>
              </li>
              <li>
                <Link href="/pantry/noodles" className="hover:text-white transition-colors">
                  Nudle
                </Link>
              </li>
              <li>
                <Link href="/pantry/sauces" className="hover:text-white transition-colors">
                  Omáčky & Oleje
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Společnost</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-white transition-colors">
                  Recepty
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="hover:text-white transition-colors">
                  Kde nás najdete
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Košík
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-kimchi-red" />
                <span>
                  Žižkova brána 1085
                  <br />
                  Čáslav – 286 01
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-kimchi-red" />
                <a href="mailto:info@kimchilove.cz" className="hover:text-white transition-colors">
                  info@kimchilove.cz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-kimchi-red" />
                <a href="tel:+420775213766" className="hover:text-white transition-colors">
                  +420 775 213 766
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kimchi Love. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Ochrana osobních údajů
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
