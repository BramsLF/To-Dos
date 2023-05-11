const TodoCount = ({total, completed}) => {
    return (
      <>
      <h1 className="text-indigo-900 font-lato font-black text-center pt-10 lg:text-4xl text-6xl ">Tus Tareas!</h1>
      <div className="font-lato font-normal text-center px-8 pb-8 lg:text-4xl text-2xl ">
        Completaste {completed} de {total} Tareas
      </div>
      </>
    );
}
 
export default TodoCount;