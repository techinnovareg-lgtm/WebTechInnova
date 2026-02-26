import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.particleField}>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p1}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p2}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p3}`}></div>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p4}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p5}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p6}`}></div>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p7}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p8}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p9}`}></div>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p10}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p11}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p12}`}></div>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p13}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p14}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p15}`}></div>
                <div className={`${styles.particle} ${styles.hexagon} ${styles.p16}`}></div>
                <div className={`${styles.particle} ${styles.circle} ${styles.p17}`}></div>
                <div className={`${styles.particle} ${styles.plus} ${styles.p18}`}></div>
            </div>
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
                        <Link href="/tienda" className={styles.secondaryBtn}>
                            Explorar Tienda
                        </Link>

                    </div>
                </div>

                <div className={styles.visualContainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/stock/hero.jpg"
                            alt="Equipo profesional colaborando"
                            className={styles.heroImage}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
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
