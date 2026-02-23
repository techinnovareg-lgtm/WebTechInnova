"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="Tech Innova Logo"
                            width={160}
                            height={50}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                        <li className={styles.navItem}><Link href="/#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
                        <li className={styles.navItem}><Link href="/tienda" onClick={() => setIsMenuOpen(false)}>Tienda</Link></li>
                        <li className={styles.navItem}><Link href="/#contacto" className={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
                    </ul>
                </nav>

                <button
                    className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.btnActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Header;
