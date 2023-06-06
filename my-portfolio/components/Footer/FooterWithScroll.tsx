import { useCallback } from 'react';
import styles from './FooterWithScroll.module.css';

const Footer = () => {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <footer className={styles.footerContainer}>
            <button className={styles.scrollButton} onClick={scrollToTop}>
                <span>TOP</span>
            </button>
            <div className={styles.textContainer}>Thank You For Coming To My Page!</div>
            <div className={styles.textContainer}>END</div>
            <p className={styles.copyright}>© 2023 Asaringo Portfolio</p>
        </footer>
    );
};

export default Footer;
