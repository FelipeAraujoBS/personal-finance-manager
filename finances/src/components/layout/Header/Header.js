import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import coin from "../../img/coin.png"

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img className={styles.img} src={coin} alt="coin"/>
                </Link>
            </div>

            <ul className={styles.links}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/enterprise">Empresa</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Header;