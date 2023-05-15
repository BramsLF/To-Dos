import CreateTodoButton from "../component/Createtodobutton";
import bramslf from "../assets/logo/Brams-White.png";
import aestethic from "../assets/images/aestethic.jpg";
import aestethic2 from "../assets/images/aestethic2.jpg";
import github from "../assets/logo/GitHub-B.png";
import linkedin from "../assets/logo/LinkedIn.png";
const CardInfo = () => {
  return (
    <>
      <div
        className="block lg:hidden md:flex md:justify-center md:items-center md:h-64 bg-cover bg-center w-full h-64"
        style={{ backgroundImage: `url(${aestethic})` }}
      >
        <div className="bg-black text-center w-full h-full p-2 opacity-75">
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
          <CreateTodoButton />
        </div>
      </div>
      <div
        className="hidden lg:flex lg:justify-center lg:items-center bg-cover bg-center w-1/2"
        style={{ backgroundImage: `url(${aestethic2})` }}
      >
        <div className="p-20 rounded-lg bg-black text-center opacity-75">
          <img
            src={bramslf}
            alt="MyBrand"
            className="w-60 h-auto mb-2 mx-auto"
          />
          <hr className="w-62 m-auto" />
          <p className="text-gray-100 font-lato font-black text-5xl tracking-wide">
            NEVER STOP
          </p>
          <p className="text-gray-100 font-lato font-light text-5xl tracking-widest">
            LEARNING!!
          </p>
          <div className="flex justify-center items-center mt-2 md:mt-4">
            <a href="https://github.com/BramsLF">
              <img src={github} alt="GitHub" className="w-12 mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/brayan-mercado-sanmart%C3%ADn-8a69821b1/">
              <img src={linkedin} alt="LinkedIn" className="w-12" />
            </a>
          </div>
          <CreateTodoButton />
        </div>
      </div>
      
    </>
  );
};

export default CardInfo;
