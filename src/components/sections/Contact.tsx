"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import { supabase } from '@/lib/supabase';

const Contact = () => {
    const [status, setStatus] = useState<null | 'success' | 'error'>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            full_name: formData.get('name') as string,
            email: formData.get('email') as string,
            service: formData.get('service') as string,
            message: formData.get('message') as string,
        };

        try {
            const { error } = await supabase
                .from('leads')
                .insert([data]);

            if (error) throw error;
            setStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
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
                        <Image
                            src="/images/stock/contact.jpg"
                            alt="Oficina moderna colaborativa"
                            width={600}
                            height={800}
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
                            <input type="text" id="name" name="name" placeholder="Ej. Juan Pérez" required />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id="email" name="email" placeholder="email@ejemplo.com" required />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="service">Servicio de Interés</label>
                            <select id="service" name="service" required>
                                <option value="">Selecciona un servicio</option>
                                <option value="software">Software a Medida</option>
                                <option value="excel">Plantillas Excel</option>
                                <option value="uipath">Automatización RPA</option>
                                <option value="easyrent">EasyRent</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows={4} placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Enviando...' : 'Enviar Solicitud'}
                        </button>

                        {status === 'success' && (
                            <p className={styles.successMsg}>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMsg}>Hubo un error al enviar el mensaje. Inténtalo de nuevo o contáctanos por WhatsApp.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
