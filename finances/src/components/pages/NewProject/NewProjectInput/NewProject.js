import { useNavigate } from "react-router-dom"
import styles from "./NewProject.module.css"
import ProjectForm from "../NewProjectForm/ProjectForm";


const NewProject = props => {
    
    const navigate = useNavigate()
    const message = "Projeto criado com sucesso!!"

    function formHandler(formData){

        formData.cost = 0
        formData.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projects', {state:{message: message}})
            })
        .catch((err) => console.log(err))
    }


    return(
        <div className={styles.newProject}>
           <div className={styles.introForm} >
            <h1 className={styles.h1}>Criar Projeto</h1>
            <p className={styles.p}>Crie seu projeto para depois adicionar os serviços</p>
           </div>
            <ProjectForm handleSubmit={formHandler} buttonContent={"Criar Projeto"}/>
        </div>
    );
}

export default NewProject;