import Todo from "../Todo/Todo"
import { TodoListPropType } from "../TodoModel"
import styles from "./TodoList.module.scss";

export const TodoList = ({ todos }: TodoListPropType) => {
    return (
        <div className={styles.container}>
            {todos.map(todo => <Todo key={todo?.id} {...todo}></Todo>)}
        </div>
    )
}

export default TodoList;