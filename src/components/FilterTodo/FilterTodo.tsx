import { useState } from "react";
import { FILTER_TYPE, FilterTodoPropType } from "../TodoModel";
import styles from "./FilterTodo.module.css";

export const FilterTodo = ({ filter }: FilterTodoPropType) => {
    const [searchText, setSearchText] = useState('');
    const [all, setAll] = useState(false);
    const [active, setActive] = useState(false);
    const [done, setDone] = useState(false);
    return <div className={styles.container}>
        <input type="text" placeholder="Search todo..." value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
            filter({ type: FILTER_TYPE.SEARCH, text: e.target.value });
        }} />
        <label htmlFor="all">
            <input type="checkbox" name="" id="all" checked={all} onChange={(e) => {
                setAll(e.target.checked);
                setActive(false);
                setDone(false);
                setSearchText('');
                filter({ type: FILTER_TYPE.ALL, all: e.target.checked });
            }} />
            All
        </label>
        <label htmlFor="active">
            <input type="checkbox" name="" id="active" checked={active} onChange={(e) => {
                setAll(false);
                setDone(false);
                setSearchText('');
                setActive(e.target.checked);
                filter({ type: FILTER_TYPE.ACTIVE, active: e.target.checked });
            }} />
            Active
        </label>
        <label htmlFor="done">
            <input type="checkbox" name="" id="done" checked={done} onChange={(e) => {
                setAll(false);
                setActive(false);
                setSearchText('');
                setDone(e.target.checked);
                filter({ type: FILTER_TYPE.DONE, done: e.target.checked });
            }} />
            Done
        </label>
    </div>
}

export default FilterTodo;