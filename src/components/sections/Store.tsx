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
        oneTimeNumeric: 200,
        monthlyNumeric: 30,
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
        image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
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

    const formatPrice = (numericPrice: number, basePrice: string, isHybrid?: boolean, oneTime?: number, monthly?: number) => {
        if (currency === 'PEN') return basePrice;

        const rate = currency === 'USD' ? 3.8 : 4.1;
        const symbol = currency === 'USD' ? '$' : '€';

        if (isHybrid && oneTime !== undefined && monthly !== undefined) {
            return `${symbol} ${Math.round(oneTime / rate)} + ${symbol} ${Math.round(monthly / rate)}`;
        }

        return `${symbol} ${Math.round(numericPrice / rate)}`;
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

                <div className={styles.productHero}>
                    <img
                        src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Gestión inmobiliaria moderna"
                        className={styles.productHeroImage}
                    />
                    <div className={styles.productHeroOverlay}>
                        <p className={styles.productDescription}>
                            EasyRent es una solución integral diseñada para la administración profesional de propiedades,
                            disponible en modalidades <strong>escritorio, web o híbrida</strong>. Optimiza la gestión de
                            alquileres, contratos, inquilinos, ingresos y egresos con reportes detallados y contactos,
                            todo bajo una interfaz moderna, ágil y fácil de usar.
                        </p>
                    </div>
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
                                <div className={styles.mainPrice}>
                                    <span className={styles.amount}>
                                        {formatPrice(
                                            (plan as any).numericPrice || 0,
                                            plan.price,
                                            plan.name === "Plan Híbrido",
                                            (plan as any).oneTimeNumeric,
                                            (plan as any).monthlyNumeric
                                        )}
                                    </span>
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

                <div className={styles.clientPortal}>
                    <div className={styles.portalContent}>
                        <div className={styles.portalHeader}>
                            <span className={styles.portalBadge}>Área de Clientes</span>
                            <h3>Portal de Usuario EasyRent</h3>
                            <p>¿Ya eres cliente? Accede a tu plataforma o solicita asistencia técnica especializada.</p>
                        </div>
                        <div className={styles.portalActions}>
                            <div className={styles.portalCard}>
                                <div className={styles.portalIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 22 3 22 10"></polyline>
                                        <line x1="14" y1="10" x2="22" y2="2"></line>
                                    </svg>
                                </div>
                                <h4>Acceso Web App</h4>
                                <p>Gestiona tus propiedades desde cualquier dispositivo con nuestra versión en la nube.</p>
                                <a href="#" className={styles.portalBtn}>Iniciar Sesión</a>
                            </div>
                            <div className={styles.portalCard}>
                                <div className={styles.portalIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <h4>Centro de Soporte</h4>
                                <p>Asistencia técnica señor para instalaciones, backups o actualizaciones personalizadas.</p>
                                <a href="#contacto" className={styles.portalBtnSecondary}>Contactar Soporte</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.subHeader} style={{ marginTop: '6rem' }}>
                    <h3>Apps y Soluciones Especializadas</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.othersGrid}>
                    {otherProducts.map((prod, index) => (
                        <div key={index} className={styles.otherCard}>
                            <div className={styles.otherImageWrapper}>
                                <img src={prod.image as string} alt={prod.title} className={styles.otherCardImage} />
                            </div>
                            <div className={styles.otherInfo}>
                                <div className={styles.otherIconTitle}>
                                    <div className={styles.miniIcon}>{prod.icon}</div>
                                    <h4>{prod.title}</h4>
                                </div>
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
