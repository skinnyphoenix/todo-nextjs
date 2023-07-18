import { Inter } from "next/font/google";
import Todo from "@/components/Todo";
import { MainContext, initialState } from "./state";

export default function Home() {
  return (
    <>
      <MainContext.Provider value={initialState}>
        <Todo />
      </MainContext.Provider>
    </>
  );
}
