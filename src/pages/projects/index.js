import { useRouter } from 'next/router'
import Message from '../../components/layout/Message'
import LinkButton from '../../components/layout/LinkButton'
import styles from '../../styles/Projects.module.css'
import ProjectCard from '../../components/project/ProjectCard'
import Loading from '../../components/layout/Loading'
import { useState, useEffect } from 'react'


export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/projects')
    const allProjects = await response.json()
    
    return {
        props: { allProjects }
    }
}

export default function Projects({ allProjects }) {
    const router = useRouter()
    const [projects, setProjects] = useState(allProjects)
    const [removeLoading, setRemoveLoading] = useState(true)
    const [projectMessage, setProjectMessage] = useState('')

    let msn = ''
    useEffect(() => {
        msn = router.query.message
        if (msn) {
            setProjectMessage(msn)
            // Redirect, para mudar a URL no navegador(remover parametro message)
            setTimeout(() => {
                router.push('/projects')
            }, 3000)
        }
    }, [])

    function removeProject(id) {
        setProjectMessage('')
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/projects/NewProject" text="Criar Projeto" />
            </div>
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <div className={styles.container}>
                {projects.length > 0 &&
                    projects.map((project) => 
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    )}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </div>
        </div>
    )
}