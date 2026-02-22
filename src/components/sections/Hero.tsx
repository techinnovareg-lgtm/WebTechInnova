import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="inicio">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Soluciones para tu <span className={styles.highlight}>Transformación Digital</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Consultoría Senior y Desarrollo Full-Stack. Transformamos procesos complejos en soluciones simples, escalables y orientadas a resultados.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#servicios" className={styles.primaryBtn}>
                            Nuestras Soluciones
                        </Link>
                        <Link href="#tienda" className={styles.secondaryBtn}>
                            Ver EasyRent
                        </Link>
                    </div>
                </div>

                <div className={styles.visualContainer}>
                    <div className={styles.glassCard}>
                        <div className={styles.floatingBadge}>SENIOR CONSULTING</div>
                        <div className={styles.cardContent}>
                            <h3>Tech Innova</h3>
                            <p>Especialistas en automatización avanzada y desarrollo de alto rendimiento.</p>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>10+</span>
                                    <span className={styles.statLabel}>Años Exp</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>100%</span>
                                    <span className={styles.statLabel}>Éxito</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
