import Image from 'next/image'
import savings from '../../public/img/savings.svg'
import styles from '../styles/Home.module.css'
import LinkButton from '../components/layout/LinkButton'

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmos!</p>
      <LinkButton to="/projects/NewProject" text="Criar Projeto" />
      <Image src={savings} height={300} width={300} alt="Cost" />
    </section>
  )
}