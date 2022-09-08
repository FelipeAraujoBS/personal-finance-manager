import styles from "./Contact.module.css"
import whatsapp from "../../img/whatsapp.svg.png"

const Contact = () => {
    return(
       <div>
            <div className={styles.emailContainer}>
                <h2>Mande-nos um Email</h2>

                <form className={styles.form} action="https://formsubmit.co/2865255911cb22920d0a57571733c0a7 " method="POST">

                    <input type="hidden" name="_next" value="http://localhost:3001/thanks"/>
                        <input className={styles.input} type="hidden" name="_captcha" value="false" />

                        <div className={styles.inputContainer}>
                            <input className={styles.input} type="text" name="Name" placeholder='Nome' required /> <br />
                            <input className={styles.input} type="email" name="Email" placeholder='Email' required /> <br />
                        </div>

                        <div className={styles.textareaContainer}>
                            <textarea className={styles.textarea} name="Message" placeholder='Mensagem' required /> <br />
                            <button className={styles.button} type='submit'>Enviar</button>
                        </div>

                </form>
            </div>
            <div className={styles.phone}>
                <li><a href="https://wa.me/557192390048" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/><p>Telefone: (71) 99239-0048</p></a></li>
            </div>
       </div>
    );
}

export default Contact;