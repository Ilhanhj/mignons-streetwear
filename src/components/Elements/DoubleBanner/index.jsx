import { RiGlobalLine, RiHourglassLine } from "react-icons/ri";

function DoubleBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 px-5 lg:px-20 place-content-center pt-10  lg:pt-20">
      <div className="bg-neutral-950 lg:col-span-4 p-10 rounded-xl flex justify-start items-center">
        <div className="flex flex-col">
          <h1 className="lg:text-6xl text-3xl text-white font-bold uppercase outline-white">Discover the latest trends and timeless styles, curated just for you.</h1>
          <span className="w-full h-2 bg-transparent border-x-zinc-300 border my-10 rounded-xl"></span>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="p-1 rounded-full bg-white">
                  <RiGlobalLine size={32} color="black" />
                </div>
                <h1 className="text-2xl text-white uppercase">mission</h1>
              </div>
              <p className="text-neutral-400 text-justify">We`re on mission to empower creative independence in a commercial world and incredible.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="p-1 rounded-full bg-white">
                  <RiHourglassLine size={32} color="black" />
                </div>
                <h1 className="text-2xl text-white uppercase">sustanibility</h1>
              </div>
              <p className="text-neutral-400 text-justify">We`re challenging conventional retail, putting and end to dead stock, unconventional wanted and more funtastic.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 bg-[url('/src/assets/grid-2-3.jpg')] bg-cover bg-top lg:bg-center p-32 rounded-xl grayscale "></div>
    </div>
  );
}

export default DoubleBanner;
