const TodoCount = ({total, completed}) => {
    return (
      <>
      <h1 className="text-slate-900 font-lato font-black text-center pt-10 lg:text-7xl text-6xl ">Tus Tareas!</h1>
      <div className="font-lato font-light text-center px-8 pb-8 lg:text-3xl text-2xl ">
        Completaste {completed} de {total} Tareas
      </div>
      </>
    );
}
 
export default TodoCount;