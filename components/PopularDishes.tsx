'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { bestsellers } from '@/data/menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PopularDishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden" ref={ref}>
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
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">I nostri bestseller</span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}>
            I piatti più amati
          </h2>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.popular-pagination' }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {bestsellers.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative bg-[#242424] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-400">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.nome}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                    {/* Price */}
                    <div className="absolute top-4 right-4 bg-[#FF8C00] text-white px-3 py-1 text-sm font-bold rounded">
                      €{item.prezzo.toFixed(2)}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-[#FF8C00] text-xs font-medium uppercase tracking-widest mb-2">Solo €{item.prezzo.toFixed(2)}</div>
                    <h3 className="font-serif text-white text-2xl font-medium mb-3">{item.nome}</h3>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredienti.map((ing, i) => (
                        <span key={i} className="text-gray-400 text-sm">
                          {ing}{i < item.ingredienti.length - 1 && <span className="text-[#FF8C00] mx-1">◍</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="popular-pagination flex justify-center gap-2 mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
