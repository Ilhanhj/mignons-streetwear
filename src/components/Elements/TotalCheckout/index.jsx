/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useSelector } from "react-redux";
import { products } from "../../../AllData";
import { useTotalPrice } from "../../../context/TotalPriceContext";

function TotalCheckout() {
  const order = useSelector((store) => store.order.items);
  const [totalOrder, setTotalOrder] = useState(0);
  const { total } = useTotalPrice();
  const [totalPrice, setTotalPrice] = useState(0); // State untuk menyimpan total harga

  useEffect(() => {
    const newTotalOrder = order.reduce((acc, item) => acc + item.quantity, 0);
    setTotalOrder(newTotalOrder);

    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

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
    <Fragment>
      <div className="flex flex-col w-full lg:w-[45%] h-full lg:h-full lg:flex lg:fixed top-0 right-0  p-5 lg:p-10 pt-14 bg-neutral-200 space-y-6 order-1 lg:order-2 overflow-auto">
        {products.length > 0 &&
          order.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              product && (
                <>
                  <div className="flex w-full">
                    <div key={product.id} className="flex lg:w-14 lg:h-14 relative ">
                      <span className="lg:text-xs lg:absolute absolute flex justify-center items-center lg:w-6 w-7 lg:h-6 h-7 p-1 lg:ms-16 lg:mb-10 ms-[5.5rem]  text-white bg-red-500 rounded-full lg:-right-2 lg:-top-2">
                        {item.quantity}
                      </span>
                      <img src={product.image} alt="" className="w-[30%] lg:w-full lg:object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col ml-4	">
                      <h1 className="text-neutral-500 text-sm">{product.type}</h1>
                      <h1 className=" text-[#0d0d0d] text-sm font-bold">{product.productName}</h1>
                      <h1 className="text-neutral-500 text-sm">Black / XL</h1>
                      <h1 className="text-[#0d0d0d] text-lg font-bold absolute lg:right-10">$ {product.price}</h1>
                    </div>
                  </div>
                  <hr className="border-neutral-500 my-5" />
                </>
              )
            );
          })}
        <div className="flex w-full gap-3">
          <div className="w-[80%]">
            <Input type="text" placeholder="Discount code" id="discount" name="discount" className="w-full p-2 border border-neutral-300 rounded-lg" />
          </div>
          <div className="w-[20%]">
            <Button text="text-dark" bg="bg-neutral-300 hover:bg-neutral-400 transition-colors duration-200" fill="Apply" className="w-full p-2 rounded-lg" />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-[#0d0d0d] text-sm font-semibold">Subtotal</h1>
          <h1 className="text-[#0d0d0d] text-sm">$ {totalPrice}</h1>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-[#0d0d0d] text-sm font-semibold">Shipping</h1>
          <h1 className="text-[#0d0d0d] text-sm cursor-pointer underline">Enter shipping address</h1>
        </div>
        <div className="flex justify-between w-full pb-10 lg:pb-0">
          <h1 className="text-[#0d0d0d] text-lg font-bold">Total</h1>
          <h1 className="text-[#0d0d0d] text-lg font-bold">$ {totalPrice}</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default TotalCheckout;
