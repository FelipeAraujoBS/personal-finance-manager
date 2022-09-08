import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import savings from "../../img/savings.svg"

const Home = () => {
    return (
        <div>
            <div  className={styles.home}>
                <h1>Bem-vindo ao <span className={styles.span}>Finances</span></h1>
                <p>Um gerenciador de projetos descomplicado</p>
            </div>
            <Link className={styles.link} to="/newProject"><button  className={styles.button}>Criar projeto</button></Link>
            <div  className={styles.imgContainer}>
                <img className={styles.img} src={savings} alt="savings"/>
            </div>
        </div>
    );
}

export default Home;