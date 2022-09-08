import ProjectForm from "../../NewProject/NewProjectForm/ProjectForm"
import styles from "./Edit.module.css"


const EditForm = props => {
    
    const submitEdit = formData =>{
       props.handleData(formData)
    }

    return (
        <div className={styles.editForm}>
            <ProjectForm handleSubmit={submitEdit} buttonContent={"Concluir Edição"} editData={props.project} />
        </div>
    );
}

export default EditForm;