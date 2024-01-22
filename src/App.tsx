import AddTodo from "./components/AddTodo/AddTodo"
import styles from "./App.module.scss";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import list from "./Todos";

const App = () => {
  const [todos, setTodos] = useState(list);
  return (
    <div className={styles.container}>
      <AddTodo></AddTodo>
      <TodoList todos={todos}></TodoList>
    </div>

  )
}

export default App;