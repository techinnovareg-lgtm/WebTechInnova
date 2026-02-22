import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="inicio">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Impulsamos tu <span className={styles.highlight}>Transformación Digital</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Consultoría Senior y Desarrollo Full-Stack para llevar tu negocio al siguiente nivel con tecnología de vanguardia.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#servicios" className={styles.primaryBtn}>
                            Ver Servicios
                        </Link>
                        <Link href="#tienda" className={styles.secondaryBtn}>
                            Explorar Tienda
                        </Link>
                    </div>
                </div>
                <div className={styles.imagePlaceholder}>
                    {/* Background decoration or visual element */}
                    <div className={styles.blob}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
