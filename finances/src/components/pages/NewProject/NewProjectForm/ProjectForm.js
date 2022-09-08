import { useState, useEffect } from "react"
import styles from "./ProjectForm.module.css"

const ProjectForm = props => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredBudget, setEnteredBudget] = useState('')
    const [enteredCategory, setEnteredCategory] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const budgetChangeHandler = (event) => {
        setEnteredBudget(event.target.value)
    }

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value)
    } 

    const submitHandler = (event) => {
        event.preventDefault()

        const formData = {
            name: enteredName,
            budget: enteredBudget,
            category: enteredCategory
        };

        props.handleSubmit(formData)
        console.log(formData)
        setEnteredName('');
        setEnteredBudget('');
        setEnteredCategory('');
    }


    const [categories, setCatergories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCatergories(data)
    })
    .catch((err) => console.log(err))

    }, [])
    
    

    return (
        <form onSubmit={submitHandler} className={styles.form_control}>
            <div className={styles.form_opt}>
                <label>Nome do projeto:</label> <br />
                <input onChange={nameChangeHandler} value={enteredName} placeholder="Insira o nome do projeto" type="text" /> <br />
            </div>
            <div className={styles.form_opt}>
                <label>Orçamento do projeto:</label> <br />
                <input onChange={budgetChangeHandler} value={enteredBudget} placeholder="Insira o orçamento total" type="number" />
            </div>
            <div className={styles.form_opt}>
                <label>Selecione a Categoria:</label> <br />
                <select onChange={categoryChangeHandler} value={enteredCategory} >
                    <option>Selecione uma opção</option>
                    {categories.map(option => (
                        <option key={option.id}>{option.name}</option>
                    ))}
                </select>
            </div>
            <button className={styles.button} type="submit">{props.buttonContent}</button>
        </form>
    );
}

export default ProjectForm;