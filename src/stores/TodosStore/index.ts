import { useState } from "react";
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
  const [loading, setLoading] = useState(initialState.loading);
  const [todos, setTodos] = useState(initialState.todos);

  const state: TodosStore.State = {
    loading,
    todos,
  };

  const dispatchAddTodo = (name: string) => {
    setLoading(true);

    return dummyFetch().then(() => {
      setTodos([
        ...todos,
        {
          id: new Date().getTime(),
          name,
        },
      ]);

      setLoading(false);
    });
  };

  const dispatchDelTodo = (id: number) => {
    setLoading(true);

    return dummyFetch().then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      setLoading(false);
    });
  };

  const store: TodosStore.Store = {
    state,
    dispatchAddTodo,
    dispatchDelTodo,
  };

  return store;
}
