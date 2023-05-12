const TodoList = ({ children }) => {
    return ( 
        <div className="flex flex-col items-center justify-center m-auto mt-4 md:w-9/12">
            {children}
        </div>
     );
}
 
export default TodoList;