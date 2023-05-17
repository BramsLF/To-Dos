import nuevotodo from "../assets/icon/nuevotodo.png";
import arrowd from "../assets/icon/arrowd.png";
const CreaTuPrimerTodo = () => {
  return (
    <div className="flex flex-col justify-center items-center font-lato font-black text-sky-500 lg:text-4xl text-xl p-8 m-16">
        <div className="w-full flex justify-center items-center">
          <p className="">¡Creates a To-Do!</p>
          <img src={nuevotodo} alt="nuevotodo" className="lg:w-10 w-6"/>  
        </div>
      
      <img src={arrowd} alt="nuevotodo" className="w-10 mt-2 animate-bounce" />
    </div>
  );
};

export default CreaTuPrimerTodo;
