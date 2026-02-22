"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [status, setStatus] = useState<null | 'success' | 'error'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Supabase integration will be handle here in the next step
        setStatus('success');
    };

    return (
        <section className={styles.contact} id="contacto">
            <div className={`container ${styles.container}`}>
                <div className={styles.info}>
                    <h2 className={styles.title}>¿Listo para empezar?</h2>
                    <p className={styles.text}>
                        Déjanos tus datos y nos pondremos en contacto contigo para ofrecerte la mejor solución tecnológica para tu negocio.
                    </p>

                    <div className={styles.contactImageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                            alt="Oficina moderna colaborativa"
                            className={styles.contactImage}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>

                    <div className={styles.directLinks}>
                        <div className={styles.linkItem}>
                            <strong>Correo:</strong>
                            <span>tech.innova.reg@gmail.com</span>
                        </div>
                        <div className={styles.linkItem}>
                            <strong>WhatsApp:</strong>
                            <span>+51 947 515 529</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label htmlFor="name">Nombre Completo</label>
                            <input type="text" id="name" placeholder="Ej. Juan Pérez" required />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" placeholder="email@ejemplo.com" required />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="service">Servicio de Interés</label>
                            <select id="service" required>
                                <option value="">Selecciona un servicio</option>
                                <option value="software">Software a Medida</option>
                                <option value="excel">Plantillas Excel</option>
                                <option value="uipath">Automatización RPA</option>
                                <option value="easyrent">EasyRent</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" rows={4} placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Enviar Solicitud
                        </button>

                        {status === 'success' && (
                            <p className={styles.successMsg}>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
