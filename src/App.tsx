import { useState } from "react";
import styles from "./App.module.scss";
import list from "./Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState(list);
  return (
    <div className={styles.container}>
      <AddTodo></AddTodo>
      <FilterTodo></FilterTodo>
      <TodoList todos={todos}></TodoList>
    </div>

  )
}

export default App;