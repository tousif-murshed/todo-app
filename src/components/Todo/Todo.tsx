import { TodoPropType } from "../TodoModel";
import styles from "./Todo.module.scss";

export const Todo = ({ id, name, done, visible }: TodoPropType) => {
    return (
        <div className={styles.container}>
            <div>{id}.</div>
            <input type="checkbox" defaultChecked={done} />
            <div className={`${done && styles.strikeThrough}`}>{name}</div>
            <button>Delete</button>
        </div>
    )
}

export default Todo;