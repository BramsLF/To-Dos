import TodoCount from "../component/Todocount";
import TodoItems from "../component/Todoitems";
import TodoSearch from "../component/Todosearch";
import TodoList from "../container/Todolist";
import CardInfo from "../container/Cardinfo";
import Loader from "../component/Loader";
import { TodoContext } from "../hooks/Todocontext";

const LayOut = () => {
  return (
    <section className="min-h-screen lg:flex bg-white">
      <CardInfo />
      <div className="lg:w-5/12 lg:shadow-lg lg:rounded-lg lg:bg-gray-200 lg:m-auto lg:justify-center lg:items-center">
        <TodoCount />
        <TodoSearch />
        <TodoContext.Consumer>
          <TodoList>
            {loading && <Loader />}

            {error && <p>Se ha producido un error</p>}

            {!loading && searchedTodos.length === 0 && (
              <p>Crea tu primer ToDo!!</p>
            )}

            {searchedTodos.map((todo, index) => (
              <TodoItems
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onDelete={() => handleDeleteTodo(index)}
                onCompleted={() => handleCompleted(todo.text)}
                onCheck={() => handleErrorCheck(todo.text)}
              />
            ))}
          </TodoList>
        </TodoContext.Consumer>
      </div>
    </section>
  );
};

export default LayOut;
