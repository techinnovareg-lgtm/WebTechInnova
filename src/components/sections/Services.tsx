import styles from './Services.module.css';

const services = [
    {
        title: "Software a Medida",
        description: "Soluciones robustas para Desktop, Web y Android adaptadas a tu flujo de trabajo.",
        icon: "💻"
    },
    {
        title: "Plantillas MS Excel Avanzadas",
        description: "Potencia tu gestión con herramientas inteligentes en la plataforma que ya conoces.",
        icon: "📊"
    },
    {
        title: "Automatización con UiPath",
        description: "Elimina tareas repetitivas y errores humanos mediante robots de software (RPA) de alta precisión.",
        icon: "🤖"
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="servicios">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestros Servicios</h2>
                    <p className={styles.subtitle}>Soluciones integrales de transformación digital para empresas modernas.</p>
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
