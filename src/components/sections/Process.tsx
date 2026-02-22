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
    return (
        <section className={styles.process}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestro Proceso</h2>
                    <p className={styles.subtitle}>Un camino claro y estructurado para asegurar el éxito de cada implementación.</p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.numberContainer}>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepText}>{step.description}</p>
                            {index < steps.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
