/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "../Elements/Button";
import ConfirmationImage from "../../../src/assets/modal-image.png";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmationModal({ openTrolly }) {
  const [trolly, setTrolly] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:min-[500px]:flex-col min-[500px]:items-center gap-2 ">
        <div className="absolute top-20 lg:top-0 right-0 p-5 lg:absolute text-center space-y-2 lg:px-5 ">
          <h1 className="font-semibold uppercase text-3xl lg:text-5xl text-[#0d0d0d]">CONGRATULATIONS</h1>
          <p className="font-normal text-xl lg:text-3xl text-[#0d0d0d]">Your Purchase is complete</p>
          <p className="font-thin text-sm lg:text-md text-neutral-500 px-5  lg:px-10">Thank you for choosing our product. We hope you enjoy and fullest and look forward to serving you again in the future.</p>
        </div>
        <div className="w-full px-3 flex flex-col gap-2 pt-20 lg:pt-0">
          <img src={ConfirmationImage} alt="" className="w-full lg:w-full " />
          <Link onClick={() => window.scrollTo(0, 0)} to={`/`}>
            <Button bg="bg-[#0d0d0d]" text="text-white" fill="Back to Homepage" type="button" hover="hover:opacity-100" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
