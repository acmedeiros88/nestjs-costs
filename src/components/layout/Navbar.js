import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import logo from '../../../public/img/costs_logo.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a><Image src={logo} alt="Cost" /></a>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href='/projects'>
                        <a>Projetos</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href='/Contact'>
                        <a>Contato</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href='/Company'>
                        <a>Empresa</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}