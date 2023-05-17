import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const TodoCount = () => {
  const { completedTodos, totalTodos } = useContext(useTodoContext);
  return (
    <>
      <section className="lg:hidden flex flex-col items-center justify-center content-center">
        <h1 className="text-sky-500 font-lato font-black text-center pt-6 text-6xl ">
          Tus To-Dos!
        </h1>
        <div className="flex justify-center font-lato font-light text-center px-8 pb-8 lg:text-2xl text-2xl text-sky-700">
          <p>
            Completaste <span className="font-semibold">{completedTodos}</span>{" "}
            de <span className="font-semibold">{totalTodos}</span> Tareas
          </p>
        </div>
      </section>
      <section className="hidden lg:block fixed w-1/2 rounded-lg bg-white shadow-lg border-b-2">
      <h1 className="text-sky-500 font-lato font-black text-center p-6 text-6xl ">
          Lista de To-Dos!
        </h1>
      </section>
    </>
  );
};

export default TodoCount;
