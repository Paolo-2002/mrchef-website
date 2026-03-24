'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Star, Wheat } from 'lucide-react';

const microbadges = [
  { icon: <Truck size={20} className="text-[#FF8C00]" />, title: 'Consegna rapida', desc: 'Ordina comodamente da casa' },
  { icon: <Star size={20} className="text-[#FF8C00]" />, title: 'Qualità artigianale', desc: 'Ingredienti freschi ogni giorno' },
  { icon: <Wheat size={20} className="text-[#FF8C00]" />, title: 'Gluten Free', desc: 'Opzioni senza glutine disponibili' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#FF8C00]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Since 2014</span>
            </div>

            {/* Title */}
            <h2 className="font-serif mb-6 text-[#1A1A1A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}>
              Un&apos;esperienza autentica,<br />
              un morso alla volta.
            </h2>

            {/* Text */}
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Da oltre 10 anni, Mr. Chef è il punto di riferimento per chi cerca
              un panino fatto come si deve a Casoria e dintorni.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ingredienti freschi, pane artigianale, ricette pensate con passione.
              Ogni panino racconta una storia — la nostra.
            </p>

            {/* Link */}
            <Link
              href="/storia"
              className="inline-flex items-center gap-2 text-[#FF8C00] font-medium text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 mb-10"
            >
              Scopri la nostra storia
              <span>→</span>
            </Link>

            {/* Phone */}
            <div className="mb-10">
              <a
                href="tel:3343638287"
                className="font-serif text-3xl font-light text-[#1A1A1A] hover:text-[#FF8C00] transition-colors"
              >
                334 363 8287
              </a>
            </div>

            {/* Micro badges */}
            <div className="grid grid-cols-1 gap-4">
              {microbadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#FFF8F0] rounded-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {badge.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">{badge.title}</p>
                    <p className="text-gray-500 text-sm">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            {/* Main large image */}
            <div className="absolute right-0 top-0 w-3/4 h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg"
                alt="Mr. Chef panino speciale"
                fill
                className="object-cover"
              />
            </div>
            {/* Second image */}
            <div className="absolute left-0 bottom-16 w-2/3 h-72 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg"
                alt="Mr. Chef interno"
                fill
                className="object-cover"
              />
            </div>
            {/* Third image overlay */}
            <div className="absolute right-8 bottom-0 w-40 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/imgi_1_275514676_375531730811576_1476050584335206486_n.jpg"
                alt="Mr. Chef logo"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-4 top-24 bg-[#FF8C00] text-white px-6 py-3 rounded-lg shadow-lg">
              <div className="font-serif text-2xl font-light">10+</div>
              <div className="text-xs uppercase tracking-wider">Anni di passione</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
