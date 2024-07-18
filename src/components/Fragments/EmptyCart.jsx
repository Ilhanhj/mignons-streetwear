/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import emptyCartImage from "../../assets/empty-cart.jpg";
import Button from "../Elements/Button";

function EmptyCart({ openTrolly }) {
  const [trolly, setTrolly] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className=" flex flex-col justify-center space-y-5">
        <img src={emptyCartImage} alt="" className="w-full lg:w-[60%] flex lg:ms-[6.5rem]" />
        <h1 className="uppercase text-[#0d0d0d] text-sm text-center lg:pt-10">YOU DON`T HAVE ANY ITEMS IN YOUR CART.</h1>
        <div className={`w-full flex justify-center ${trolly ? "flex-none" : "flex"} `} onClick={openTrolly}>
          <Button text="text-white" bg="bg-[#0d0d0d]" fill="Shop Now" />
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
