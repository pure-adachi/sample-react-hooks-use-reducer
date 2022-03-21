import { TodosStore } from "../../../types";

export const fetchAction = (state: TodosStore.State): TodosStore.State => {
  return { ...state, loading: true };
};

export const addAction = (
  state: TodosStore.State,
  { data: { name } }: TodosStore.AddAction
): TodosStore.State => {
  return {
    ...state,
    loading: false,
    todos: [
      ...state.todos,
      {
        id: new Date().getTime(),
        name,
      },
    ],
  };
};

export const delAction = (
  state: TodosStore.State,
  { data: { id } }: TodosStore.DelAction
): TodosStore.State => {
  const todos = state.todos.filter((todo) => todo.id !== id);

  return {
    ...state,
    loading: false,
    todos,
  };
};
