import companyPhoto from "../../img/empresa-generica.jpg"
import styles from "./Enterprise.module.css"

const Enterprise = () => {
    return(
        <div className={styles.Enterprise}>
            <div className={styles.imgContainer}>
                <img src={companyPhoto} alt="equipe-generica"/>
            </div>
            <div className={styles.textContainer}>
                <h1>Quem somos?</h1>
                <p>
                    A Finances é uma empresa de gestão, focada em criar uma ambiente simples e eficiente
                    para criação e manuntenção dos seus projetos.
                </p>
                <p>
                Criada em 2022, em Salvador/BA, nos orgulhamos de fazer parte de parcerias duradouras e proveitosas com grandes
                empresas, principalmente na área de tecnologia.
                </p>
            </div>
        </div>
    );
}

export default Enterprise;