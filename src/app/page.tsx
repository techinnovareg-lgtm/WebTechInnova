import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Effects from '@/components/common/Effects';

export default function Home() {
  return (
    <main>
      <Effects />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
