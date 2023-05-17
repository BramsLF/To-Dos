import { useState, useContext, useRef } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import bramslf from "../assets/logo/Brams.png";
const NewTodo = () => {
  const { createTodo, setOpenModal } = useContext(useTodoContext);

  const [addTodo, setAddTodo] = useState("");
  const textRef = useRef(null);

  const onChange = (event) => {
    setAddTodo(event.target.value);
  };
  const onClear = () =>{
      textRef.current.value = " ";
  }
  const onSubmit = (event) => {
    createTodo(addTodo);
    setOpenModal(false);
    onClear();
  };
  const onClose = (event) => {
    setOpenModal(false);
  };

  return (
    <section>
      <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 min-h-full min-w-full">
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center m-auto h-52 w-72 p-2 bg-white rounded-lg shadow-lg">
          <div
            className="absolute rounded-full text-xl font-bold bg-sky-500 text-sky-50 hover:bg-sky-600 px-4 py-2 ml-72 mb-52"
            onClick={() => onClose()}
          >
            X
          </div>
          <p className="text-center text-2xl font-bold tracking-wider mb-1 text-sky-500">
            NUEVO TO-DO
          </p>
          <textarea
            placeholder="To-Do"
            className="bottom-2 border-b-2 p-1 h-16 w-9/12 bg-transparent transition-all duration-2500 ease-linear outline-none"
            type="text"
            onChange={onChange}
          />
          <br />
          <div
            className="absolute rounded-l-2xl bg-sky-500 text-sky-50 p-2 text-xs font-bold tracking-wider mt-20 ml-64 cursor-pointer transition-all duration-2500 ease-linear shadow-lg hover:bg-sky-600"
            onClick={() => onSubmit()}
          >
            AGREGAR
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex flex-col items-center justify-center m-auto h-52 w-72 p-2 bg-white rounded-lg shadow-lg">
        <p className="flex text-center text-2xl font-bold tracking-wider mb-1 text-sky-500">
          NUEVO TO-DO
          <img src={bramslf} alt="MyBrand" className="w-10 h-10 m-auto " />
        </p>
        <textarea
          placeholder="To-Do"
          className="bottom-2 border-b-2 p-1 h-12 w-9/12 bg-transparent outline-none text-sm"
          type="text"
          ref={textRef}
          onChange={onChange}
        />
        <br />
        <div
          className="absolute rounded-l-2xl bg-sky-500 text-sky-50 p-2 text-xs font-bold tracking-wider mt-20 ml-64 cursor-pointer shadow-lg hover:bg-sky-600"
          onClick={() => onSubmit()}
        >
          AGREGAR
        </div>
      </div>
    </section>
  );
};

export default NewTodo;
