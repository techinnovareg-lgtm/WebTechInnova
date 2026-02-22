import styles from './Services.module.css';

const services = [
    {
        title: "Software a Medida",
        description: "Desarrollamos aplicaciones web y móviles robustas, escalables y centradas en el usuario. Soluciones de alto rendimiento para procesos complejos.",
        icon: "💻"
    },
    {
        title: "Automatización Excel",
        description: "Transformamos tus hojas de cálculo en potentes herramientas de gestión con VBA y Power Query. Eficiencia máxima en la plataforma que ya conoces.",
        icon: "📊"
    },
    {
        title: "Robotics (RPA)",
        description: "Implementamos bots con UiPath para automatizar tareas repetitivas y liberar el potencial de tu equipo. Precisión quirúrgica en cada proceso.",
        icon: "🤖"
    }
];

const Services = () => {
    return (
        <section className={styles.services} id="servicios">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestras Soluciones</h2>
                    <p className={styles.subtitle}>
                        Soluciones tecnológicas integrales diseñadas para automatizar, optimizar y escalar tu empresa en la era digital.
                    </p>
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
