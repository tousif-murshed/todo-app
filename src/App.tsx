import { useState } from "react";
import styles from "./App.module.scss";
import list from "./Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./components/TodoModel";

const App = () => {
  const [todos, setTodos] = useState(list);

  const handleAddTodo = (name: string) => {
    const id = todos.length ? todos.length + 1 : 1;
    const todo: Todo = { id, name, done: false, visible: true };
    setTodos(todos => [...todos, todo]);
  }

  const handleMarkDone = (id: number, done: boolean) => {
    setTodos(todos => todos.map(todo => todo.id == id ? { ...todo, done } : todo));
  }

  return (
    <div className={styles.container}>
      <AddTodo handleAddTodo={handleAddTodo}></AddTodo>
      <FilterTodo></FilterTodo>
      <TodoList todos={todos} handleMarkDone={handleMarkDone}></TodoList>
    </div>

  )
}

export default App;