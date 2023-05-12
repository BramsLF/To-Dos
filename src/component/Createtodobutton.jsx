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
        className={`flex justify-center mx-auto mt-4 mb-4 w-20 text-6xl font-semibold rounded-lg text-black hover:text-white pb-2 px-4 border-none cursor-pointer ${
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
        onClick={()=>console.log("cachon!!")}
      >
        +
      </button>
  );
};

export default CreateTodoButton;
