import { Fragment } from "react";
import FormCheckout from "../Elements/FormCheckout";
import TotalCheckout from "../Elements/TotalCheckout";
// import Input from "../Elements/Input";
// import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import Button from "../Elements/Button";
// import checkoutImages from "../../assets/athletics-items/row-6-2.webp";
// import mignonsLogo from "/src/assets/logo-login.jpg";

function Checkout() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex">
        <FormCheckout />
        <TotalCheckout />
      </div>
    </Fragment>
  );
}

export default Checkout;
