import React, { useState, useRef } from 'react';
import { useTina, tinaField } from "tinacms/dist/react";
import styles from './Contact.module.css';

interface Props {
  tinaProps: {
    data: any;
    query: string;
    variables: object;
  };
}

export default function Contact({ tinaProps }: Props) {
  const { data } = useTina({
    query: tinaProps.query,
    variables: tinaProps.variables,
    data: tinaProps.data,
  });

  const contact = data.contact;

  // Form Logic
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formState;

    const subject = encodeURIComponent(`Contacto web - ${name}`);
    const bodyLines = [
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        "",
        "Mensaje:",
        message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    try {
        window.location.href = mailto;
        setStatus(`Se abrió tu cliente de correo. Si no, usa la dirección ${contact.email} para enviarnos el mensaje.`);
    } catch (err) {
        setStatus(`No se ha podido abrir el cliente de correo. Envíanos un email a ${contact.email}.`);
    }
  };

  const handleClear = () => {
    setFormState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    setStatus('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.pageContainer}>
        <section className={styles.introSection}>
            <h1 className={styles.introTitle} data-tina-field={tinaField(contact, "introTitle")}>
              {contact.introTitle || "Contacto"}
            </h1>
            <p className={styles.introDesc} data-tina-field={tinaField(contact, "introDesc")}>
                {contact.introDesc || "Cuéntanos sobre tu evento."}
            </p>
        </section>

        <div className={styles.contactGrid}>
            {/* Contact Info Card */}
            <aside className={styles.card}>
                <h2 className={styles.cardTitle}>Información de contacto</h2>

                <p className={styles.cardDesc}>
                    Llámanos, envíanos un WhatsApp o un correo y te responderemos en menos de 24h.
                </p>

                <ul className={styles.contactList}>
                    <li className={styles.contactItem} data-tina-field={tinaField(contact, "phone")}>
                        <span className={styles.contactIcon}>call</span>
                        <a className={styles.contactLinkPrimary} href={contact.phoneUrl}>{contact.phone}</a>
                    </li>

                    <li className={styles.contactItem} data-tina-field={tinaField(contact, "whatsappUrl")}>
                        <span className={styles.contactIcon}>chat</span>
                        <a
                            className={styles.contactLinkPrimary}
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >Contactar por WhatsApp</a>
                    </li>

                    <li className={styles.contactItem} data-tina-field={tinaField(contact, "email")}>
                        <span className={styles.contactIcon}>mail</span>
                        <a className={styles.contactLinkSecondary} href={`mailto:${contact.email}`}
                            >{contact.email}</a>
                    </li>

                    <li className={styles.contactItemAlignStart} data-tina-field={tinaField(contact, "address")}>
                        <span className={styles.contactIcon}>place</span>
                        <address className={styles.contactAddress}>
                            {contact.address && contact.address.split('\n').map((line: string, i: number) => (
                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                            ))}
                        </address>
                    </li>
                </ul>

                <div className={styles.scheduleSection} data-tina-field={tinaField(contact, "schedule")}>
                    <h3 className={styles.scheduleTitle}>Horario</h3>
                    <p className={styles.scheduleDesc}>
                        {contact.schedule}
                    </p>
                </div>
            </aside>

            {/* Contact Form Card */}
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>Envíanos un mensaje</h2>
                <p className={styles.cardDesc}>
                    Cuéntanos fecha, número de invitados y tipo de servicio para obtener un presupuesto rápido.
                </p>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formRow}>
                        <label className={styles.formField}>
                            <span className={styles.fieldLabel}>Nombre</span>
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Tu nombre"
                                className={styles.formInput}
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </label>

                        <label className={styles.formField}>
                            <span className={styles.fieldLabel}>Teléfono</span>
                            <input
                                required
                                name="phone"
                                type="tel"
                                placeholder="+34 600 000 000"
                                className={styles.formInput}
                                value={formState.phone}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <label className={styles.formField}>
                        <span className={styles.fieldLabel}>Correo electrónico</span>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="tu@correo.com"
                            className={styles.formInput}
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className={styles.formField}>
                        <span className={styles.fieldLabel}>Detalles del evento</span>
                        <textarea
                            required
                            name="message"
                            rows={6}
                            placeholder="Fecha, número de invitados, ubicación, servicio solicitado..."
                            className={styles.formTextarea}
                            value={formState.message}
                            onChange={handleChange}
                        ></textarea>
                    </label>

                    <div className={styles.formActions}>
                        <button type="submit" className={styles.btnSubmit}>
                            <span className={styles.btnIcon}>send</span>
                            Enviar mensaje
                        </button>

                        <button type="button" onClick={handleClear} className={styles.btnClear}>
                            Limpiar
                        </button>
                    </div>

                    {status && <p className={styles.formStatus} aria-live="polite">{status}</p>}
                </form>
            </section>
        </div>
    </div>
  );
}
