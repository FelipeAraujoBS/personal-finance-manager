import styles from "./ProjectsCard.module.css"
import { Link } from "react-router-dom"

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

const ProjectsCard = props => {
   
   const remove = (e) => {
      e.preventDefault()
      props.delete(props.id)
   }

    return (
        <div className={styles.card}>
             <div className={styles.projectName}>
                <h2>{props.name}</h2>
             </div>
             <div className={styles.info}>
                <p><strong>Orçamento:</strong> {"R$" + props.budget}</p>
                <p className={styles.category}><span className={`${styles[props.category.toLowerCase()]}`}></span> {props.category}</p>
             </div>
             <div className={styles.buttonContainer}>
                <Link to={`/project/${props.id}`}><button type="button"><p className={styles.icon}><BsPencil/></p><p>Editar</p></button></Link>
                <button type="button" onClick={remove}><p className={styles.icon}><BsFillTrashFill/></p><p>Excluir</p></button>
             </div>
        </div>
    );
}

export default ProjectsCard;