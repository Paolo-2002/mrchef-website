'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Marco R.',
    text: 'Il panino più buono di tutta Casoria. Ingredienti freschi e porzioni generose. Ci torno ogni settimana! Il Double Chef è un capolavoro.',
    stars: 5,
    avatar: '👨',
  },
  {
    name: 'Valentina S.',
    text: 'Finalmente una paninoteca che capisce il cibo di qualità. Il Pistacchiotto è da urlo — crema di pistacchio e mortadella, una combo perfetta!',
    stars: 5,
    avatar: '👩',
  },
  {
    name: 'Luigi M.',
    text: 'Servizio veloce e panini spettacolari. Il Bufalino è il mio preferito in assoluto. Mr. Chef è il top di Casoria, punto.',
    stars: 5,
    avatar: '👨‍🍳',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-[#FFF8F0]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FF8C00]">Cosa dicono di noi</span>
            <div className="w-8 h-px bg-[#FF8C00]" />
          </div>
          <h2 className="font-serif text-[#1A1A1A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}>
            Le loro parole
          </h2>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* Quote icon */}
            <div className="text-[#FF8C00] text-6xl font-serif leading-none mb-6">&ldquo;</div>

            {/* Avatar */}
            <div className="text-5xl mb-4">{testimonials[current].avatar}</div>

            {/* Text */}
            <p className="font-serif text-[#1A1A1A] text-xl lg:text-2xl leading-relaxed mb-8 italic font-light max-w-2xl mx-auto">
              {testimonials[current].text}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(testimonials[current].stars)].map((_, i) => (
                <span key={i} className="text-[#FF8C00] text-lg">★</span>
              ))}
            </div>

            {/* Name */}
            <p className="font-semibold text-[#1A1A1A] text-sm uppercase tracking-widest">
              — {testimonials[current].name}
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#FF8C00] text-[#FF8C00] flex items-center justify-center hover:bg-[#FF8C00] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#FF8C00] w-6' : 'bg-[#FF8C00]/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#FF8C00] text-[#FF8C00] flex items-center justify-center hover:bg-[#FF8C00] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
