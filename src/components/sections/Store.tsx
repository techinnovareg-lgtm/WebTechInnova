"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';
import styles from './Store.module.css';

function useCountUp(target: number, duration: number, started: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let current = 0;
        const steps = Math.ceil(duration / 16);
        const increment = target / steps;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);
    return count;
}

import { 
    easyRentPlans, 
    specializedApps, 
    resourceServices, 
    paymentLinks, 
    controlHorasPlans,
    PlanPricing 
} from '@/data/storeData';

const Store = () => {
    const [currency, setCurrency] = useState<'PEN' | 'USD' | 'EUR'>('PEN');
    const [showSupportModal, setShowSupportModal] = useState(false);
    const { setRef, isVisible } = useReveal(0.05);

    // Count-up for store hero stats
    const storeHeroRef = useRef<HTMLDivElement>(null);
    const [storeStatsStarted, setStoreStatsStarted] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStoreStatsStarted(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (storeHeroRef.current) observer.observe(storeHeroRef.current);
        return () => observer.disconnect();
    }, []);
    const storeYears = useCountUp(10, 1600, storeStatsStarted);
    const storeSuccess = useCountUp(100, 2200, storeStatsStarted);

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
                <div className={styles.techGlow}></div>
                <div className={styles.techGlow2}></div>
            </div>

            {/* Store Hero Banner */}
            <div className={styles.storeHero} ref={storeHeroRef}>
                <div className={styles.storeHeroGlow}></div>
                <div className={`container ${styles.storeHeroContent}`}>
                    <div className={styles.storeHeroBadge}>Productos &amp; Soluciones Digitales</div>
                    <h1 className={styles.storeHeroTitle}>Nuestra Tienda</h1>
                    <p className={styles.storeHeroSubtitle}>Soluciones digitales listas para potenciar tu productividad y control.</p>
                    <div className={styles.storeHeroStats}>
                        <div className={styles.storeHeroStat}><strong>{storeYears}+</strong><span>Años de Exp.</span></div>
                        <div className={styles.storeHeroStat}><strong>2</strong><span>Productos Core</span></div>
                        <div className={styles.storeHeroStat}><strong>{storeSuccess}%</strong><span>Éxito</span></div>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.container}`}>

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
                            <Image src="/images/easyrent/logo.png" alt="EasyRent Logo" width={200} height={60} className={styles.productLogo} />
                            <div className={styles.showcaseTitle}>
                                <h3>Gestión Inmobiliaria Inteligente</h3>
                                <div className={styles.greenDivider}></div>
                            </div>
                        </div>

                        <div className={styles.showcaseContent}>
                            <div className={styles.showcaseImageWrapper}>
                                <Image
                                    src="/images/easyrent/banner.png"
                                    alt="EasyRent Platform Showcase"
                                    width={800}
                                    height={500}
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
                                                plan.numericPrice || 0,
                                                plan.price,
                                                plan.name === "Plan Híbrido",
                                                plan.oneTimeNumeric,
                                                plan.monthlyNumeric
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
                            <h3 style={{ color: 'var(--contrast)' }}>Labora: Gestión de Recuperación</h3>
                            <div className={styles.divider} style={{ height: '4px', width: '80px', background: 'var(--primary)', borderRadius: '100px', margin: '0.5rem 0' }}></div>
                        </div>
                    </div>

                    <div className={styles.showcaseContent}>
                        <div className={styles.showcaseImageWrapper}>
                            <Image
                                src="/images/stock/time-management.jpg"
                                alt="Control de horas y productividad"
                                width={800}
                                height={500}
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
                    {specializedApps.filter(app => app.title !== "Labora").map((prod, index) => (
                        <div key={index} className={styles.otherCard}>
                            <div className={styles.otherImageWrapper}>
                                <Image src={prod.image} alt={prod.title} width={400} height={250} className={styles.otherCardImage} />
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
                                <Image src={prod.image} alt={prod.title} width={400} height={250} className={styles.otherCardImage} />
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
