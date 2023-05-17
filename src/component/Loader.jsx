const Loader = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="bg-sky-50 flex w-11/12 mt-2 p-4 items-center justify-center shadow-lg mb-4 rounded-lg border-solid border-sky-200">
        <div className="bg-sky-300 w-7 h-6 mx-2 rounded-full animate-pulse"></div>
        <div className="bg-sky-300 h-6 w-full py-4 rounded-full animate-pulse"></div>
        <div className="bg-sky-300 w-7 h-6 mx-2 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Loader;
