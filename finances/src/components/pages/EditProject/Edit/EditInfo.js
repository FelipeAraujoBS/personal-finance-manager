import styles from "./Edit.module.css"

const EditInfo = props => {

    
    return (
        <div>
            <div className={styles.editInfo}>
                <h2>Categoria: <span>{props.project.category}</span></h2>
                <h2>Total de Orçamento: <span> R${props.project.budget} </span></h2>
                <h2>Total utilizado: <span>R${props.project.cost}</span></h2>
            </div>
        </div>
    );
}

export default EditInfo;

