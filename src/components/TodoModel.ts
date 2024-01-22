
export type Todo = {
    id: number,
    name: string,
    done: boolean,
    visible: boolean
}

export type HandleMarkDone = (id: number, done: boolean) => void;

export interface TodoPropType extends Todo {
    handleMarkDone: HandleMarkDone;
}

export type AddTodoPropType = {
    handleAddTodo: (name: string) => void;
}

export type TodoListPropType = {
    todos: Todo[]
    handleMarkDone: HandleMarkDone;
}