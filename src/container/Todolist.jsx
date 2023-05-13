const TodoList = ({ children }) => {
    return ( 
        <div className="flex flex-col items-center justify-center m-auto mt-2 md:w-11/12">
            {children}
        </div>
     );
}
 
export default TodoList;