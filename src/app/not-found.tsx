import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-display font-bold text-kimchi-red mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-kimchi-black mb-3">
          Stránka nenalezena
        </h1>
        <p className="text-gray-500 mb-8">
          Požadovaná stránka neexistuje. Mohla být přesunuta nebo smazána.
          Vyberte si z naší nabídky kimchi nebo se vraťte na hlavní stránku.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary flex items-center gap-2 group">
            Domů
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/kimchi" className="btn-outline">
            Naše kimchi
          </Link>
        </div>
      </div>
    </div>
  );
}
