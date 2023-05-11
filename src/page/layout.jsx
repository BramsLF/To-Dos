import CardInfo from "../component/Cardinfo";

const LayOut = ({ children }) => {
    return (
      <section className="min-h-screen lg:flex bg-gradient-to-br from-white to-indigo-200">
        <CardInfo />
        <div className="lg:w-1/2 rounded-lg">{children}</div>
      </section>
    );
}
 
export default LayOut;
