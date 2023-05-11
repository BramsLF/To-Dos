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
  {text: "Completar FullStack with ExpressJS", completed: true}
]
const App = () => {
  return (
    <>
      <LayOut>
        <TodoCount completed={5} total={10} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItems
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </LayOut>
    </>
  );
}

export default App;
