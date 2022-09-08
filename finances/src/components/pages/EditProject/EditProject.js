import { v4 as uuidv4 } from "uuid"
import styles from "./EditProject.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditInfo from "./Edit/EditInfo"
import EditForm from "./Edit/EditForm"
import Message from "../../layout/Message/Message"
import AddServices from "./Services/AddServices/AddService"
import Services from "./Services/Services/Services"

const EditProject = () => {
    const [displayForm, setDisplayForm] = useState(false)
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch(err => console.log(err))
    }, [id])


    const handleDisplay = () => {
        if (displayForm === false) {
            setDisplayForm(true)
        }
        else {
            setDisplayForm(false)
        }
    }

    const displayEdit = (formData) => {
        if(formData.budget < project.cost){
            setMessage("O orçamento não pode ser menor que os gastos do projeto!")
            setType('error')   
            return false  
        }
        else{
            fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(resp => resp.json())
            .then(data => {
                setProject(data)
                setDisplayForm(false)
                setMessage("Projeto atualizado!")
                setType('sucess')
            })
            .catch(err => console.log(err))
        }
    } 


    const createService = project => {
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost 

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage("Custo maior que o Orçamento, reveja o valor do serviço!")
            setType("error")
            project.services.pop()
            return false
        }else{
            setMessage("Serviço adicionado com sucesso")
            setType("sucess")
        }

        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(resp => resp.json())
          .then((data) => {
            console.log(data)
            
          })
          .catch(err => console.log(err))
    }

    const onRemove = (id, cost) => {
        
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
          <div className={styles.info}>
            <div className={styles.editTitle}>
                    <div className={styles.name}>
                        <h1>Projeto: {project.name}</h1>
                    </div>
                    {message && <Message type={type} msg={message}/>}
                    <div>
                        {!displayForm ? <button className={styles.button} type="button" onClick={handleDisplay}>Editar projeto</button> : <button className={styles.button} type="button" onClick={handleDisplay}>Fechar</button>}
                    </div>
            </div>
            <div>
                {!displayForm ? <EditInfo project={project} /> : <EditForm handleData={displayEdit} project={project} />}
            </div>              
        </div>
        
          <div>
            <div className={styles.addServices}>
                <AddServices handleSubmit={createService} project={project}/>
            </div>
            <div className={styles.services}>
                <Services services={services} handleRemove={onRemove}/>
            </div>
          </div>
        </div>
    );
}

export default EditProject;