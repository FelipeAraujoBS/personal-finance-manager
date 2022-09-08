import styles from "../Services.module.css"
import {BsFillTrashFill} from 'react-icons/bs'

const ServicesCard = props => {

    const onRemove = () => {
        props.remove(props.id, props.cost)
    }
    
    return(
        <div className={styles.sCard}>

           <div  className={styles.sName}>
                <h1>{props.name}</h1>
           </div>

           <div className={styles.sInfo}>
                <p>Cost: <span>{props.cost}</span></p>
                <p>Description: <span>{props.description}</span></p>
           </div>

            <div className={styles.sButtonContainer}>
                <button onClick={onRemove} className={styles.sButton}>
                    <BsFillTrashFill className={styles.icon}/>
                    <span>Remover Serviço</span>
                </button>
            </div>
        </div>
    );
}

export default ServicesCard;