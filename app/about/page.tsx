import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Mr. Chef Casoria',
  description: 'La storia di Mr. Chef, paninoteca artigianale a Casoria dal 2014.',
};

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative h-72 lg:h-96 bg-[#1A1A1A] flex items-end overflow-hidden">
        <Image
          src="/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg"
          alt="Mr. Chef - Chi siamo"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Chi siamo</span>
          </div>
          <h1 className="font-serif text-white text-5xl lg:text-7xl font-light">About</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-4xl font-light text-[#1A1A1A] mb-6 leading-tight">
              Nati dalla passione,<br />cresciuti con amore.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mr. Chef nasce nel 2014 a Casoria, dal sogno di portare in tavola — o meglio, tra le mani — il panino perfetto. Quello fatto con ingredienti veri, selezionati ogni giorno, tra cui le migliori carni di scottona e le specialità napoletane più autentiche.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nel corso degli anni abbiamo costruito un menù di 16 panini unici, ognuno con una personalità propria: dal Classico con salsiccia e friarielli, al Pistacchiotto con crema di pistacchio e mortadella.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              La nostra paninoteca è un luogo di incontro, di sapori e di qualità. Siamo orgogliosi di offrire anche opzioni <strong>Gluten Free</strong> per tutti i nostri clienti.
            </p>
            <a
              href="tel:08119571937"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#D97700] transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Ordina Ora
            </a>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" alt="Mr. Chef panino" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image src="/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" alt="Mr. Chef interno" fill className="object-cover" />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image src="/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" alt="Mr. Chef prodotto" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
