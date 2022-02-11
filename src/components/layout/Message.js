
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Message.module.css'

export default function Message({ type, msg }) {
    const [visible, setVisible] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}