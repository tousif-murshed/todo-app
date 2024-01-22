import { useState } from "react";
import styles from "./App.module.scss";
import list from "./Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";
import { FILTER_TYPE, Filter, HandleAddTodo, HandleDeleteTodo, HandleMarkDone, Todo } from "./components/TodoModel";

const App = () => {
  const [todos, setTodos] = useState(list);

  const handleAddTodo: HandleAddTodo = (name: string) => {
    const id = todos.length ? todos.length + 1 : 1;
    const todo: Todo = { id, name, done: false, visible: true };
    setTodos(todos => [...todos, todo]);
  }

  const handleMarkDone: HandleMarkDone = (id: number, done: boolean) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, done } : todo));
  }

  const filterTodo: Filter = (filter) => {
    switch (filter.type) {
      case FILTER_TYPE.SEARCH:
        setTodos(todos => todos.map(todo => todo.name.includes(filter.text) ? { ...todo, visible: true } : { ...todo, visible: false }));
        break;
      case FILTER_TYPE.ALL:
        setTodos(todos => todos.map(todo => ({ ...todo, visible: true })));
        break;
      case FILTER_TYPE.ACTIVE:
        setTodos(todos => filter.active ?
          todos.map(todo => todo.done ? { ...todo, visible: false } : { ...todo, visible: true }) :
          todos.map(todo => ({ ...todo, visible: true })));
        break;
      case FILTER_TYPE.DONE:
        setTodos(todos => filter.done ?
          todos.map(todo => !todo.done ? { ...todo, visible: false } : { ...todo, visible: true }) :
          todos.map(todo => ({ ...todo, visible: true })));
        break;
    }
  }

  const handleDeleteTodo: HandleDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id != id));
  }

  return (
    <div className={styles.container}>
      <AddTodo handleAddTodo={handleAddTodo}></AddTodo>
      <FilterTodo filter={filterTodo}></FilterTodo>
      <TodoList todos={todos} handleMarkDone={handleMarkDone} handleDeleteTodo={handleDeleteTodo}></TodoList>
    </div>

  )
}

export default App;