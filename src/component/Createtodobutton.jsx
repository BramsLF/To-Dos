import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import add from "../assets/icon/add.png";
const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(useTodoContext);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <button
      className="lg:hidden fixed bottom-5 left-1/2 flex items-center justify-center w-16 h-16 -ml-8 rounded-full text-sky-500 hover:text-sky-50 cursor-pointer"
      onClick={() => handleModal()}
    >
      <p className="w-12 mb-3 hover:animate-spin text-6xl font-black"><img src={add} alt="add"/>
      </p>
    </button>
  );
};

export default CreateTodoButton;