import borrar1 from "../assets/icon/delete.png";
import borrar2 from "../assets/icon/deleteF.png";
import check1 from "../assets/icon/check.svg";
import check2 from "../assets/icon/CheckF.png";
const TodoItems = ({ text, completed, onDelete, onCompleted, onCheck }) => {
  return (
    <>
      <div
        className={`${
          completed
            ? "bg-gray-400 flex w-11/12 mt-4 p-2 items-center justify-center shadow-lg mb-4 rounded-lg border-solid border-gray-200"
            : "bg-white flex w-11/12 mt-4 p-2 items-center justify-center shadow-lg mb-4 hover:bg-gray-100 rounded-lg border-solid border-gray-200 border-2"
        }`}
      >
        <img
          src={check1}
          alt="Completed"
          className={`mx-2 ${!completed ? "block" : "hidden"}`}
          onClick={onCompleted}
        />
        <img
          src={check2}
          alt="Completed Final"
          className={`w-6 h-6 mx-2 ${completed ? "block" : "hidden"}`}
          onClick={onCheck}
        />
        <p
          className={`${
            completed ? "py-4 text-sm text-white line-through" : "py-4 text-sm"
          }`}
        >
          {text}
        </p>
        <img
          src={borrar2}
          alt="Delete"
          className={`w-6 h-6 ml-auto mr-3  ${completed ? "hidden" : "block"}`}
          onClick={onDelete}
        />
        <img
          src={borrar1}
          alt="Delete"
          className={`w-6 h-6 ml-auto mr-3  ${completed ? "block" : "hidden"}`}
          onClick={onDelete}
        />
      </div>
    </>
  );
};

export default TodoItems;
