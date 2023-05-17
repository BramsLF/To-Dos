const TodoList = ({ children }) => {
  return (
      <div className="flex flex-col items-center justify-center lg:mt-28">
        {children}
      </div>
  );
};

export default TodoList;