import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Contatti — Mr. Chef Casoria',
  description: 'Contatta Mr. Chef a Casoria. Ordini: 081 1957 1937. Via G. Carducci 105, Casoria (NA).',
};

export default function ContattiPage() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="relative h-72 lg:h-96 bg-[#1A1A1A] flex items-end overflow-hidden">
        <Image src="/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" alt="Contatti Mr. Chef" fill className="object-cover opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Siamo qui per te</span>
          </div>
          <h1 className="font-serif text-white text-5xl lg:text-7xl font-light">Contatti</h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info cards */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-light text-[#1A1A1A] mb-8">Vieni a trovarci</h2>

            {[
              { icon: <Phone size={20} className="text-[#FF8C00]" />, title: 'Ordini & Info', lines: ['081 1957 1937', '334 363 8287'], links: ['tel:08119571937', 'tel:3343638287'] },
              { icon: <Mail size={20} className="text-[#FF8C00]" />, title: 'Email', lines: ['info@mrchefcasoria.it'], links: ['mailto:info@mrchefcasoria.it'] },
              { icon: <MapPin size={20} className="text-[#FF8C00]" />, title: 'Indirizzo', lines: ['Via G. Carducci 105', 'Casoria (NA) 80026'], links: [] },
            ].map((card, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-[#FFF8F0] rounded-xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{card.title}</p>
                  {card.lines.map((line, j) => (
                    card.links[j] ? (
                      <a key={j} href={card.links[j]} className="block text-[#1A1A1A] font-medium hover:text-[#FF8C00] transition-colors">{line}</a>
                    ) : (
                      <p key={j} className="text-[#1A1A1A]">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/mrchefcasoria/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1A1A1A] text-white px-5 py-3 text-sm font-medium hover:bg-[#FF8C00] transition-colors rounded">
                <InstagramIcon size={16} /> @mrchefcasoria
              </a>
              <a href="https://www.facebook.com/mrchefcasoria/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1A1A1A] text-white px-5 py-3 text-sm font-medium hover:bg-[#FF8C00] transition-colors rounded">
                <FacebookIcon size={16} /> mrchefcasoria
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div>
            <h2 className="font-serif text-3xl font-light text-[#1A1A1A] mb-8">Dove siamo</h2>
            <div className="rounded-xl overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.42!2d14.295!3d40.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIEcuIENhcmR1Y2NpIDEwNSwgQ2Fzb3JpYQ!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Mr. Chef Casoria"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/Via+G.+Carducci+105+Casoria+NA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#FF8C00] text-sm font-medium hover:gap-3 transition-all"
            >
              <MapPin size={14} /> Apri in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
