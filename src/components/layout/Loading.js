import styles from '../../styles/Loading.module.css'
import loading from '../../../public/img/loading.svg'
import Image from 'next/image'

export default function Loading() {
    return (
        <div className={styles.loader_container}>
            <Image src={loading} height={100} width={100} alt="Loading" />
        </div>
    )
}