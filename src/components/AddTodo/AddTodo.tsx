import { useState } from "react";
import styles from "./AddTodo.module.scss";
import { AddTodoPropType } from "../TodoModel";

export const AddTodo = ({ handleAddTodo }: AddTodoPropType) => {
    const [name, setName] = useState('');
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Enter a todo name..." value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => { setName(''); handleAddTodo(name); }}>Add todo</button>
        </div>
    )
}

export default AddTodo;