import { useState } from "react";
const CreateTodoButton = () => {
  const [hover, setHover] = useState(false);

  const handleOnMouseOver = () => {
    setHover(true);
  };

  const handleOnMouseOut = () => {
    setHover(false);
  };

  return (
    <button
      className={`mx-auto flex justify-center items-center text-center mt-3 mb-2 text-2xl font-semibold rounded-lg text-black hover:text-white pb-2 px-4 border-none cursor-pointer ${
        hover ? "bg-black" : "bg-white"
      }`}
      style={
        ({
          transition: "all 0.3s ease",
        },
        { zIndex: 9999 })
      }
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      onClick={() => console.log("cachon!!")}
    >
      
      New ToDo
      <span className="relative ml-1 mt-1.5 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </button>
  );
};

export default CreateTodoButton;
