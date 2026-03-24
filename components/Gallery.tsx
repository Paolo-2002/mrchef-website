'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg', alt: 'Panino special Mr. Chef' },
  { src: '/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg', alt: 'Panino artigianale' },
  { src: '/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg', alt: 'Mr. Chef classico' },
  { src: '/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg', alt: 'Preparazione panino' },
  { src: '/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg', alt: 'Panino con ingredienti freschi' },
  { src: '/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg', alt: 'Mr. Chef Casoria' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">I nostri scatti</span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2 className="font-serif text-[#1A1A1A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}>
            La nostra galleria
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`gallery-item group relative overflow-hidden rounded-lg ${i === 0 || i === 4 ? 'aspect-[4/5]' : 'aspect-square'}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-600"
              />
              {/* Overlay */}
              <div className="gallery-overlay absolute inset-0 bg-[#FF8C00]/70 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#FF8C00] font-medium text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
          >
            Vedi tutta la gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
