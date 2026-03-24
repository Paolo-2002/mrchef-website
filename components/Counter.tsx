'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const stats = [
  { value: 10, suffix: '+', label: 'Anni di attività' },
  { value: 5000, suffix: '+', label: 'Clienti soddisfatti' },
  { value: 16, suffix: '+', label: 'Panini nel menù' },
  { value: 100, suffix: '%', label: 'Ingredienti freschi' },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString('it-IT')}{suffix}
    </span>
  );
}

export default function CounterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-white mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1 }}>
                <span className="text-[#FF8C00]">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
