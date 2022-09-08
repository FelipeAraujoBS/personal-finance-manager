import styles from "../Services.module.css"
import { useState } from 'react'

const AddServicesForm = props => {
    const [serviceName, setServiceName] = useState('')
    const [serviceCost, setServiceCost] = useState('')
    const [serviceDescription, setServiceDescription] = useState('')

    const handleName = e => {
        setServiceName(e.target.value)
    }

    const handleCost = e => {
        setServiceCost(e.target.value)
    }

    const handleDescription = e => {
        setServiceDescription(e.target.value)
    }

    const handleService = e => {
        e.preventDefault()

       const serviceData = {
        name: serviceName,
        cost: serviceCost,
        description: serviceDescription
       };

       props.handleSubmit(serviceData)
       setServiceName('')
       setServiceCost('')
       setServiceDescription('')
    }

    

    return (
        <form onSubmit={handleService} className={styles.form_control}>
            <div className={styles.form_opt}>
                <label>Nome do serviço:</label> <br />
                <input onChange={handleName} value={serviceName} placeholder="Insira o nome do serviço" type="text"/> <br />
            </div>
            <div className={styles.form_opt}>
                <label>Custo do serviço:</label> <br />
                <input onChange={handleCost} value={serviceCost} placeholder="Insira o valor total" type="number"/>
            </div>
            <div className={styles.form_opt}>
                <label>Descrição do serviço:</label> <br />
                <input onChange={handleDescription} value={serviceDescription} placeholder="Descreva o serviço" type="text"/>
            </div>
            <button type="submit" className={styles.buttonForm}>Adicionar Serviço</button>
        </form>
    );
}

export default AddServicesForm;