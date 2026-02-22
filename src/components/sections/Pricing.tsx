"use client";

import styles from './Pricing.module.css';

const plans = [
    {
        name: "Plan Desktop",
        price: "S/ 200",
        period: "Pago Único",
        description: "Ideal para gestión local segura.",
        features: ["Propiedad total", "Sin cuotas mensuales", "Red local"],
        cta: "Elegir Desktop",
        recommended: false
    },
    {
        name: "Plan Híbrido",
        price: "S/ 200 + S/ 30",
        period: "mensual",
        description: "Lo mejor de ambos mundos.",
        features: ["Software local", "Respaldo en la nube", "Actualizaciones constantes", "Soporte prioritario"],
        cta: "Elegir Híbrido",
        recommended: true
    },
    {
        name: "Plan Cloud",
        price: "S/ 30",
        period: "mensual",
        description: "Libertad total.",
        features: ["Acceso global", "Sin instalación", "Backups automáticos diarios", "Acceso multidispositivo"],
        cta: "Elegir Cloud",
        recommended: false
    }
];

const Pricing = () => {
    return (
        <section className={styles.pricing} id="tienda">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EasyRent: Gestión de Alquileres</h2>
                    <p className={styles.subtitle}>Encuentra el plan perfecto para potenciar tu negocio.</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${plan.recommended ? styles.recommended : ''}`}
                        >
                            {plan.recommended && <div className={styles.badge}>Recomendado</div>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.priceContainer}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>/ {plan.period}</span>
                            </div>
                            <p className={styles.description}>{plan.description}</p>

                            <ul className={styles.features}>
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>✓ {feature}</li>
                                ))}
                            </ul>

                            <button className={styles.cta}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
