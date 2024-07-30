/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import mignonsLogo from "/src/assets/logo-login.jpg";
import { Fragment, useState } from "react";
import TimelineCheckout from "../../Fragments/TimelineCheckout";
import { Link } from "react-router-dom";
import { RiArrowDropLeftLine } from "react-icons/ri";

function ConfirmationCheckout({ openTrolly }) {
  const [trolly, setTrolly] = useState(false);

  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[55%] h-full lg:h-full p-5 lg:p-10 bg-white order-2 lg:order-1">
        <div className="flex justify-center">
          <img src={mignonsLogo} alt="" className="w-[15%]  object-cover" />
        </div>
        <TimelineCheckout />
        <div className="lg:py-5 space-y-3 lg:px-12 text-start">
          <h1 className="text-2xl font-bold text-start">Review and Confirm</h1>
          <h1 className="text-sm text-start">Please double check your information regarding your order</h1>
        </div>
        <hr className="border-neutral-400 my-3 lg:mx-12" />
        <div className="lg:py-5 space-y-3 lg:px-12 text-start">
          <h1 className="text-2xl font-bold text-start">Shipping</h1>
          <h1 className="text-sm text-start text-neutral-400">Shipping to : Nama / Road / City / Nation / 00293 / 08123456780</h1>
          <h1 className="text-sm text-start text-neutral-400">Delivery : Standard Shipping for VI and PR / Delivery Sunday, September 2</h1>
        </div>
        <hr className="border-neutral-400 my-3 lg:mx-12" />
        <div className="lg:py-5 space-y-3 lg:px-12 text-start">
          <h1 className="text-2xl font-bold text-start">Payment</h1>
          <h1 className="text-sm text-start text-neutral-400">Payment Method : Visa / 09877655172 / 03 / 12 / 999 / Nama</h1>
        </div>
        <hr className="border-neutral-400 my-3 lg:mx-12" />
        <div className="lg:py-5 space-y-3 lg:px-10 text-start">
          <h1 className="text-2xl font-bold text-start">Review and Confirm</h1>
          <div className="flex items-start ">
            <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" className="mr-2 lg:mt-2" />
            <label htmlFor="creditCard" className=" text-md font-semibold flex items-center cursor-pointer lg:mr-10">
              Yes, I`d like to receive mignons emails & communications to hear about news products, promotions and more
            </label>
          </div>
          <label htmlFor="creditCard" className=" text-md font-semibold flex items-center cursor-pointer pb-5 ms-5 lg:ms-5 lg:pb-10">
            By Clicking `Order Now` you agree to the mignons Privacy Policy and Terms of Service.
          </label>{" "}
          <hr className="border-neutral-400 py-3 lg:mx-1" />
          <Link onClick={() => window.scrollTo(0, 0)} to={`/Confirmation`}>
            <button className={`flex justify-center  w-full p-3 lg:p-4 text-sm lg:text-md font-bold rounded-xl border-neutral-300 border hover:opacity-75 bg-[#0d0d0d] text-white ${trolly ? "flex-none" : "flex"}`} onClick={openTrolly}>
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ConfirmationCheckout;
