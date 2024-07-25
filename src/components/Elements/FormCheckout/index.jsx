import mignonsLogo from "/src/assets/logo-login.jpg";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Input from "../Input";

import { Link } from "react-router-dom";
import Button from "../Button";
import { Fragment } from "react";

function FormCheckout() {
  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[55%] h-full lg:h-full p-5 lg:p-10 bg-white order-2 lg:order-1">
        <div className="flex justify-center">
          <img src={mignonsLogo} alt="" className="w-[15%]  object-cover" />
        </div>
        <div className="flex justify-center py-4">
          <a href="/" className="flex gap-2 text-neutral-600 hover:text-neutral-900 items-center">
            Cart
            <RiArrowDropRightLine size={30} color="black" />
          </a>
          <a href="/" className="flex gap-2 text-neutral-600 hover:text-neutral-900 items-center">
            Information
            <RiArrowDropRightLine size={30} color="black" />
          </a>
          <a href="/" className="flex gap-2 text-neutral-600 hover:text-neutral-900 items-center">
            Shipping
            <RiArrowDropRightLine size={30} color="black" />
          </a>
          <a href="/" className="flex gap-2 text-neutral-600 hover:text-neutral-900 items-center">
            Payment
          </a>
        </div>
        <div className="flex lg:pt-10 lg:px-10">
          <form action="" className="flex flex-col gap-3 w-full">
            <h1 className="font-bold text-xl lg:ms-2">Contact</h1>
            <Input type="text" placeholder="Email" id="email" name="username" />
            <h1 className="font-bold text-xl lg:ms-2">Shipping Address</h1>
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
                  <h1 className="text-neutral-600 hover:text-neutral-900">Return to cart</h1>
                </Link>
              </div>
              <div className="flex w-1/2">
                <Button text="text-white" bg="bg-[#0d0d0d]" fill="Continue to shipping" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default FormCheckout;
