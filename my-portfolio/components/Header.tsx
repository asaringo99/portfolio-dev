import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => (
    <header className={styles.nav}>
        <nav className={styles.items}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
        </nav>
    </header>
)

export default Header
