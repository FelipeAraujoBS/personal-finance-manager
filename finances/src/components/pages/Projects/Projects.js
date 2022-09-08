import ProjectsList from "./ProjectsList";
import styles from "./Projects.module.css"

const Projects = () => {
    return (
       <div className={styles.projectBody}>
            <ProjectsList/>
       </div>
    );
}

export default Projects;