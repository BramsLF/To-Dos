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
        className={` mr-6 ml-auto flex w-20 mt-60 items-center justify-center text-6xl font-semibold rounded-lg text-white hover:text-black pb-2 px-4 border-none cursor-pointer ${
          hover ? "bg-white" : "bg-black"
        }`}
        style={
          ({
            transition: "all 0.3s ease",
          },
          { zIndex: 9999 })
        }
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        +
      </button>
  );
};

export default CreateTodoButton;
