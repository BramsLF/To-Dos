import TodoCount from "../component/Todocount";
import TodoItems from "../component/Todoitems";
import TodoSearch from "../component/Todosearch";
import Modal from "../container/Modal";
import NewTodo from "../component/Newtodo";
import TodoList from "../container/Todolist";
import CardInfo from "../container/Cardinfo";
import Loader from "../component/Loader";
import { useTodoContext } from "../hooks/useTodoContext";
import { useContext } from "react";
import CreateTodoButton from "../component/Createtodobutton";

const LayOut = () => {
  const {
    loading,
    error,
    searchedTodos,
    handleDeleteTodo,
    handleCompleted,
    handleErrorCheck,
    openModal,
  } = useContext(useTodoContext);
  return (
    <section className="min-h-screen lg:flex bg-white">
      <CardInfo />
      <div className="lg:mx-auto lg:mt-12 lg:w-1/2 lg:shadow-lg lg:rounded-lg lg:bg-white">
        <TodoCount />
        <TodoSearch />
        <TodoList>
          {loading && <Loader />}
          {error && <p>Se ha producido un error</p>}
          {!loading && searchedTodos.length === 0 && (
            <p>Crea tu primer ToDo!!</p>
          )}

          {searchedTodos.map((todo) => (
            <TodoItems
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => handleDeleteTodo(todo.text)}
              onCompleted={() => handleCompleted(todo.text)}
              onCheck={() => handleErrorCheck(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
        {openModal && (
          <Modal>
            <NewTodo />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default LayOut;
