import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Tech Innova</h3>
                    <p>Innovación en cada solución. Expertos en transformación digital y desarrollo full-stack.</p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Servicios</h3>
                    <ul>
                        <li><Link href="/#servicios">Software a Medida</Link></li>
                        <li><Link href="/#servicios">Excel Avanzado</Link></li>
                        <li><Link href="/#servicios">Automatización RPA</Link></li>
                        <li><Link href="/tienda">Tienda Digital</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Compañía</h3>
                    <ul>
                        <li><Link href="/#inicio">Nosotros</Link></li>
                        <li><Link href="/#proceso">Proceso</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contacto</h3>
                    <ul>
                        <li><a href="mailto:tech.innova.reg@gmail.com">tech.innova.reg@gmail.com</a></li>
                        <li><a href="https://wa.me/51947515529">+51 947 515 529</a></li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Tech Innova. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
