import type { Metadata } from 'next';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery — Mr. Chef Casoria',
  description: 'Guarda le foto dei nostri panini artigianali e del locale Mr. Chef a Casoria.',
};

const allImages = [
  { src: '/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg', alt: 'Panino special' },
  { src: '/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg', alt: 'Panino artigianale' },
  { src: '/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg', alt: 'Mr. Chef classico' },
  { src: '/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg', alt: 'Interno locale' },
  { src: '/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg', alt: 'Panino freschi' },
  { src: '/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg', alt: 'Mr. Chef Casoria' },
  { src: '/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg', alt: 'Dettaglio panino' },
  { src: '/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg', alt: 'Ingredienti freschi' },
  { src: '/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg', alt: 'Panino con carne' },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 lg:h-96 bg-[#1A1A1A] flex items-end overflow-hidden">
        <Image src="/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" alt="Gallery Mr. Chef" fill className="object-cover opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">I nostri scatti</span>
          </div>
          <h1 className="font-serif text-white text-5xl lg:text-7xl font-light">Gallery</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {allImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-lg ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-600" />
              <div className="gallery-overlay absolute inset-0 bg-[#FF8C00]/70 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <p className="text-gray-500 mb-6 text-sm">Seguici su Instagram per altri scatti!</p>
        <a
          href="https://www.instagram.com/mrchefcasoria/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FF8C00] text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#D97700] transition-colors"
          style={{ borderRadius: '2px' }}
        >
          @mrchefcasoria
        </a>
      </section>
    </div>
  );
}
