"use client";

import { useEffect, useRef } from 'react';
import styles from './Process.module.css';

const steps = [
    {
        number: "01",
        title: "Descubrimiento",
        description: "Analizamos tus desafíos y definimos los objetivos estratégicos para tu transformación."
    },
    {
        number: "02",
        title: "Diseño y Prototipado",
        description: "Creamos la arquitectura técnica y visual que resolverá tus necesidades específicas."
    },
    {
        number: "03",
        title: "Desarrollo Ágil",
        description: "Construimos tu solución con las mejores prácticas y feedback constante."
    },
    {
        number: "04",
        title: "Soporte y Evolución",
        description: "Garantizamos la continuidad y mejora continua de tu nueva infraestructura tecnológica."
    }
];

const animateCounter = (element: Element) => {
    const target = parseFloat(element.getAttribute('data-target') || '0');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = current.toFixed(0);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toString();
        }
    };
    updateCounter();
};

const Process = () => {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll(`.${styles.statNumber}`);
                    statNumbers.forEach(stat => {
                        if (stat.textContent === '0') {
                            animateCounter(stat);
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.process} id="proceso">
            <div className="container">
                {/* Stats Banner */}
                <div className={styles.stats} ref={statsRef}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber} data-target="10">0</div>
                            <div className={styles.statLabel}>Años de Experiencia</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber} data-target="99">0</div>
                            <div className={styles.statLabel}>% Satisfacción</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber} data-target="50">0</div>
                            <div className={styles.statLabel}>Proyectos Exitosos</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber} data-target="24">0</div>
                            <div className={styles.statLabel}>/7 Soporte Técnico</div>
                        </div>
                    </div>
                </div>

                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestro Proceso</h2>
                    <p className={styles.subtitle}>Un camino claro y estructurado para asegurar el éxito de cada implementación.</p>
                </div>

                <div className={styles.processGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.processCard}>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <div className={styles.processContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
