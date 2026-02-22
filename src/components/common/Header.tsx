"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
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

                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="#inicio">Inicio</Link></li>
                        <li className={styles.navItem}><Link href="#servicios">Servicios</Link></li>
                        <li className={styles.navItem}><Link href="#tienda">Tienda</Link></li>
                        <li className={styles.navItem}><Link href="#contacto" className={styles.contactBtn}>Contacto</Link></li>
                    </ul>
                </nav>

                <button className={styles.mobileMenuBtn}>
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;
