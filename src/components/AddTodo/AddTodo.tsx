import styles from "./AddTodo.module.scss";
export const AddTodo = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Enter a todo name..." />
            <button>Add todo</button>
        </div>
    )
}

export default AddTodo;