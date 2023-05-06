import react from 'react';
import Button from '../Button/Button';
import styles from './HeaderSection.module.css'

interface HeaderSectionProps {
    image: string;
    title: string;
    subtitle?: string;
    subtitle2?: string;
}

export default function HeaderSection ({
    image,
    title,
    subtitle,
    subtitle2
}: HeaderSectionProps) {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.titleContainer}>
                <h1 className={styles.h1}>{title}</h1>
                <h4 className={styles.h4}>{subtitle}</h4>
                <h4 className={styles.h4}>{subtitle2}</h4>
            </div>

            <div className={styles.button_header}>
               <Button label={"LEARN MORE"}/> 
              </div>
        </header>
    )
}