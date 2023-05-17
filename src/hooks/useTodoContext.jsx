import { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodoContext = createContext();

const TodoProvider = ({ children }) => {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOSAPP_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = toDos.filter(
    (todo) => !!todo.completed).length;
  
    const totalTodos = toDos.length;

  const searchedTodos = toDos.filter(
    (todo) => {
    return todo.text.toLowerCase().includes(searchValue);
  });
    
  const createTodo = (text) => {
          const newTodos = [...toDos];
          newTodos.push({
            text,
            completed: false,
          });
          saveToDos(newTodos);
        };

  const handleCompleted = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveToDos(newTodos);
  };

  const handleDeleteTodo = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveToDos(newTodos);
  };
  
  const handleErrorCheck = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = false;
    saveToDos(newTodos);
  };

  return (
    <useTodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleDeleteTodo,
        handleCompleted,
        handleErrorCheck,
        openModal,
        setOpenModal,
        createTodo,
      }}
    >
      {children}
    </useTodoContext.Provider>
  );
};

export { useTodoContext, TodoProvider };
