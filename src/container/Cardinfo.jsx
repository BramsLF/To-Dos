import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import search from "../assets/icon/search.png";
import bramslf from "../assets/logo/Brams-White.png";
import aestethic from "../assets/images/aestethic.jpg";
import aestethic2 from "../assets/images/aestethic2.jpg";
import github from "../assets/logo/GitHub-B.png";
import linkedin from "../assets/logo/LinkedIn.png";
import NewTodo from "../component/Newtodo";

const CardInfo = () => {
  const { completedTodos, totalTodos, searchValue, setSearchValue } =
    useContext(useTodoContext);
  return (
    <>
      <div
        className="lg:hidden md:flex md:justify-center md:items-center md:h-64 bg-cover bg-center w-full h-56"
        style={{ backgroundImage: `url(${aestethic})` }}
      >
        <div className="bg-sky-900 text-center w-full h-full p-2 opacity-75">
          <img
            src={bramslf}
            alt="MyBrand"
            className="md:mt-2 md:w-28 w-24 mx-auto mb-2 px-2"
          />
          <hr className="md:w-52 w-40 m-auto" />
          <p className="text-gray-100 font-lato font-black md:text-3xl text-2xl tracking-wide">
            NEVER STOP
          </p>
          <p className="text-gray-100 font-lato font-light md:text-3xl text-2xl tracking-widest">
            LEARNING!!
          </p>
          <div className="flex justify-center items-center md:mt-1 mt-2">
            <a href="https://github.com/BramsLF">
              <img src={github} alt="GitHub" className="md:w-8 w-6 mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/brayan-mercado-sanmart%C3%ADn-8a69821b1/">
              <img src={linkedin} alt="LinkedIn" className="md:w-8 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex lg:justify-center lg:items-center bg-cover bg-center w-1/2"
        style={{ backgroundImage: `url(${aestethic2})` }}
      >
        <div className="flex flex-col items-center justify-center px-16 py-8 rounded-lg bg-sky-900 text-center opacity-75">
          <div className="flex flex-col items-center justify-center content-center">
            <h1 className="text-sky-50 font-lato font-black text-center pt-6 text-5xl tracking-wider">
              Tus To-Dos!
            </h1>
            <div className="flex justify-center font-lato font-light text-center px-8 pb-8 text-2xl text-sky-50">
              <p>
                Completados son{" "}
                <span className="font-semibold">{completedTodos}</span> de{" "}
                <span className="font-semibold">{totalTodos}</span> !!
              </p>
            </div>
          </div>

          <NewTodo />

          <div className="hidden lg:flex my-2 items-center justify-center content-center">
            <input
              placeholder="Busca tu To-Do aqui!!"
              type="text"
              className="py-3 px-6 font-semibold outline-none border-b-2 bg-transparent"
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
            <img src={search} alt="Search" className="w-6 h-6 -ml-10 " />
          </div>

          <hr className="w-62 m-auto" />
          <p className="flex justify-center text-gray-100 font-lato font-black text-xl tracking-wide">
            NEVER STOP LEARNING!!
          </p>
          <hr className="w-62 m-auto" />
          <div className="flex justify-center items-center mt-2 md:mt-4">
            <a href="https://github.com/BramsLF">
              <img src={github} alt="GitHub" className="w-10 mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/brayan-mercado-sanmart%C3%ADn-8a69821b1/">
              <img src={linkedin} alt="LinkedIn" className="w-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
