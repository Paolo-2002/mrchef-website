'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const rotatingWords = ['EXPERIENCE', 'RESTAURANT'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-4k.jpg"
          alt="Mr. Chef - Panini artigianali"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover opacity-70 transition-all duration-1000"
          priority
        />
        {/* Subtle dark overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Center Layout Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-center pt-24 pb-12">
        {/* The Big Orange Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] lg:w-[38rem] lg:h-[38rem] bg-[#FF8C00] rounded-full shadow-2xl overflow-visible"
        >
          {/* Subtle Background Pattern inside the circle */}
          <div className="absolute inset-0 opacity-10 rounded-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          {/* Subtitle */}
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#1A1A1A] text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-4 lg:mb-4 text-center px-4 z-10"
          >
            LA VERA ESSENZA DEL GUSTO
          </motion.h3>

          {/* Fixed Main Title (Hollow/Outlined style like "GREAT DINING") */}
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-sans font-bold text-center leading-none z-10 mb-1 lg:mb-2"
            style={{ 
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
              WebkitTextStroke: '2px white',
              color: 'transparent'
            }}
          >
            MR. CHEF
          </motion.h2>

          {/* Alternating Sub Title (Solid white like "RESTAURANT") */}
          <div className="z-10 mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center min-h-[3.5rem] sm:min-h-[4.5rem] lg:min-h-[5.5rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-sans font-bold text-center leading-none text-white"
                style={{ 
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                }}
              >
                {rotatingWords[wordIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="z-10"
          >
            <Link
              href="#menu"
              className="group flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 sm:px-8 py-3 w-fit transition-colors duration-300 rounded-[2px]"
            >
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest">
                IL NOSTRO MENÙ
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Overlapping Badge (Bottom Right) */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="absolute -bottom-4 -right-12 sm:-bottom-8 sm:-right-16 md:-bottom-10 md:-right-12 lg:-bottom-6 lg:-right-4 z-20"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[#5d7647] rounded-full flex items-center justify-center shadow-xl relative"
            >
              {/* Spinning Text SVG (Using native CSS animation for immediate render) */}
              <div className="absolute inset-2 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="textPath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="transparent"
                  />
                  <text className="text-[12px] font-bold uppercase tracking-[0.2em]" fill="white">
                    <textPath href="#textPath" startOffset="0%">
                      REAL EXPERIENCE • TASTE OF ITALY • 
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Chef Icon in the Center */}
              <div className="absolute text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-10 sm:h-10 md:w-12 md:h-12">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                  <line x1="6" y1="17" x2="18" y2="17"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
