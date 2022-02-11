import Link from "next/link";
import styles from '../../styles/LinkButton.module.css'

export default function LinkButton({ to, text }) {
    return (
        <Link href={to}>
            <a className={styles.btn}>{text}</a>
        </Link>
    )
}