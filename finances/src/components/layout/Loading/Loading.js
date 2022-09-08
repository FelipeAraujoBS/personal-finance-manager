import styles from "./Loading.module.css"
import loading from "../../img/loading.svg"

const Loading = () => {
    return(
        <div className={styles.loadingContainer}>
            <img className={styles.loading} src={loading} alt="loading"/>
        </div>
    );
}

export default Loading