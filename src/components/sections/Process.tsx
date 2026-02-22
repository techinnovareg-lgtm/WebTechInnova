"use client";

import { useEffect, useRef, useState } from 'react';
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

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const restartAnimation = () => {
        setAnimationKey(prev => prev + 1);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.process} ref={sectionRef}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestro Proceso</h2>
                    <p className={styles.subtitle}>Un camino claro y estructurado para asegurar el éxito de cada implementación.</p>
                </div>

                <div className={styles.bannerWrapper}>
                    <img
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Reunión técnica colaborativa"
                        className={styles.bannerImage}
                    />
                    <div className={styles.bannerOverlay}></div>
                </div>

                <div
                    className={`${styles.grid} ${isVisible ? styles.animate : ''}`}
                    onMouseEnter={restartAnimation}
                >
                    <div className={styles.progressLine}>
                        <div key={animationKey} className={styles.progressBar}></div>
                    </div>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.numberContainer}>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepText}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
