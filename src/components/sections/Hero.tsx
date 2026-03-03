"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

function useCountUp(target: number, duration: number = 1800, started: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let current = 0;
        const steps = Math.ceil(duration / 16);
        const increment = target / steps;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);

    return count;
}

const Hero = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimationStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const years = useCountUp(10, 1600, animationStarted);
    const success = useCountUp(100, 2200, animationStarted);

    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.neuralPortal}>
                <div className={styles.portalCore}></div>
                <div className={styles.portalRing}></div>
            </div>
            <div className={styles.dataWave}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`${styles.waveDot} ${styles[`d${i + 1}` as keyof typeof styles]}`}></div>
                ))}
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
                        <Link href="/#servicios" className={styles.primaryBtn}>
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
                    <div className={styles.glassCard} ref={cardRef}>
                        <div className={styles.floatingBadge}>SENIOR CONSULTING</div>
                        <div className={styles.cardContent}>
                            <h3>Tech Innova</h3>
                            <p>Especialistas en automatización avanzada y desarrollo de alto rendimiento.</p>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>{years}+</span>
                                    <span className={styles.statLabel}>Años Exp</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>{success}%</span>
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
