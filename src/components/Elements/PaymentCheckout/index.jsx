import mignonsLogo from "/src/assets/logo-login.jpg";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Input from "../Input";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Fragment, useState } from "react";
import paypal from "../../../assets/payment-method/paypal.png";
import mastercard from "../../../assets/payment-method/mastercard.png";
import visa from "../../../assets/payment-method/visa.png";
import discover from "../../../assets/payment-method/discover.png";
import TimelineCheckout from "../../Fragments/TimelineCheckout";

function PaymentCheckout() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-[55%] h-full lg:h-full p-5 lg:p-10 bg-white order-2 lg:order-1">
        <div className="flex justify-center">
          <img src={mignonsLogo} alt="" className="w-[15%]  object-cover" />
        </div>
        <TimelineCheckout />
        <div className="lg:py-5 space-y-3 lg:px-12 text-start pt-5">
          <h1 className="text-2xl font-bold text-start">Payment Method</h1>
          <h1 className="text-sm text-start">Please provide the payment method for your order</h1>
        </div>
        <div className="flex py-5 lg:px-10">
          <form action="" className="flex flex-col lg:py-5 w-full">
            <div className="flex items-center">
              <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" checked={paymentMethod === "creditCard"} onChange={() => setPaymentMethod("creditCard")} className="mr-2" />
              <label htmlFor="creditCard" className="flex items-center cursor-pointer lg:mr-10">
                Credit Card
              </label>
              <img src={visa} alt="Credit Card Icons" className="w-14 mr-10" />
              <img src={mastercard} alt="Credit Card Icons" className="w-12 mr-10" />
              <img src={discover} alt="Credit Card Icons" className="w-24 mr-10" />
            </div>
            <div className="flex items-center">
              <input type="radio" id="paypal" name="paymentMethod" value="paypal" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} className="mr-2" />
              <label htmlFor="paypal" className="flex items-center cursor-pointer lg:mr-20">
                {" "}
                PayPal
              </label>
              <img src={paypal} alt=" Paypal Icons" className="w-20" />
            </div>
            {paymentMethod === "creditCard" && (
              <>
                <h1 className="font-thin text-lg lg:ms-2 lg:my-2">Card Number</h1>
                <Input type="number" placeholder="Enter your Card Number" id="CardNumber" name="CardNumber" />
                <div className="grid grid-cols-2 gap-3">
                  <h1 className="font-thin text-lg lg:ms-2 lg:my-2">Expiration Date</h1>
                  <h1 className="font-thin text-lg lg:ms-2 lg:my-2">CVV</h1>
                  <Input type="date" placeholder="MM/YY" id="MM/YY" name="MM/YY" />
                  <Input type="number" placeholder="XXX" id="XXX" name="XXX" />
                </div>
                <h1 className="font-thin text-lg lg:ms-2 lg:my-2">Name on Card</h1>
                <Input type="number" placeholder="Enter your Card Number" id="CardNumber" name="CardNumber" />
                <hr className="border-neutral-400 my-5" />
              </>
            )}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <RiArrowDropLeftLine size={30} color="black" />
                <Link to="/">
                  <h1 className="text-neutral-400 hover:text-neutral-900">Return to cart</h1>
                </Link>
              </div>
              <Link onClick={() => window.scrollTo(0, 0)} to={`/Confirmation`}>
                <Button text="text-white" bg="bg-[#0d0d0d]" fill="Continue to Confirmation" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default PaymentCheckout;
