import { useRouter } from 'next/router'
import ProjectForm from '../../components/project/ProjectForm'
import styles from '../../styles/NewProject.module.css'

export default function NewProject() {

    const router = useRouter()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                router.push({
                    pathname: '/projects',
                    query: { message: 'Projeto criado com sucesso!' }
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <di className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </di>
    )
}