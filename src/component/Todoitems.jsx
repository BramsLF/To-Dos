import { useState } from "react";
import borrar from "../assets/icon/delete.png";
import borrarF from "../assets/icon/deleteF.png";
import check from "../assets/icon/check.svg";
import checkF from "../assets/icon/CheckF.png";
const TodoItems = ({ text }) => {
  const [completed, setCompleted] = useState(false);
  const handleCompleted = () => {
    setCompleted(!completed);
  };

  const [erase, setErase] = useState(true);
  const handleErase = () => {
    setErase(false);
  };
  if (!erase) {
    return null;
  }

  return (
    <>
      {completed ? (
        <div className="bg-gray-400 flex w-11/12 mt-4 p-2 items-center justify-center shadow-lg mb-4 rounded-lg border-solid border-gray-200">
          <img src={checkF} alt="Completed Final" className="w-6 h-6 mx-2" />
          <p className="text-sm text-white line-through">{text}</p>
          <img
            src={borrar}
            alt="Delete"
            className="w-6 h-6 ml-auto mr-3"
            onClick={handleErase}
          />
        </div>
      ) : (
        <div className="bg-white flex w-11/12 mt-4 p-2 items-center justify-center shadow-lg mb-4 hover:bg-gray-100 rounded-lg border-solid border-gray-200 border-2">
          <img
            src={check}
            alt="Completed"
            className="mx-2"
            onClick={handleCompleted}
          />
          <p className="text-sm">{text}</p>
          <img
            src={borrarF}
            alt="Delete"
            className="w-6 h-6 ml-auto mr-3"
            onClick={handleErase}
          />
        </div>
      )}
    </>
  );
};
 
export default TodoItems;