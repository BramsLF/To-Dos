import search from "../assets/icon/search.png";
const TodoSearch = ({ searchValue, setSearchValue}) => {
  return (
    <div className="flex mx-auto items-center justify-center content-center">
      <input
        placeholder="Busca tu tarea aqui!!"
        type="text"
        className=" rounded-full py-3 px-6 md:w-2/3 w-3/4 focus:outline-none focus:ring-2 focus:ring-black"
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value);
        }}
      />
      <img src={search} alt="Search" className="w-6 h-6 -ml-10 "
      />
    </div>
  );
}

export default TodoSearch;