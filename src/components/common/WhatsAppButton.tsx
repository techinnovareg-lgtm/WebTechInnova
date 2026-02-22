"use client";

import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
    const phoneNumber = "51947515529";
    const message = "Hola Tech Innova, me gustaría obtener más información sobre sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            className={styles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <span className={styles.icon}>WP</span>
        </a>
    );
};

export default WhatsAppButton;
