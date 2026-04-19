"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`} id="navbar">
            <div className={styles.navContainer}>
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
                        <li className={styles.navItem}><Link href="/#contacto" className={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>Empezar</Link></li>
                    </ul>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
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
