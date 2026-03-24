'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { menuData } from '@/data/menu';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('panini');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const currentCategory = menuData.find(c => c.id === activeTab);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#F5F5F5]" ref={ref}>
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
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Scegli il tuo preferito</span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2 className="font-serif text-[#1A1A1A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}>
            Il nostro menù
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-0 mb-12 border-b border-gray-200"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 border-b-2 -mb-px ${
                activeTab === cat.id
                  ? 'border-[#FF8C00] text-[#FF8C00]'
                  : 'border-transparent text-gray-500 hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory?.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || '/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg'}
                    alt={item.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {item.tags.includes('bestseller') && (
                    <div className="absolute top-3 left-3 bg-[#FF8C00] text-white text-xs px-2 py-1 font-semibold uppercase tracking-wide rounded">
                      Bestseller
                    </div>
                  )}
                  {item.tags.includes('premium') && (
                    <div className="absolute top-3 left-3 bg-[#C8A96E] text-white text-xs px-2 py-1 font-semibold uppercase tracking-wide rounded">
                      Premium
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#1A1A1A] text-sm tracking-wide">{item.nome}</h3>
                    <span className="text-[#FF8C00] font-bold text-sm ml-2">€{item.prezzo.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.ingredienti}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/menu"
            className="inline-block border border-[#FF8C00] text-[#FF8C00] px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#FF8C00] hover:text-white transition-all duration-300"
            style={{ borderRadius: '2px' }}
          >
            Vedi il Menù Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
