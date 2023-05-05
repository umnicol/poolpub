import react from 'react';
import styles from './Header.module.css'

interface HeaderProps {
    image: string;
    title: string;
}

export default function Header ({
    image,
    title
}: HeaderProps) {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.titleContainer}>
                <h1 className={styles.h1}>{title}</h1>
            </div>
        </header>
    )
}