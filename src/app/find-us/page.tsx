import { Metadata } from 'next';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kde nás najdete – Kimchi Love',
  description:
    'Kde koupit kimchi v Praze a okolí. Farmářské trhy, asijské obchody a online objednávky. Kimchi Love – Čáslav, dodávka po celé ČR.',
  alternates: { canonical: 'https://www.kimchilove.cz/find-us' },
};

const locations = [
  {
    name: 'Farmářské trhy Jiřák',
    address: 'náměstí Jiřího z Poděbrad, Praha 3',
    schedule: 'Každou sobotu 8:00 – 14:00',
    note: 'Náš hlavní pražský trh – přijďte si kimchi ochutnat!',
    type: 'market',
  },
  {
    name: 'Farmářské trhy Tylovo náměstí',
    address: 'Tylovo náměstí, Praha 2',
    schedule: 'Každou středu 8:00 – 14:00',
    note: 'Menší trh v srdci Prahy 2.',
    type: 'market',
  },
  {
    name: 'Asijský supermarket Feng Asia',
    address: 'Holešovice, Praha 7',
    schedule: 'Po – Ne: 9:00 – 21:00',
    note: 'Najdete nás v chladícím regálu.',
    type: 'store',
  },
];

export default function FindUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-kimchi-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kimchi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Navštivte nás
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-kimchi-black mb-4">
            Kde nás najdete
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Naše kimchi najdete na farmářských trzích v Praze a ve vybraných
            asijských obchodech. Nebo si objednejte online s doručením domů.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-kimchi-cream rounded-2xl p-6 border border-kimchi-cream-dark"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-kimchi-red" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-kimchi-black text-lg">{loc.name}</h2>
                    <p className="text-gray-500 text-sm">{loc.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Clock size={14} className="text-kimchi-red shrink-0" />
                  {loc.schedule}
                </div>
                <p className="text-gray-500 text-sm">{loc.note}</p>
                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                    loc.type === 'market'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {loc.type === 'market' ? '🏪 Farmářský trh' : '🛒 Obchod'}
                </span>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden mb-16 aspect-[16/6] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-kimchi-red mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Mapa míst prodeje</p>
              <p className="text-gray-400 text-sm mt-1">Google Maps embed bude doplněn</p>
              <a
                href="https://maps.google.com/?q=Praha"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block btn-primary text-sm"
              >
                Otevřít v Google Maps
              </a>
            </div>
          </div>

          {/* HQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-6">Kontaktujte nás</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-kimchi-red" />
                  </div>
                  <div>
                    <p className="font-medium text-kimchi-black">Adresa</p>
                    <p className="text-gray-500 text-sm">
                      Žižkova brána 1085<br />
                      Čáslav – 286 01<br />
                      Česká republika
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-kimchi-red" />
                  </div>
                  <div>
                    <p className="font-medium text-kimchi-black">E-mail</p>
                    <a href="mailto:info@kimchilove.cz" className="text-kimchi-red hover:underline text-sm">
                      info@kimchilove.cz
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-kimchi-red" />
                  </div>
                  <div>
                    <p className="font-medium text-kimchi-black">Telefon</p>
                    <a href="tel:+420775213766" className="text-kimchi-red hover:underline text-sm">
                      +420 775 213 766
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-kimchi-red" />
                  </div>
                  <div>
                    <p className="font-medium text-kimchi-black">Instagram</p>
                    <a
                      href="https://www.instagram.com/kimchi.love"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-kimchi-red hover:underline text-sm"
                    >
                      @kimchi.love
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kimchi-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <Facebook size={18} className="text-kimchi-red" />
                  </div>
                  <div>
                    <p className="font-medium text-kimchi-black">Facebook</p>
                    <a
                      href="https://www.facebook.com/eat.kimchilove"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-kimchi-red hover:underline text-sm"
                    >
                      eat.kimchilove
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Online order CTA */}
            <div className="bg-kimchi-black text-white rounded-3xl p-10 text-center">
              <p className="text-5xl mb-4">🚚</p>
              <h3 className="font-display text-2xl font-bold mb-3">
                Objednejte online
              </h3>
              <p className="text-gray-300 mb-6">
                Doprava zdarma v Praze pro objednávky nad 1 000 Kč.
                Doručujeme po celé České republice.
              </p>
              <a href="/kimchi" className="btn-primary inline-block">
                Nakoupit online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
