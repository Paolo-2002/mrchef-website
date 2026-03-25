'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menù', href: '/menu' },
  { label: 'Storia', href: '/storia' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
              <Image src="/images/logo.jpg" alt="Mr. Chef Logo" fill className="object-cover" />
            </div>
            <span
              className={`font-serif text-xl font-semibold transition-colors duration-300 ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              Mr. Chef
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-[#FF8C00] ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:08119571937"
              className="hidden lg:flex items-center gap-2 bg-[#FF8C00] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#D97700] transition-colors duration-300"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={13} />
              Ordina Ora
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Apri menu"
            >
              <Menu size={24} className={scrolled ? 'text-[#1A1A1A]' : 'text-white'} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-[#1A1A1A] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5">
              <span className="font-serif text-white text-xl font-semibold">Mr. Chef</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Chiudi menu">
                <X size={28} className="text-white" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white font-serif text-4xl font-light hover:text-[#FF8C00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <a
                href="tel:08119571937"
                className="flex items-center justify-center gap-2 bg-[#FF8C00] text-white py-4 text-sm font-semibold uppercase tracking-widest w-full"
                style={{ borderRadius: '2px' }}
              >
                <Phone size={15} />
                Ordina Ora — 081 1957 1937
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
