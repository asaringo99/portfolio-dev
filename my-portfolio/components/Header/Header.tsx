import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => (
    <header className={styles.nav}>
        <nav className={styles.items}>
            <Link href="/home">Home</Link>
            <Link href="/comingsoon">About</Link>
            <Link href="/comingsoon">Resume</Link>
        </nav>
    </header>
)

export default Header
