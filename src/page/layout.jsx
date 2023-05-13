import CardInfo from "../component/Cardinfo";

const LayOut = ({ children }) => {
    return (
      <section className="min-h-screen lg:flex bg-white">
        <CardInfo />
        <div className="lg:w-5/12 lg:shadow-lg lg:rounded-lg lg:bg-gray-200 lg:m-auto lg:justify-center lg:items-center">{children}</div>
      </section>
    );
}
 
export default LayOut;
