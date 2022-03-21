export interface Todo {
  id: number;
  name: string;
}

export namespace TodosStore {
  export interface State {
    loading: boolean;
    todos: Todo[];
  }

  export interface Store {
    state: State;
    dispatchAddTodo: (name: string) => Promise<void>;
    dispatchDelTodo: (id: number) => Promise<void>;
  }

  export interface FetchAction {
    type: "fetch";
  }

  export interface AddAction {
    type: "add";
    data: { name: string };
  }

  export interface DelAction {
    type: "del";
    data: { id: number };
  }

  export type Action = FetchAction | AddAction | DelAction;
}
