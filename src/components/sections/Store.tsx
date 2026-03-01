"use client";

import { useState } from 'react';
import useReveal from '@/hooks/useReveal';
import styles from './Store.module.css';

const easyRentPlans = [
    {
        name: "Plan Desktop",
        price: "S/ 300",
        numericPrice: 300,
        period: "Pago Único",
        description: "Ideal para gestión local segura y permanente.",
        features: ["Propiedad total", "Sin cuotas mensuales", "Red local offline", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Desktop",
        recommended: false
    },
    {
        name: "Plan Híbrido",
        price: "S/ 300 + S/ 350",
        oneTimeNumeric: 300,
        monthlyNumeric: 350,
        period: "anual",
        description: "Flexibilidad total con respaldo en la nube.",
        features: ["Software local", "Respaldo en la nube", "Actualizaciones", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Híbrido",
        recommended: true
    },
    {
        name: "Plan Cloud",
        price: "S/ 150",
        numericPrice: 150,
        period: "mensual",
        description: "Acceso total desde cualquier lugar del mundo.",
        features: ["Acceso global web", "Respaldos diarios", "Multidispositivo", "Soporte 24/7 WhatsApp"],
        cta: "Adquirir Cloud",
        recommended: false
    }
];

const specializedApps = [
    {
        title: "Control Anestésico",
        description: "Registro clínico completo: signos vitales, medicación y gráficos dinámicos transanestésicos.",
        price: "Bajo Cotización",
        image: "/images/stock/anesthesia.jpg",
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
        image: "/images/stock/time-management.jpg",
        url: "https://techinnovareg-lgtm.github.io/control-horas-app",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    }
];

const resourceServices = [
    {
        title: "Colección de Plantillas",
        description: "Herramientas de automatización en Excel para finanzas, RRHH y logística corporativa.",
        price: "Desde S/ 45",
        image: "/images/stock/templates.jpg",
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
        image: "/images/stock/consulting.jpg",
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

const controlHorasPlans = [
    {
        name: "Suscripción Mensual",
        price: "Consultar",
        numericPrice: 5,
        period: "mensual",
        description: "Ideal para control inmediato y flexible.",
        features: ["Registro de días/horas", "Calculadora recovery", "Calendario progreso", "Soporte 24/7 WhatsApp"],
        cta: "Suscribirse Mensual",
        recommended: false
    },
    {
        name: "Suscripción Anual",
        price: "Consultar",
        numericPrice: 20,
        period: "anual",
        description: "Ahorra significativamente con el pago anualizado.",
        features: ["Historial de periodos", "Archivo de registros", "Acceso web global", "Soporte 24/7 WhatsApp"],
        cta: "Suscribirse Anual",
        recommended: true
    }
];

const Store = () => {
    const [currency, setCurrency] = useState<'PEN' | 'USD' | 'EUR'>('PEN');
    const [showSupportModal, setShowSupportModal] = useState(false);
    const { setRef, isVisible } = useReveal(0.05);

    const formatPrice = (numericPrice: number, basePrice: string, isHybrid?: boolean, oneTime?: number, monthly?: number) => {
        if (currency === 'PEN' || basePrice === 'Consultar' || basePrice === 'Bajo Cotización') return basePrice;

        const rate = currency === 'USD' ? 3.8 : 4.1;
        const symbol = currency === 'USD' ? '$' : '€';

        if (isHybrid && oneTime !== undefined && monthly !== undefined) {
            return `${symbol} ${Math.round(oneTime / rate)} + ${symbol} ${Math.round(monthly / rate)}`;
        }

        return `${symbol} ${Math.round(numericPrice / rate)}`;
    };

    return (
        <section className={`${styles.store} ${isVisible ? styles.revealed : ''}`} id="tienda" ref={setRef}>
            <div className={styles.techBackground}>
                <div className={styles.techGrid}></div>
                <div className={styles.techGlow}></div>
                <div className={styles.techGlow2}></div>
            </div>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Tecnología de Vanguardia</h2>
                    <p className={styles.subtitle}>Soluciones digitales listas para potenciar tu productividad y control.</p>
                </div>

                <div className={styles.internationalBanner}>
                    <div className={styles.bannerIcon}>🌍</div>
                    <div className={styles.bannerContent}>
                        <h4>Expansión Internacional</h4>
                        <p>Brindamos asesoría senior y soluciones digitales en <strong>Perú, España</strong> y otros países. Precios disponibles en moneda local para tu comodidad.</p>
                    </div>
                </div>

                <div className={styles.easyRentSection}>
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

                    <div className={styles.easyRentShowcase}>
                        <div className={styles.showcaseHeader}>
                            <img src="/images/easyrent/logo.png" alt="EasyRent Logo" className={styles.productLogo} />
                            <div className={styles.showcaseTitle}>
                                <h3>Gestión Inmobiliaria Inteligente</h3>
                                <div className={styles.greenDivider}></div>
                            </div>
                        </div>

                        <div className={styles.showcaseContent}>
                            <div className={styles.showcaseImageWrapper}>
                                <img
                                    src="/images/easyrent/banner.png"
                                    alt="EasyRent Platform Showcase"
                                    className={styles.showcaseImage}
                                />
                                <div className={styles.imageGlow}></div>
                            </div>
                            <div className={styles.showcaseText}>
                                <div className={styles.productBadges}>
                                    <span className={styles.prodBadge}>Multi-Platform</span>
                                    <span className={styles.prodBadge}>SSL Secure</span>
                                    <span className={styles.prodBadge}>Cloud Ready</span>
                                </div>
                                <p className={styles.productDescription}>
                                    Simplifica la administración de tus propiedades con una herramienta diseñada para el mundo real.
                                    Gestiona contratos, inquilinos y pagos con <strong>precisión quirúrgica</strong> y desde cualquier lugar.
                                </p>
                            </div>
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
                                <a href="https://easy-rent-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.portalBtn}>Iniciar Sesión</a>
                            </div>
                            <div className={styles.portalCard}>
                                <div className={styles.portalIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <h4>Centro de Soporte</h4>
                                <p>Asistencia técnica señor para instalaciones, backups o actualizaciones personalizadas.</p>
                                <button
                                    onClick={() => setShowSupportModal(true)}
                                    className={styles.portalBtnSecondary}
                                >
                                    Contactar Soporte
                                </button>
                            </div>
                        </div>
                    </div>

                    {showSupportModal && (
                        <div className={styles.modalOverlay} onClick={() => setShowSupportModal(false)}>
                            <div className={styles.supportModal} onClick={e => e.stopPropagation()}>
                                <button className={styles.closeModal} onClick={() => setShowSupportModal(false)}>×</button>
                                <h3>Canales de Soporte</h3>
                                <div className={styles.divider}></div>
                                <p>Elige el medio de tu preferencia para recibir asistencia inmediata:</p>
                                <div className={styles.supportOptions}>
                                    <a
                                        href="https://wa.me/51947515529?text=Hola,%20necesito%20soporte%20para%20EasyRent"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.supportChoice}
                                    >
                                        <div className={styles.choiceIcon} style={{ background: '#25D366' }}>
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.555 4.195 1.608 6.037L0 24l6.105-1.602a11.832 11.832 0 005.94 1.6h.005c6.634 0 12.044-5.413 12.048-12.051a11.75 11.75 0 00-3.526-8.528z" />
                                            </svg>
                                        </div>
                                        <div className={styles.choiceText}>
                                            <span>WhatsApp</span>
                                            <p>Asistencia directa y fluida</p>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:soporte@techinnova.tech?subject=Soporte%20EasyRent"
                                        className={styles.supportChoice}
                                    >
                                        <div className={styles.choiceIcon} style={{ background: 'var(--primary)' }}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <div className={styles.choiceText}>
                                            <span>Correo Electrónico</span>
                                            <p>Asunto: Soporte EasyRent</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.timeManagementShowcase}>
                    <div className={styles.showcaseHeader}>
                        <div className={styles.showcaseTitle}>
                            <h3 style={{ color: 'var(--contrast)' }}>Control de Horas: Gestión de Recuperación</h3>
                            <div className={styles.divider} style={{ height: '4px', width: '80px', background: 'var(--primary)', borderRadius: '100px', margin: '0.5rem 0' }}></div>
                        </div>
                    </div>

                    <div className={styles.showcaseContent}>
                        <div className={styles.showcaseImageWrapper}>
                            <img
                                src="/images/stock/time-management.jpg"
                                alt="Control de horas y productividad"
                                className={styles.showcaseImage}
                            />
                            <div className={styles.imageGlow} style={{ background: 'linear-gradient(135deg, rgba(151, 7, 71, 0.15), transparent)' }}></div>
                        </div>
                        <div className={styles.showcaseText}>
                            <p className={styles.productDescription}>
                                Gestiona tus horas no laboradas de forma profesional. Registra días y horas pendientes,
                                organiza tu recuperación mediante una <strong>calculadora inteligente con calendario</strong> y
                                mantén un historial detallado de tus periodos.
                            </p>
                            <div className={styles.productBadges}>
                                <span className={styles.timeBadge}>Registro Web</span>
                                <span className={styles.timeBadge}>Calculadora Recovery</span>
                                <span className={styles.timeBadge}>Seguridad Total</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.easyRentGrid}>
                    {controlHorasPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.planCard} ${plan.recommended ? styles.recommended : ''}`}
                            style={{ margin: plan.recommended ? '0' : '0 1rem', animationDelay: `${index * 0.1}s` }}
                        >
                            {plan.recommended && <div className={styles.badge}>Más Popular</div>}
                            <h4 className={styles.planName}>{plan.name}</h4>
                            <div className={styles.priceInfo}>
                                <div className={styles.mainPrice}>
                                    <span className={styles.amount}>
                                        {formatPrice(
                                            (plan as any).numericPrice || 0,
                                            plan.price
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
                    <div className={styles.securityInfo}>
                        <div className={styles.securityIcon}>🔒</div>
                        <h4>Privacidad y Seguridad</h4>
                        <p>
                            El acceso es con tu correo y tú creas tu propia contraseña.
                            El administrador <strong>no tiene acceso</strong> a tu información personal,
                            solo a tu correo para gestiones técnicas o reseteo de contraseña.
                        </p>
                    </div>
                </div>

                <div className={styles.subHeader} style={{ marginTop: '4rem' }}>
                    <h3>Ecosistema de Apps Especializadas</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.othersGrid}>
                    {specializedApps.map((prod, index) => (
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
                            {prod.url ? (
                                <a href={prod.url} target="_blank" rel="noopener noreferrer" className={`${styles.viewBtn} ${styles.buyBtnLink}`}>
                                    Ver Aplicativo
                                </a>
                            ) : (
                                <button className={styles.viewBtn}>Ver Detalles</button>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.subHeader} style={{ marginTop: '4rem' }}>
                    <h3>Servicios y Recursos Corporativos</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.othersGrid}>
                    {resourceServices.map((prod, index) => (
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
