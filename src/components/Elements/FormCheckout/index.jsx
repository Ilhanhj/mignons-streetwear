import mignonsLogo from "/src/assets/logo-login.jpg";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Input from "../Input";

import { Link } from "react-router-dom";
import Button from "../Button";
import { Fragment } from "react";
import TimelineCheckout from "../../Fragments/TimelineCheckout";

function FormCheckout() {
  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[55%] h-full lg:h-full p-5 lg:p-10 bg-white order-2 lg:order-1">
        <div className="flex justify-center">
          <img src={mignonsLogo} alt="" className="w-[15%]  object-cover" />
        </div>
        <TimelineCheckout />
        <div className="lg:py-5 space-y-3 lg:px-12 text-start pt-5">
          <h1 className="text-2xl font-bold text-start">Shipping Progress</h1>
          <h1 className="text-sm text-start">Please provide the relevant information for your order</h1>
        </div>{" "}
        <div className="flex  lg:px-10">
          <form action="" className="flex flex-col gap-3 w-full">
            <h1 className="font-thin text-lg lg:ms-2">Contact</h1>
            <Input type="text" placeholder="Email" id="email" name="username" />
            <h1 className="font-thin text-lg lg:ms-2">Shipping Address</h1>
            <Input type="text" placeholder="Country/Region" id="country" name="username" />
            <div className="grid grid-cols-2 gap-3">
              <Input type="text" placeholder="Firstname" id="firstname" name="firstname" />
              <Input type="text" placeholder="Lastname" id="lastname" name="lastname" />
            </div>
            <Input type="text" placeholder="Company (Optional)" id="company" name="company" />
            <Input type="text" placeholder="Address" id="address" name="address" />
            <div className="grid lg:grid-cols-3 gap-3">
              <Input type="text" placeholder="City" id="city" name="city" />
              <select id="state" name="state" className="p-3 rounded-xl border text-neutral-400 bg-neutral-200 border-neutral-400 ">
                <option value="ohio">Ohio</option>
                <option value="delaware">Delaware</option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="illinois">Illinois</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="tennessee">Tennessee</option>
                <option value="kentucky">Kentucky</option>
                <option value="north carolina">North Carolina</option>
              </select>
              <Input type="text" placeholder="ZIP Code" id="zipcode" name="zipcode" />
            </div>
            <Input type="text" placeholder="Phone" id="phone" name="phone" />
            <hr className="border-neutral-400 my-5" />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <RiArrowDropLeftLine size={30} color="black" />
                <Link to="/">
                  <h1 className="text-neutral-400 hover:text-neutral-900">Return to cart</h1>
                </Link>
              </div>
              <Link onClick={() => window.scrollTo(0, 0)} to={`/Payment`}>
                <Button text="text-white" bg="bg-[#0d0d0d]" fill="Continue to Payment" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default FormCheckout;
