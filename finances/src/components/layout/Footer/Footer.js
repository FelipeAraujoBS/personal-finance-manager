import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div>
                <ul>
                    <li>
                    <a href="https://pt-br.facebook.com/" target="__blank"><FaFacebook/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="__blank"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/felipe-ar%C3%A1ujo-b87386231/" target="__blank"><FaLinkedin/></a>
                    </li>
                </ul>
            </div>
           
        </footer>
    );
}

export default Footer;