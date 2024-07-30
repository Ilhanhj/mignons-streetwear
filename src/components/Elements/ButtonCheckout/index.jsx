/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../Button";
import { useTotalPrice } from "../../../context/TotalPriceContext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../../../AllData";

function ButtonCheckout({ openTrolly }) {
  const { total } = useTotalPrice();
  const [totalPrice, setTotalPrice] = useState(0); // State untuk menyimpan total harga
  const order = useSelector((store) => store.order.items);
  const [trolly, setTrolly] = useState(false);

  useEffect(() => {
    if (products.length > 0 && order.length > 0) {
      const sum = order.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return product ? acc + product.price * item.quantity : acc;
      }, 0);

      setTotalPrice(sum); // Set total harga ke state lokal

      localStorage.setItem("order", JSON.stringify(order));
    }
  }, [order, products]);

  return (
    <div className="lg:bottom-0 sticky min-[500px]:flex-row min-[500px]:items-center gap-5  py-20 lg:py-10 border-b border-gray-200 bg-white">
      <h1 className="pb-3 font-semibold">Total Price</h1>
      <div className="flex justify-between">
        <h1 className="">Total</h1>
        <h1 className="font-bold text-lg">$ {totalPrice}</h1>
      </div>
      <div className="flex w-full gap-5 pt-5">
        <div className={`w-1/2 flex justify-center ${trolly ? "flex-none" : "flex"} `} onClick={openTrolly}>
          <Button text="text-[#0d0d0d]" bg="bg-transparent" fill="Continue Shopping" />
        </div>
        <div className="w-1/2">
          <Link onClick={() => window.scrollTo(0, 0)} to={`/Shipping`}>
            <Button bg="bg-[#0d0d0d]" text="text-white" fill="Checkout" type="button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ButtonCheckout;
