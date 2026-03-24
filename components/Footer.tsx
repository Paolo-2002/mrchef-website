import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + desc + socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FF8C00] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
                  <path d="M18 6C18 6 12 9.5 12 15c0 2.5 1.2 4.7 3 6L13.5 29h9L21 21c1.8-1.3 3-3.5 3-6 0-5.5-6-9-6-9Z" fill="white"/>
                  <path d="M14 13Q18 11 22 13" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold">Mr. Chef</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Paninoteca artigianale a Casoria dal 2014. Ingredienti freschi, ricette con passione, sapori autentici.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mrchefcasoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/mrchefcasoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-300"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Let's Talk */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8C00] mb-6">Let&apos;s Talk</h4>
            <div className="space-y-4">
              <a href="tel:08119571937" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Phone size={15} className="text-[#FF8C00]" />
                <div>
                  <div className="text-white text-sm font-medium">081 1957 1937</div>
                  <div className="text-xs text-gray-500">Ordini & Info</div>
                </div>
              </a>
              <a href="tel:3343638287" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Phone size={15} className="text-[#FF8C00]" />
                <div>
                  <div className="text-white text-sm font-medium">334 363 8287</div>
                  <div className="text-xs text-gray-500">Contatto diretto</div>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Ordina Online */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8C00] mb-6">Ordina Online</h4>
            <div className="space-y-4">
              <a href="mailto:info@mrchefcasoria.it" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={15} className="text-[#FF8C00]" />
                <span className="text-sm">info@mrchefcasoria.it</span>
              </a>
              <a
                href="https://www.instagram.com/mrchefcasoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon size={15} />
                <span className="text-sm">@mrchefcasoria</span>
              </a>
            </div>
            <div className="mt-8">
              <a
                href="tel:08119571937"
                className="inline-block bg-[#FF8C00] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#D97700] transition-colors"
                style={{ borderRadius: '2px' }}
              >
                Ordina Ora
              </a>
            </div>
          </div>

          {/* Col 4: Vieni a trovarci */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8C00] mb-6">Vieni a Trovarci</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <MapPin size={15} className="text-[#FF8C00] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-sm">Via G. Carducci 105</div>
                <div className="text-sm">Casoria (NA) 80026</div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Via+G.+Carducci+105+Casoria+NA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FF8C00] text-xs uppercase tracking-widest hover:gap-3 transition-all duration-300"
            >
              Apri in Maps →
            </a>
            {/* Nav links */}
            <div className="mt-8 space-y-2">
              {['Home', 'About', 'Menù', 'Storia', 'Gallery', 'Contatti'].map((link) => (
                <div key={link}>
                  <Link
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © 2025 Mr. Chef Casoria — P.IVA XXXXXXXX
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="text-gray-500 text-xs hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
