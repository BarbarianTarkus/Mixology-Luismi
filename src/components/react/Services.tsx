import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

interface Service {
    icon: string;
    title: string;
    description: string;
}

interface Props {
    services: Service[];
}

export default function Services({ services }: Props) {
    return (
        <div className={styles.servicesGrid}>
            {services.map((s, i) => (
                <ServiceCard
                    key={i}
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                />
            ))}
        </div>
    );
}
