import styles from "../Services.module.css"
import "./AddServicesForm"
import AddServicesForm from "./AddServicesForm";
import { useState } from "react"

const AddServices = props => {
    const [displayForm, setDisplayForm] = useState(false)


    const handleClick = () => {
        if(displayForm === false){
            setDisplayForm(true)
        }
        else{
            setDisplayForm(false)
        }
    }

    const serviceData = data => {
        props.project.services.push(data)

        props.handleSubmit(props.project)
    }




    return(
       <div>
         <div className={styles.addServices}>
            <h1>Adicione um serviço</h1>
           {!displayForm ?  <button onClick={handleClick} type='button' className={styles.button}>Adicionar Serviço</button> :  <button onClick={handleClick} type='button' className={styles.button}>Fechar</button>}
        </div>
        <div className={styles.form}>
            {displayForm && <AddServicesForm handleSubmit={serviceData}/>}
        </div>
       </div>
    );
}
export default AddServices;