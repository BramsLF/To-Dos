const TodoCount = ({ total, completed }) => {
  return (
    <>
      <h1 className="text-slate-900 font-lato font-black text-center pt-6 lg:text-6xl text-6xl ">
        Tus Tareas!
      </h1>
      <div className="flex justify-center font-lato font-light text-center px-8 pb-8 lg:text-2xl text-2xl">
        <p>Completaste  <span className="font-semibold">{completed}</span>  de   <span className="font-semibold">{total}</span>  Tareas</p>
      </div>
    </>
  );
};

export default TodoCount;
