'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Truck, Star, WheatOff } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const containerRef = useRef(null);
  
  // Parallax per la scritta enorme di background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} id="about" className="relative py-24 lg:py-40 bg-white overflow-hidden">
      {/* Huge Background Text (EXPERIENCE) */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute top-10 left-0 w-full text-center z-0 pointer-events-none select-none flex justify-center opacity-30 sm:opacity-50"
      >
        <span className="text-[120px] sm:text-[180px] lg:text-[250px] leading-none font-sans font-extrabold text-gray-100 tracking-tighter uppercase whitespace-nowrap">
          EXPERIENCE
        </span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 lg:mb-32 relative">
          
          {/* Left Column: Floating Rotating Images (Sticky) */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
            {/* 
              This sticky block ensures the rotating images stay pinned on screen 
              while the user scrolls through the text on the right. 
            */}
            <div className="lg:sticky lg:top-40 lg:h-[600px] w-full flex items-center justify-center">
              
              {/* Main Center Image (Piatto unico fluttuante gentilmente) */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] z-20 flex-shrink-0 rounded-full sm:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white"
              >
                <Image 
                  src="/images/piatto-di-pasta.png" 
                  alt="Piatto di Pasta" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>

            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:w-1/2 lg:py-20">
            {/* Title / Subtitle Block */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#FF8C00]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF8C00]">Since 2014</span>
            </div>
            
            <h2 className="font-serif text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.0] mb-8 uppercase tracking-tight">
              WONDERFUL DINING<br/>
              EXPERIENCE & FOOD.
            </h2>
            
            <p className="text-gray-500 mb-6 leading-relaxed text-lg lg:text-xl font-medium">
              Un'esperienza autentica, un morso alla volta. Da oltre 10 anni, Mr. Chef è il punto di riferimento per chi cerca un panino fatto come si deve a Casoria. 
            </p>
            <p className="text-gray-500 mb-12 leading-relaxed text-lg">
              Ingredienti freschi, pane artigianale e ricette pensate con passione assoluta. Ogni singolo panino servito ogni giorno racconta la nostra storia e la nostra dedizione per la qualità estrema.
            </p>

            {/* Buttons & Contact */}
            <div className="flex flex-wrap items-center gap-8">
              <Link 
                href="/storia" 
                className="group flex items-center gap-3 bg-[#333333] text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition-colors duration-300"
                style={{ borderRadius: '2px' }}
              >
                IL NOSTRO LOCALE
              </Link>
              <a href="tel:08119571937" className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#FF8C00] transition-colors group">
                <Phone size={24} className="text-[#FF8C00] group-hover:scale-110 transition-transform" />
                <span className="text-2xl lg:text-3xl font-serif font-bold tracking-wider">081 1957 1937</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Features (Icons + Texts) */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 pt-16 border-t border-gray-200">
          {/* Feature 1 */}
          <div className="flex items-center justify-start md:justify-center gap-6 group">
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF8C00] transition-colors duration-500 bg-white shadow-sm">
              <Truck size={28} className="text-[#1A1A1A] group-hover:text-[#FF8C00] transition-colors" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-bold text-[#1A1A1A] mb-1 uppercase tracking-wide">FAST DELIVERY</h4>
              <p className="text-gray-500 text-sm">Entro 30 minuti a casa tua</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-start md:justify-center gap-6 group">
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF8C00] transition-colors duration-500 bg-white shadow-sm">
              <Star size={28} className="text-[#1A1A1A] group-hover:text-[#FF8C00] transition-colors" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-bold text-[#1A1A1A] mb-1 uppercase tracking-wide">ABSOLUTE DINING</h4>
              <p className="text-gray-500 text-sm">Qualità artigianale 100%</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-start md:justify-center gap-6 group">
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF8C00] transition-colors duration-500 bg-white shadow-sm">
              <WheatOff size={28} className="text-[#1A1A1A] group-hover:text-[#FF8C00] transition-colors" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-bold text-[#1A1A1A] mb-1 uppercase tracking-wide">PICKUP DELIVERY</h4>
              <p className="text-gray-500 text-sm">Senza glutine per tutti</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
