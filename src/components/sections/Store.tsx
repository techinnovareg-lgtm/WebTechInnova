"use client";

import { useState } from 'react';
import styles from './Store.module.css';

const easyRentPlans = [
    {
        name: "Plan Desktop",
        price: "S/ 200",
        numericPrice: 200,
        period: "Pago Único",
        description: "Ideal para gestión local segura y permanente.",
        features: ["Propiedad total", "Sin cuotas mensuales", "Red local offline"],
        cta: "Adquirir Desktop",
        recommended: false
    },
    {
        name: "Plan Híbrido",
        price: "S/ 200 + S/ 30",
        numericPrice: 230,
        period: "mensual",
        description: "Flexibilidad total con respaldo en la nube.",
        features: ["Software local", "Respaldo en la nube", "Actualizaciones constantes", "Soporte prioritario"],
        cta: "Adquirir Híbrido",
        recommended: true
    },
    {
        name: "Plan Cloud",
        price: "S/ 30",
        numericPrice: 30,
        period: "mensual",
        description: "Acceso total desde cualquier lugar del mundo.",
        features: ["Acceso global web", "Sin instalación", "Backups diarios", "Multidispositivo"],
        cta: "Adquirir Cloud",
        recommended: false
    }
];

const otherProducts = [
    {
        title: "Control Anestésico",
        description: "Registro clínico completo: signos vitales, medicación y gráficos dinámicos transanestésicos.",
        price: "Bajo Cotización",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        )
    },
    {
        title: "Gestión de Horas",
        description: "Sistema web para el control, registro y recuperación de horas no laboradas eficientemente.",
        price: "Bajo Cotización",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: "Colección de Plantillas",
        description: "Herramientas de automatización en Excel para finanzas, RRHH y logística corporativa.",
        price: "Desde S/ 45",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
        )
    },
    {
        title: "Consultoría Senior",
        description: "Asesoría personalizada para optimizar tus procesos y arquitectura de software.",
        price: "Bajo Cotización",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    }
];

const paymentLinks = [
    {
        name: "Yape / Plin",
        description: "Pagos instantáneos",
        gradient: "linear-gradient(135deg, #74278c, #9c4bb1)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
        )
    },
    {
        name: "Transferencia",
        description: "BCP, Interbank, BBVA",
        gradient: "linear-gradient(135deg, #003a8c, #0050b3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
        )
    },
    {
        name: "PayPal",
        description: "Tarjetas internacionales",
        gradient: "linear-gradient(135deg, #003087, #009cde)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        )
    }
];

const Store = () => {
    const [currency, setCurrency] = useState<'PEN' | 'USD' | 'EUR'>('PEN');

    const formatPrice = (numericPrice: number, basePrice: string) => {
        if (currency === 'PEN') return basePrice;
        if (currency === 'USD') return `$ ${Math.round(numericPrice / 3.8)}`;
        return `€ ${Math.round(numericPrice / 4.1)}`;
    };

    return (
        <section className={styles.store} id="tienda">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestra Tienda</h2>
                    <p className={styles.subtitle}>Soluciones digitales listas para potenciar tu productividad y control.</p>
                </div>

                <div className={styles.internationalBanner}>
                    <div className={styles.bannerIcon}>🌍</div>
                    <div className={styles.bannerContent}>
                        <h4>Expansión Internacional</h4>
                        <p>Brindamos asesoría senior y soluciones digitales en <strong>Perú, España</strong> y otros países. Precios disponibles en moneda local para tu comodidad.</p>
                    </div>
                </div>

                <div className={styles.subHeader}>
                    <h3>EasyRent: Gestión Inmobiliaria</h3>
                    <div className={styles.divider}></div>
                    <div className={styles.currencySwitcher}>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'PEN' ? styles.activeCurrency : ''}`}
                            onClick={() => setCurrency('PEN')}
                        >
                            Soles (S/)
                        </button>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'USD' ? styles.activeCurrency : ''}`}
                            onClick={() => setCurrency('USD')}
                        >
                            Dólares ($)
                        </button>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'EUR' ? styles.activeCurrency : ''}`}
                            onClick={() => setCurrency('EUR')}
                        >
                            Euros (€)
                        </button>
                    </div>
                </div>

                <p className={styles.productDescription}>
                    EasyRent es una solución integral diseñada para la administración profesional de propiedades,
                    disponible en modalidades <strong>escritorio, web o híbrida</strong>. Optimiza la gestión de
                    alquileres, contratos, inquilinos, ingresos y egresos con reportes detallados y contactos,
                    todo bajo una interfaz moderna, ágil y fácil de usar.
                </p>

                <div className={styles.easyRentGrid}>
                    {easyRentPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.planCard} ${plan.recommended ? styles.recommended : ''}`}
                        >
                            {plan.recommended && <div className={styles.badge}>Recomendado</div>}
                            <h4 className={styles.planName}>{plan.name}</h4>
                            <div className={styles.priceInfo}>
                                <div className={styles.mainPrice}>
                                    <span className={styles.amount}>{formatPrice(plan.numericPrice, plan.price)}</span>
                                    <span className={styles.period}>/ {plan.period}</span>
                                </div>
                            </div>
                            <p className={styles.descriptionText}>{plan.description}</p>
                            <ul className={styles.featureList}>
                                {plan.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                            <button className={styles.buyBtn}>{plan.cta}</button>
                        </div>
                    ))}
                </div>

                <div className={styles.subHeader} style={{ marginTop: '6rem' }}>
                    <h3>Apps y Soluciones Especializadas</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.othersGrid}>
                    {otherProducts.map((prod, index) => (
                        <div key={index} className={styles.otherCard}>
                            <div className={styles.otherIcon}>{prod.icon}</div>
                            <div className={styles.otherInfo}>
                                <h4>{prod.title}</h4>
                                <p>{prod.description}</p>
                                <span className={styles.otherPrice}>{prod.price}</span>
                            </div>
                            <button className={styles.viewBtn}>Ver Detalles</button>
                        </div>
                    ))}
                </div>

                <div className={styles.paymentMethods}>
                    <h4>Medios de Pago Aceptados</h4>
                    <div className={styles.paymentGrid}>
                        {paymentLinks.map((p, i) => (
                            <div key={i} className={styles.paymentCard} style={{ '--card-gradient': p.gradient } as any}>
                                <div className={styles.paymentIcon}>{p.icon}</div>
                                <div className={styles.paymentInfo}>
                                    <h5>{p.name}</h5>
                                    <p>{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Store;
