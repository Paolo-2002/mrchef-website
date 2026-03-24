import Image from 'next/image';

export default function SplitVisual() {
  return (
    <section className="grid grid-cols-2 h-72 lg:h-screen max-h-[600px]">
      <div className="relative overflow-hidden group">
        <Image
          src="/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg"
          alt="Preparazione panini Mr. Chef"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="relative overflow-hidden group">
        <Image
          src="/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg"
          alt="Close-up panino Mr. Chef"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
    </section>
  );
}
