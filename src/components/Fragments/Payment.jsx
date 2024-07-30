import { Fragment } from "react";
import PaymentCheckout from "../Elements/PaymentCheckout";
import TotalCheckout from "../Elements/TotalCheckout";
// import Input from "../Elements/Input";
// import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import Button from "../Elements/Button";
// import checkoutImages from "../../assets/athletics-items/row-6-2.webp";
// import mignonsLogo from "/src/assets/logo-login.jpg";

function Payment() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex">
        <PaymentCheckout />
        <TotalCheckout />
      </div>
    </Fragment>
  );
}

export default Payment;
