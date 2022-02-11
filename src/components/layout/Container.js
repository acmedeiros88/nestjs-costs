import Head from 'next/head'
import styles from '../../styles/Container.module.css'
import Footer from './Footer'
import NavBar from './Navbar'

export default function Container({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <NavBar />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </>
    )
}