import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(useTodoContext);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
      <button
        className="lg:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 rounded-full text-sky-500 hover:text-sky-50 bg-sky-50 hover:bg-sky-500 pb-2 px-4 mb-3 cursor-pointer"
        onClick={() => handleModal()}
      >
        <div className="h-10 w-10 flex justify-center items-center text-center">
          <p className="lg:hidden hover:animate-pulse text-5xl font-bold">+</p> 
        </div>
      </button>
  );
};

export default CreateTodoButton;
