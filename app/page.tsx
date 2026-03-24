import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import PopularDishes from '@/components/PopularDishes';
import MarqueeSection from '@/components/Marquee';
import SplitVisual from '@/components/SplitVisual';
import Testimonials from '@/components/Testimonials';
import CounterSection from '@/components/Counter';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MenuSection />
      <PopularDishes />
      <MarqueeSection />
      <SplitVisual />
      <Testimonials />
      <CounterSection />
      <Gallery />
    </>
  );
}
