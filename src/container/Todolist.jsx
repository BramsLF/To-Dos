const TodoList = ({ children }) => {
    return ( 
        <ul className="flex flex-col items-center justify-center m-auto">
            {children}
        </ul>
     );
}
 
export default TodoList;