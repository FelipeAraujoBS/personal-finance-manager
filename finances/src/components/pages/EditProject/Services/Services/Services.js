import styles from "../Services.module.css"
import ServicesCard from "./ServicesCard";

const Services = props => {

    const services = props.services

   const removeService = (id, cost) => {
        props.handleRemove(id, cost)
   }

    return (
        <div>
            <h1>Serviços:</h1>
            <div className={styles.services}>
                {props.services.length > 0 && services.map(services => (
                    <ServicesCard
                        name={services.name}
                        cost={services.cost}
                        description={services.description}
                        key={services.id}
                        id={services.id}
                        remove={removeService}
                    />
                ))

                }
                {props.services.length === 0 && <p>Não há serviços cadastrados!</p>}
            </div>

        </div>
    );
}

export default Services;