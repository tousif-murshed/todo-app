import styles from "./FilterTodo.module.css";

export const FilterTodo = () => {
    return <div className={styles.container}>
        <input type="text" placeholder="Search todo..." />
        <label htmlFor="all">
            <input type="checkbox" name="" id="all" />
            All
        </label>
        <label htmlFor="active">
            <input type="checkbox" name="" id="active" />
            Active
        </label>
        <label htmlFor="done">
            <input type="checkbox" name="" id="done" />
            Done
        </label>
    </div>
}

export default FilterTodo;