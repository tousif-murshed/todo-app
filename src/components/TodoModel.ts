
export type Todo = {
    id: number,
    name: string,
    done: boolean,
    visible: boolean
}

export type HandleMarkDone = (id: number, done: boolean) => void;

export type HandleAddTodo = (name: string) => void;

export enum FILTER_TYPE {
    SEARCH,
    ALL,
    ACTIVE,
    DONE
}

export type FilterCriteria =
    | { type: FILTER_TYPE.SEARCH, text: string }
    | { type: FILTER_TYPE.ALL, all: boolean }
    | { type: FILTER_TYPE.ACTIVE, active: boolean }
    | { type: FILTER_TYPE.DONE, done: boolean }

export type Filter = (filter: FilterCriteria) => void;

export interface TodoPropType extends Todo {
    handleMarkDone: HandleMarkDone;
}

export type AddTodoPropType = {
    handleAddTodo: HandleAddTodo;
}

export type TodoListPropType = {
    todos: Todo[]
    handleMarkDone: HandleMarkDone;
}

export type FilterTodoPropType = {
    filter: Filter;
}