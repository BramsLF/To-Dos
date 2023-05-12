import { useState } from "react";
import CreateTodoButton from "./component/Createtodobutton";
import TodoCount from "./component/Todocount";
import TodoItems from "./component/Todoitems";
import TodoSearch from "./component/Todosearch";
import TodoList from "./container/Todolist";
import LayOut from "./page/layout";

const defaultTodos = [
  {text: "Completar FrontEnd with ReactJS", completed: false},
  {text: "Completar FullStack with JavaScript", completed: true},
  {text: "Completar BackEnd with NodeJS", completed: false},
  {text: "Completar FullStack with ExpressJS", completed: true},
  {text: "Completar Aprendizaje sobre Hooks", completed: true}
]

const App = () => {
  const [toDos, setToDos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = toDos.filter((todo) => !!todo.completed).length;
  const totalTodos = toDos.length;

  const searchedTodos = toDos.filter(
    (todo) => {
    return todo.text.toLowerCase().includes(searchValue);
  }); 

  const handleDeleteTodo = (index) => {
    setToDos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };
  
  const handleCompleted = (text) => {
    const newTodos =[...toDos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setToDos(newTodos)
  };
  const handleErrorCheck = (text) => {
    const newTodos =[...toDos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = false;
    setToDos(newTodos)
  };


  return (
    <>
      <LayOut>
        <TodoCount completed={completedTodos} total={totalTodos} />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map((todo, index) => (
            <TodoItems
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => handleDeleteTodo(index)}
              onCompleted={()=> handleCompleted(todo.text)}
              onCheck={()=> handleErrorCheck(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </LayOut>
    </>
  );
}

export default App;
