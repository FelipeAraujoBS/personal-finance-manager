import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectsCard from "./ProjectsCard";
import Message from "../../layout/Message/Message";
import styles from "./ProjectsList.module.css";
import Loading from "../../layout/Loading/Loading";

const ProjectsList = () => {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessange, setProjectMessange] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessange("Projeto excluido com sucesso!!");
      });
  };

  const projectsDisplay = projects.map((projects) => (
    <ProjectsCard
      delete={handleDelete}
      id={projects.id}
      name={projects.name}
      budget={projects.budget}
      category={projects.category}
      key={projects.id}
    />
  ));

  return (
    <div>
      <div className={styles.titleContainer}>
        <Link to="/newProject">
          <button className={styles.button} type="button">
            Criar Novo Projeto
          </button>
        </Link>
        {message && <Message type="sucess" msg={message} />}
        {projectMessange && <Message type="sucess" msg={projectMessange} />}
      </div>
      {!removeLoading && <Loading /> && projectsDisplay !== 0}
      {removeLoading && projectsDisplay.length === 0 && (
        <p className={styles.noProjects}>Não há projetos cadastrados!</p>
      )}
      <div className={styles.projectsContainer}>{projectsDisplay}</div>
    </div>
  );
};

export default ProjectsList;
