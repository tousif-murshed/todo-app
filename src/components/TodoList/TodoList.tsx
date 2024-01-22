import Todo from "../Todo/Todo"
import { TodoListPropType } from "../TodoModel"
import styles from "./TodoList.module.scss";

export const TodoList = ({ todos, handleMarkDone }: TodoListPropType) => {
    return (
        <div className={styles.container}>
            {todos.map(todo => todo.visible && <Todo key={todo?.id} {...todo} handleMarkDone={handleMarkDone}></Todo>)}
        </div>
    )
}

export default TodoList;