
export type Todo = {
    id: number,
    name: string,
    done: boolean,
    visible: boolean
}

export interface TodoPropType extends Todo {

}

export type AddTodoPropType = {

}

export type TodoListPropType = {
    todos: Todo[]
}