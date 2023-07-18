import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = [
  {
    todo1: "Buy milk",
    id: Math.random(Math.floor() * 1000),
  },
  {
    todo2: "Buy bread",
    id: Math.random(Math.floor() * 1000),
  },
];
