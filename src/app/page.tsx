import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
