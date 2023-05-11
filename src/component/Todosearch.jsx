import search from "../assets/icon/search.svg";
const TodoSearch = () => {

  return (
    <div htmlFor="search" className="flex mx-auto items-center justify-center content-center ">
      <input
        placeholder="Busca tu tarea aqui!!"
        type="text"
        className="rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <img src={search} alt="Search" className=" -ml-8 "
      />
    </div>
  );
}

export default TodoSearch;