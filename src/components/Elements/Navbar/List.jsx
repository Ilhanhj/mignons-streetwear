import { Link, useLocation } from "react-router-dom";

function List() {
  // Panggil useLocation untuk mendapatkan objek lokasi saat ini
  const location = useLocation();

  return (
    <div className="hidden gap-5 lg:flex lg:items-center">
      <div
        className={`text-md uppercase transition-all duration-75 ${
          // Periksa apakah pathname cocok dengan "/mignons"
          location.pathname === "/mignons"
            ? "text-[#0d0d0d] font-bold" // Jika cocok, gunakan warna gelap
            : "text-neutral-500 hover:text-[#0d0d0d]" // Jika tidak cocok, gunakan warna normal dengan efek hover
        }`}
      >
        <Link onClick={() => window.scrollTo(0, 0)} to={`/mignons`}>
          MIGNONS
        </Link>
      </div>
      <div className={`text-md uppercase transition-all duration-75 ${location.pathname === "/athletics" ? "text-[#0d0d0d] font-bold" : "text-neutral-500 hover:text-[#0d0d0d]"}`}>
        <Link onClick={() => window.scrollTo(0, 0)} to={`/athletics`}>
          ATHLETICS
        </Link>
      </div>
      <div className={`text-md uppercase transition-all duration-75 ${location.pathname === "/essentials" ? "text-[#0d0d0d] font-bold" : "text-neutral-500 hover:text-[#0d0d0d]"}`}>
        <Link onClick={() => window.scrollTo(0, 0)} to={`/essentials`}>
          ESSENTIALS
        </Link>
      </div>
    </div>
  );
}

export default List;
