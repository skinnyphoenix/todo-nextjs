import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = {
  todos: [
    {
      id: 1,
      content: "Comprare pasta",
      completed: false,
    },
  ],
  username: "Giovanni",
};
