"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroContent = document.getElementById('heroContent');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
                heroContent.style.opacity = Math.max(0, 1 - scrolled / 1200).toString();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.heroContent} id="heroContent">
                <div className={styles.heroText}>
                    <span className={styles.heroBadge}>🚀 Liderando la Innovación</span>
                    <h1>Soluciones para tu <span className={styles.gradientText}>Transformación Digital</span></h1>
                    <p>Consultoría Senior y Desarrollo Full-Stack. Transformamos procesos complejos en soluciones simples, escalables y orientadas a resultados.</p>
                    <div className={styles.heroButtons}>
                        <Link href="/#servicios" className={styles.btnPrimary}>
                            Nuestras Soluciones
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                        <Link href="/tienda" className={styles.btnSecondary}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            Explorar Tienda
                        </Link>
                    </div>
                </div>
                
                <div className={styles.heroVisual}>
                    <div className={styles.glassCard}>
                        <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Nuestras Áreas Core</h3>
                        <div className={styles.techGrid}>
                            
                            <div className={styles.techItem}>
                                <div className={`${styles.techIcon} ${styles.iconWeb}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Soluciones Web</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Plataformas Escalonables</div>
                                </div>
                            </div>

                            <div className={styles.techItem}>
                                <div className={`${styles.techIcon} ${styles.iconBot}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C16.42 2 20 5.58 20 10V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V10C4 5.58 7.58 2 12 2Z"></path><circle cx="12" cy="10" r="2"></circle></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Automatización</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>RPA (Robotics)</div>
                                </div>
                            </div>

                            <div className={styles.techItem}>
                                <div className={`${styles.techIcon} ${styles.iconData}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Datos</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Power Query & Excel</div>
                                </div>
                            </div>

                            <div className={styles.techItem}>
                                <div className={`${styles.techIcon} ${styles.iconDesk}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Escritorio</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Desarrollo Desktop</div>
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
