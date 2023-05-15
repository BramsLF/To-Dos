import { Children, createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = () => {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOSAPP_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = toDos.filter((todo) => !!todo.completed).length;
  const totalTodos = toDos.length;

  const searchedTodos = toDos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue);
  });

  const handleDeleteTodo = (index) => {
    saveToDos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const handleCompleted = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveToDos(newTodos);
  };
  const handleErrorCheck = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = false;
    saveToDos(newTodos);
  };
  return (<TodoContext.Provider value={{
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleDeleteTodo,
    handleCompleted,
    handleErrorCheck
  }}>
    {Children}
  </TodoContext.Provider>);
};

{/* 
<TodoContext.Consumer></TodoContext.Consumer> */
}

export { TodoContext, TodoProvider };

// loading={loading}
//       error={error}
//       completedTodos={completedTodos}
//       totalTodos={totalTodos}
//       searchValue={searchValue}
//       setSearchValue={setSearchValue}
//       searchedTodos={searchedTodos}
//       handleDeleteTodo={handleDeleteTodo}
//       handleCompleted={handleCompleted}
// handleErrorCheck={handleErrorCheck}