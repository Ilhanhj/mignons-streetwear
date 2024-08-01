import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full pt-24">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-5 lg:px-20 place-content-center ">
        <div className="lg:col-span-2 lg:row-span-3 bg-[url('/src/assets/grid-1.webp')] bg-cover bg-top rounded-xl p-5 lg:p-10 flex flex-col justify-center shadow-xl hover:brightness-50 transition-all duration-300">
          <Link to="/runway">
            <h1 className="outline-white text-center lg:text-4xl text-xl font-bold ">MIGNONS RUNWAY 2024</h1>
          </Link>
        </div>
        <div className="lg:col-span-2 lg:row-span-2 bg-[url('/src/assets/grid-2-1.jpg')] bg-cover bg-bottom lg:bg-right-top rounded-xl p-5 lg:p-20 flex flex-col justify-center items-start shadow-xl ">
          <h3 className="text-2xl  lg:text-5xl font-black uppercase italic outline-white">
            real art <span className="text-xl font-bold ">by</span>
          </h3>
          <h3 className="text-2xl  lg:text-5xl font-black uppercase italic outline-white">
            real artist <span className="text-xl  font-bold ">for</span>
          </h3>
          <h3 className="text-2xl  lg:text-5xl font-black uppercase italic outline-white">
            real people <span className="text-xl  font-bold ">only</span>
          </h3>
        </div>
        <a href="" className="hover:brightness-50 transition-all duration-300">
          <div className="bg-[url('/src/assets/grid-4.png')] bg-cover bg-center rounded-xl p-5 lg:p-20  bg-neutral-950 flex justify-center items-center shadow-xl">
            <Link to="/accessories">
              <h1 className="outline-white font-semibold text-lg lg:text-3xl ">#ACCESSORIES</h1>
            </Link>
          </div>
        </a>
        <a href="" className="hover:brightness-50 transition-all duration-300">
          <div className="bg-[url('/src/assets/grid-3.png')] bg-cover bg-center rounded-xl p-5 lg:p-20  bg-neutral-950 flex justify-center items-center shadow-xl">
            <Link to="/footwear">
              <h1 className="outline-white font-semibold text-lg lg:text-3xl ">#FOOTWEAR</h1>
            </Link>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
