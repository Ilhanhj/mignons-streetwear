import { Link } from "react-router-dom";

function List() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-4 gap-1 lg:gap-3 pt-10 text-center pe-6 lg:px-0 ">
      <div className="grid  ">
        <Link
          to={`/`}
          className={` text-xs lg:text-md uppercase transition duration-75 text-dark p-2 lg:p-3 rounded-full border font-bold border-[#4e2c2c] hover:bg-[#0d0d0d] hover:text-white ${
            location.pathname === "/" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
          }`}
        >
          The Best
        </Link>
      </div>
      <div className="grid  ">
        <Link
          to={`/Tops`}
          className={` text-xs lg:text-md uppercase transition duration-75 text-dark p-2 lg:p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
            location.pathname === "/Tops" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
          }`}
        >
          Tops
        </Link>
      </div>

      <div className="grid  ">
        <Link
          to={`/Bottoms`}
          className={` text-xs lg:text-md uppercase transition duration-75 text-dark p-2 lg:p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
            location.pathname === "/Bottoms" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
          }`}
        >
          Bottoms
        </Link>
      </div>

      <div className="grid  ">
        <Link
          to={`/Outerwears`}
          className={` text-xs lg:text-md uppercase transition duration-75 text-dark p-2 lg:p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
            location.pathname === "/Outerwears" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
          }`}
        >
          Outerwears
        </Link>
      </div>
    </div>
  );
}

export default List;
