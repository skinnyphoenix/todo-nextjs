import styles from "./TodoItem.module.css";

import { useContext } from "react";
import { MainContext } from "@/pages/state";

const TodoItem = ({ data, index }) => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleDelete = () => dispatch({ type: "REMOVE_TODO", payload: data.id });

  return (
    <div onClick={() => onHandleDelete} className={`${styles.TodoItem} ${data.completed && styles.completed}`}>
      <div className={styles.wrapperHeading}>
        <p>{index}</p>
        <h3>{data.content}</h3>
      </div>
      <p>{data.completed ? "Ottimo lavoro" : "Ci sei quasi!"}</p>
    </div>
  );
};

export default TodoItem;
