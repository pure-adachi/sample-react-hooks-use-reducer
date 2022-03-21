import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useStore } from "../../../stores/TodosStore";
import LoadingOverlay from "../../molecules/LoadingOverlay";
import InputText from "../../atoms/InputText";
import Button from "../../atoms/Button";

const Todos = () => {
  const store = useStore();
  const [inputText, setInputText] = useState<string | null>();

  const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleClickAddTodo = () => {
    if (!inputText) return;

    store.dispatchAddTodo(inputText).then(() => {
      setInputText(null);
    });
  };

  const handleKeyPressInputText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    handleClickAddTodo();
  };

  const handleClickDelTodo = (id: number) => {
    if (!window.confirm("Do you want to delete it?")) return;

    store.dispatchDelTodo(id);
  };

  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl relative">
        <LoadingOverlay active={store.state.loading} />

        <div className="font-bold text-xl mb-2">TODO List</div>

        <div>
          <div className="flex mb-4">
            <InputText
              className="shadow mr-4"
              placeholder="Add Todo"
              value={inputText || ""}
              onChange={handleChangeInputText}
              onKeyPress={handleKeyPressInputText}
            />

            <Button
              className="
                border-blue-300 text-blue-400
                hover:text-white hover:bg-blue-300
                disabled:hover:text-blue-400 disabled:hover:bg-white
              "
              onClick={handleClickAddTodo}
              disabled={!inputText || store.state.loading}
            >
              Add
            </Button>
          </div>

          {store.state.todos.map(({ id, name }) => {
            return (
              <div key={id} className="flex mb-4 items-center">
                <p className="w-full">{name}</p>
                <Button
                  className="
                    border-red-400 text-red-400
                    hover:text-white hover:bg-red-400
                    disabled:hover:text-red-400 disabled:hover:bg-white
                  "
                  onClick={() => handleClickDelTodo(id)}
                  disabled={store.state.loading}
                >
                  Del
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
