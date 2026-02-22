"use client";

import styles from './Store.module.css';

const easyRentPlans = [
    {
        name: "Plan Desktop",
        price: "S/ 200",
        period: "Pago Único",
        description: "Ideal para gestión local segura y permanente.",
        features: ["Propiedad total", "Sin cuotas mensuales", "Red local offline"],
        cta: "Adquirir Desktop",
        recommended: false
    },
    {
        name: "Plan Híbrido",
        price: "S/ 200 + S/ 30",
        period: "mensual",
        description: "Flexibilidad total con respaldo en la nube.",
        features: ["Software local", "Respaldo en la nube", "Actualizaciones constantes", "Soporte prioritario"],
        cta: "Adquirir Híbrido",
        recommended: true
    },
    {
        name: "Plan Cloud",
        price: "S/ 30",
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

const Store = () => {
    return (
        <section className={styles.store} id="tienda">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestra Tienda</h2>
                    <p className={styles.subtitle}>Soluciones digitales listas para potenciar tu productividad y control.</p>
                </div>

                <div className={styles.subHeader}>
                    <h3>EasyRent: Gestión Inmobiliaria</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.easyRentGrid}>
                    {easyRentPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.planCard} ${plan.recommended ? styles.recommended : ''}`}
                        >
                            {plan.recommended && <div className={styles.badge}>Recomendado</div>}
                            <h4 className={styles.planName}>{plan.name}</h4>
                            <div className={styles.priceInfo}>
                                <span className={styles.amount}>{plan.price}</span>
                                <span className={styles.period}>/ {plan.period}</span>
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
            </div>
        </section>
    );
};

export default Store;
