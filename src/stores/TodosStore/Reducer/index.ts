import { TodosStore } from "../../../types";
import { fetchAction, addAction, delAction } from "../Action";
import { initialState } from "../../TodosStore";

export const reducer = (state: TodosStore.State, action: TodosStore.Action) => {
  switch (action.type) {
    case "fetch":
      return fetchAction(state);
    case "add":
      return addAction(state, action);
    case "del":
      return delAction(state, action);
    default:
      return { ...initialState };
  }
};
