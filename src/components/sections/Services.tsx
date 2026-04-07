import Image from 'next/image';
import styles from './Services.module.css';

const services = [
    {
        title: "Software a Medida",
        description: "Desarrollamos aplicaciones web y móviles robustas, escalables y centradas en el usuario. Soluciones de alto rendimiento para procesos complejos.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        )
    },
    {
        title: "Automatización Excel",
        description: "Transformamos tus hojas de cálculo en potentes herramientas de gestión con VBA y Power Query. Eficiencia máxima en la plataforma que ya conoces.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        )
    },
    {
        title: "Robotics (RPA)",
        description: "Implementamos bots con UiPath para automatizar tareas repetitivas y liberar el potencial de tu equipo. Precisión quirúrgica en cada proceso.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8"></path>
                <rect x="5" y="8" width="14" height="10" rx="2"></rect>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <path d="M11 20v2"></path>
                <path d="M13 20v2"></path>
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="servicios">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h2 className={styles.title}>Nuestras Soluciones</h2>
                        <p className={styles.subtitle}>
                            Soluciones tecnológicas integrales diseñadas para automatizar, optimizar y escalar tu empresa en la era digital.
                        </p>
                    </div>
                    <div className={styles.headerImageWrapper}>
                        <Image
                            src="/images/stock/services.jpg"
                            alt="Desarrollo profesional de software"
                            width={600}
                            height={800}
                            className={styles.headerImage}
                        />
                        <div className={styles.imageDecoration}></div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
