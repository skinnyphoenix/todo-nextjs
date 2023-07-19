import styles from "./TodoList.module.css";
import { useContext, useState } from "react";
import { MainContext } from "@/pages/state";
import TodoItem from "../todoItem";

const TodoList = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(MainContext);

  const onHandleInput = (e) => setInput(e.target.value);
  const setNewTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_NEW_TODO",
      payload: {
        id: Math.random(Math.floor() * 10000),
        content: input,
        completed: false,
      },
    });
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.heading}>
        <h1>All todos!</h1>
        <form className={styles.input} onSubmit={setNewTodo}>
          <input type="text" name="content" placeholder="Add new task.." value={input} onChange={onHandleInput} />
          <input type="submit" value="+" className={styles.button} />
        </form>
      </div>
      {state?.todos?.map((todo, i) => (
        <TodoItem data={todo} index={i + 1} />
      ))}
    </div>
  );
};

export default TodoList;
