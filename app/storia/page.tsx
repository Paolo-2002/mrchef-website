import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'La Nostra Storia — Mr. Chef Casoria',
  description: 'La storia di Mr. Chef, paninoteca artigianale a Casoria dal 2014.',
};

export default function StoriaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 lg:h-96 bg-[#1A1A1A] flex items-end overflow-hidden">
        <Image src="/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" alt="La storia di Mr. Chef" fill className="object-cover opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">La nostra storia</span>
          </div>
          <h1 className="font-serif text-white text-5xl lg:text-7xl font-light">Storia</h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="space-y-16">
          {[
            { year: '2014', title: "Nasce Mr. Chef", desc: "Apre le porte la prima sede di Mr. Chef a Via G. Carducci 105, Casoria. L'idea è semplice: panini artigianali fatti con ingredienti veri, in una città che merita il meglio." },
            { year: '2016', title: "Il menù si evolve", desc: "Introduciamo i primi panini speciali con carni di scottona selezionate. Nascono i classici Cremoso e Bufalino, che diventeranno presto amatissimi." },
            { year: '2019', title: "Gluten Free & Speciali", desc: "In risposta alle richieste dei nostri clienti più affezionati, introduciamo le opzioni Gluten Free. L'inclusività diventa parte del nostro DNA." },
            { year: '2022', title: "I grandi bestseller", desc: "Pistacchiotto, Lucifer e Nerano entrano nel menù e diventano immediatamente virali tra i food lovers di Casoria e Napoli." },
            { year: 'Oggi', title: "10+ anni di passione", desc: "Siamo qui ogni giorno, con la stessa passione del primo giorno. Oltre 5000 clienti soddisfatti, 16 panini unici, e tanta strada ancora da percorrere insieme." },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="font-serif text-[#FF8C00] text-xl font-medium">{item.year}</span>
              </div>
              <div className="w-px bg-[#FF8C00]/20 flex-shrink-0 mt-1 self-stretch relative">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF8C00]" />
              </div>
              <div className="pb-8">
                <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFF8F0] text-center">
        <h2 className="font-serif text-4xl font-light text-[#1A1A1A] mb-4">Vieni a trovarci</h2>
        <p className="text-gray-600 mb-8">Via G. Carducci 105, Casoria (NA) 80026</p>
        <a href="tel:08119571937" className="inline-block bg-[#FF8C00] text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#D97700] transition-colors" style={{ borderRadius: '2px' }}>
          Chiamaci Ora
        </a>
      </section>
    </div>
  );
}
