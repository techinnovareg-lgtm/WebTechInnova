import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Store from '@/components/sections/Store';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export const metadata = {
    title: 'Tienda Digital | Tech Innova',
    description: 'Explora nuestras soluciones de software listas para usar, incluyendo EasyRent y herramientas especializadas.',
};

export default function TiendaPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>
                <Store />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
