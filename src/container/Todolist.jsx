const TodoList = ({ children }) => {
  return (
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
  );
};

export default TodoList;