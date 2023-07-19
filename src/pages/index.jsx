import TodoList from "@/components/todoList";
import { useReducer } from "react";
import { MainContext, initialState } from "./state";
import { mainReducer } from "./state/reducer";

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <>
      <MainContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </MainContext.Provider>
    </>
  );
}
