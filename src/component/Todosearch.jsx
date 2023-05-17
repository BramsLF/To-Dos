import { useContext } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import search from "../assets/icon/search.png";
const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue,
  } = useContext(useTodoContext)
  return (
    <>
    <div className="lg:hidden flex items-center justify-center content-center">
      <input
        placeholder="Search your To-Do here!!"
        type="text"
        className="py-3 px-6 md:w-2/3 w-3/4 outline-none border-b-2"
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value);
        }}
      />
      <img src={search} alt="Search" className="w-6 h-6 -ml-10 "
      />
    </div>
    </>
   
  );
}

export default TodoSearch;