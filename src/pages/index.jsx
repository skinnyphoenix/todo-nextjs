import TodoList from "@/components/todoList";
import Header from "@/components/header";
import { useReducer } from "react";
import { MainContext, initialState } from "./state";
import { mainReducer } from "./state/reducer";

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <>
      <MainContext.Provider value={{ state, dispatch }}>
        <Header />
        <TodoList />
      </MainContext.Provider>
    </>
  );
}
