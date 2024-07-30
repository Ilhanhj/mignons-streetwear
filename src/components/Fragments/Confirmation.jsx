import { Fragment, useState } from "react";
import ConfirmationCheckout from "../Elements/ConfirmationCheckout";
import TotalCheckout from "../Elements/TotalCheckout";
import ConfirmationModal from "./ConfirmationModal";
// import Input from "../Elements/Input";
// import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import Button from "../Elements/Button";
// import checkoutImages from "../../assets/athletics-items/row-6-2.webp";
// import mignonsLogo from "/src/assets/logo-login.jpg";

function Confirmation() {
  const [trolly, setTrolly] = useState(false);

  function openTrolly() {
    setTrolly(!trolly);
  }

  return (
    <Fragment>
      <div className="w-full ">
        <div className={`lg:w-full w-full bg-[#0d0d0d] bg-opacity-80 lg:fixed fixed z-[100] h-full transition-all duration-300 flex justify-center ${trolly ? "left-0 top-0" : "-right-[200rem]"}`} onClick={openTrolly}>
          <div
            className={`flex flex-col justify-center lg:w-[50%] w-[90%] lg:mt-10  rounded-xl lg:fixed z-[100] transition-all duration-100 h-[70%] lg:h-[80%] mt-20 lg:m-0 overflow-hidden  ${
              trolly ? "bottom-0 top-5" : "-top-[100rem]"
            } bg-white`}
          >
            <ConfirmationModal openTrolly={openTrolly} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex">
        <ConfirmationCheckout openTrolly={openTrolly} />
        <TotalCheckout />
      </div>
    </Fragment>
  );
}

export default Confirmation;

//
//
//
