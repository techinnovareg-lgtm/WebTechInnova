import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Store from '@/components/sections/Store';
import Contact from '@/components/sections/Contact';

import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Store />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
