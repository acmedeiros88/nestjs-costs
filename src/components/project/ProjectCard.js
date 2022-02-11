import styles from '../../styles/ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import Link from 'next/link'

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link href={`/projects/${id}`}>
                    <a>
                        <BsPencil />
                        Edital
                    </a>
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}