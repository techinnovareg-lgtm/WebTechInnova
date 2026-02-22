import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>Tech Innova</h3>
                        <p>Innovación en cada solución. Expertos en transformación digital y desarrollo full-stack.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Servicios</h4>
                        <ul>
                            <li><Link href="#software">Software a Medida</Link></li>
                            <li><Link href="#excel">Excel Avanzado</Link></li>
                            <li><Link href="#tienda">Tienda Digital</Link></li>
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contacto</h4>
                        <p>📧 tech.innova.reg@gmail.com</p>
                        <p>📱 +51 947 515 529</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Tech Innova. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
