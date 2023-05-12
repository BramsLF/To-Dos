import CardInfo from "../component/Cardinfo";

const LayOut = ({ children }) => {
    return (
      <section className="min-h-screen lg:flex bg-white">
        <CardInfo />
        <div className="md:mt-4 md:p-2 lg:w-2/5 lg:shadow-lg lg:rounded-lg lg:bg-gray-200 lg:m-auto lg:justify-center lg:items-center">{children}</div>
      </section>
    );
}
 
export default LayOut;
