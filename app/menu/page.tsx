'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '@/data/menu';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('panini');
  const currentCategory = menuData.find(c => c.id === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-72 lg:h-96 bg-[#1A1A1A] flex items-end overflow-hidden">
        <Image src="/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" alt="Menù Mr. Chef" fill className="object-cover opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Scegli il tuo preferito</span>
          </div>
          <h1 className="font-serif text-white text-5xl lg:text-7xl font-light">Il Menù</h1>
        </div>
      </section>

      {/* Menù Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 border-b-2 -mb-px ${
                activeTab === cat.id ? 'border-[#FF8C00] text-[#FF8C00]' : 'border-transparent text-gray-500 hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

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
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image || '/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg'} alt={item.nome} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {item.tags.includes('bestseller') && (
                    <div className="absolute top-3 left-3 bg-[#FF8C00] text-white text-xs px-2 py-1 font-semibold uppercase tracking-wide rounded">Bestseller</div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#1A1A1A] text-sm tracking-wide">{item.nome}</h3>
                    <span className="text-[#FF8C00] font-bold text-sm ml-2 flex-shrink-0">€{item.prezzo.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.ingredienti}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="mt-16 p-6 bg-[#FFF8F0] rounded-xl border-l-4 border-[#FF8C00]">
          <p className="text-sm text-gray-600">
            ℹ️ Menù soggetto a variazioni stagionali. Per allergie e intolleranze chiedere al personale. Opzioni <strong>Gluten Free</strong> disponibili su richiesta.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            📞 Ordini e prenotazioni: <a href="tel:08119571937" className="text-[#FF8C00] font-medium">081 1957 1937</a> | <a href="tel:3343638287" className="text-[#FF8C00] font-medium">334 363 8287</a>
          </p>
        </div>
      </section>
    </div>
  );
}
