import { useRef, useState, useEffect } from "react";
import Icon from "./Icon";
import List from "./List";
import Logo from "./Logo";
import { Divide as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "../../Fragments/EmptyCart";
import CartWithItems from "../../Fragments/CartWithItems";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [trolly, setTrolly] = useState(false);
  const ulRef = useRef(null);
  const location = useLocation();

  const order = useSelector((store) => store.order.items);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.style.transform = isOpen ? "scale(1)" : "scale(0)";
      ulRef.current.style.transition = "transform 0.3s ease-in-out";
    }
  }, [isOpen]);

  function openTrolly() {
    setTrolly(!trolly);
  }

  return (
    <>
      <div className="w-full font-poppins fixed z-50 lg:block hidden font-urbanist">
        <div className=" lg:flex items-center justify-between p-1 lg:px-20 bg-white text-[#0d0d0d] ">
          <Logo />
          <List />
          {/* overlay */}
          <button className={` z-50 p-5 bg-white text-[#0d0d0d] ${trolly ? "flex-none" : "flex"}`} onClick={openTrolly}>
            <Icon />
          </button>
        </div>
      </div>
      {/* Cart */}
      <div className="w-full">
        <div className={` lg:w-full bg-[#0d0d0d] bg-opacity-80 lg:top-0 top-16 p-10 lg:fixed fixed z-[100]  h-full transition-all duration-300 ${trolly ? "left-0 top-0" : "-right-[200rem]"}`} onClick={openTrolly}></div>
        <div className={`lg:w-[40%] w-full bg-white lg:top-0 top-0 px-5 lg:fixed fixed z-[100]  h-full overflow-y-auto transition-all duration-100 ${trolly ? "right-0 top-0" : "-right-[100rem]"}`}>
          <div className="flex justify-between pt-10">
            <h1 className="uppercase text-[#0d0d0d] text-xl font-bold">Your Shopping Cart </h1>
            <button className={` z-50  bg-white text-[#0d0d0d] ${trolly ? "flex-none" : "flex"}`} onClick={openTrolly}>
              <RiCloseLargeFill size={28} />
            </button>
          </div>

          {order.length < 1 ? <EmptyCart openTrolly={openTrolly} /> : <CartWithItems openTrolly={openTrolly} />}
        </div>
      </div>

      {/* Hamburger */}
      <div className="lg:hidden flex items-center justify-between z-50 fixed w-full px-5 lg:px-10 bg-white text-[#0d0d0d] font-urbanist">
        <Logo />
        <div className="flex items-center gap-2">
          {/* overlay */}
          <button className={` z-50 p-5 bg-white text-[#0d0d0d] ${trolly ? "flex-none" : "flex"}`} onClick={openTrolly}>
            <Icon />
          </button>{" "}
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className="scale-0 origin-top-right bg-white text-[#0d0d0d] p-5 -pt-24 h-screen w-full fixed z-50" ref={ulRef}>
        <div className="flex justify-end">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="flex flex-col gap-5 text-center items-center pt-48">
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
      </div>
    </>
  );
}

export default Navbar;
