import { useContext } from "react";
import { useState } from "react";
import { MainContext } from "@/pages/state";
import { initialState } from "@/pages/state";

import styles from "./Todo.module.css";

const Todo = () => {
  console.log(initialState);
  const state = useContext(MainContext);
  console.log(state);

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");

    console.log(items);
  }

  return (
    <>
      <div className="wrapper">
        <div className={styles.text}>
          <h2>Todo!</h2>
        </div>
        <form className={styles.formWrapper} onSubmit={onHandleSubmit}>
          <input type="text" id="" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Insert your task here" />
          <button onClick={() => addItem()}> Enter </button>
        </form>

        <ul>
          <li>{initialState.todo1}</li>
          <li>{initialState.todo2}</li>
          <li>3</li>
        </ul>
      </div>
    </>
  );
};

export default Todo;
