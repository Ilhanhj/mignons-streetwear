import { Link } from "react-router-dom";

function List() {
  return (
    <div className=" gap-4 lg:flex pt-10">
      <Link
        to={`/`}
        className={`text-md uppercase transition duration-75 text-dark p-3 rounded-full border font-bold border-[#4e2c2c] hover:bg-[#0d0d0d] hover:text-white ${
          location.pathname === "/" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
        }`}
      >
        Best Collection
      </Link>
      <Link
        to={`/Tops`}
        className={`text-md uppercase transition duration-75 text-dark p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
          location.pathname === "/Tops" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
        }`}
      >
        Tops
      </Link>
      <Link
        to={`/Bottoms`}
        className={`text-md uppercase transition duration-75 text-dark p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
          location.pathname === "/Bottoms" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
        }`}
      >
        Bottoms
      </Link>
      <Link
        to={`/Outerwears`}
        className={`text-md uppercase transition duration-75 text-dark p-3 rounded-full border font-bold border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white ${
          location.pathname === "/Outerwears" ? "text-white bg-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"
        }`}
      >
        Outerwears
      </Link>
    </div>
  );
}

export default List;
