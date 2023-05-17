import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(useTodoContext);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <button
      className="lg:hidden fixed bottom-5 left-1/2 flex items-center justify-center w-16 h-16 -ml-8 rounded-full text-sky-500 hover:text-sky-50 bg-sky-50 hover:bg-sky-500 cursor-pointer"
      onClick={() => handleModal()}
    >
      <p className="w-10 mb-3 hover:animate-pulse text-6xl font-black">
        +
      </p>
    </button>
  );
};

export default CreateTodoButton;
