import { useReducer } from "react";
import { reducer } from "./Reducer";
import { TodosStore } from "../../types";
import { dummyFetch } from "../../DummyFetch";

export const initialState: TodosStore.State = {
  loading: false,
  todos: [
    {
      id: 1,
      name: "Todo 1",
    },
    {
      id: 2,
      name: "Todo 2",
    },
    {
      id: 3,
      name: "Todo 3",
    },
  ],
};

export function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchAddTodo = (name: string) => {
    dispatch({ type: "fetch" });

    return dummyFetch().then(() => dispatch({ type: "add", data: { name } }));
  };

  const dispatchDelTodo = (id: number) => {
    dispatch({ type: "fetch" });

    return dummyFetch().then(() => dispatch({ type: "del", data: { id } }));
  };

  const store: TodosStore.Store = {
    state,
    dispatchAddTodo,
    dispatchDelTodo,
  };

  return store;
}
