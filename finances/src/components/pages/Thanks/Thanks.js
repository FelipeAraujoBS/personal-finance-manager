import styles from "./Thanks.module.css"

const Thanks = () => {
    return(
        <div className={styles.thanksContainer}>
           <div className={styles.messageContainer}>
                <h1>Mensagem enviada com sucesso!!</h1>

                <a className={styles.a} href="/Contact">Retornar</a>
           </div>
        </div>
    )
}

export default Thanks;