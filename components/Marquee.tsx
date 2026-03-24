export default function MarqueeSection() {
  const text = ['Autentico', '◍', 'Artigianale', '◍', 'Gustoso', '◍', 'Napoletano', '◍', 'Since 2014', '◍'];

  return (
    <section className="bg-[#1A1A1A] py-6 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...text, ...text].map((word, i) => (
          <span
            key={i}
            className={`inline-block px-4 font-serif ${
              word === '◍'
                ? 'text-[#FF8C00] text-4xl'
                : i % (text.length * 2) < text.length
                ? 'text-white text-4xl lg:text-5xl font-light'
                : 'text-white/20 text-4xl lg:text-5xl font-light'
            }`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
