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
  const sizes = ["S", "M", "L", "XL", "XXL"]; // Array of sizes
  const colors = ["BLACK", "BEIGE", "GRAY"]; // Array of colors

  const getRandomSize = () => {
    return sizes[Math.floor(Math.random() * sizes.length)];
  };
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

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
                  <div key={product.id} className="flex flex-row min-[500px]:flex-row min-[500px]:items-center gap-5  border-b border-gray-200 group">
                    <div className="w-full lg:max-w-[100px]">
                      <img src={product.image} alt="product" className="w-[70%] rounded-xl overflow-hidden" />
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-3">
                        <div className="flex flex-col text-start">
                          <p className="text-sm text-start text-gray-600 transition-all duration-300 ">{product.type}</p>
                          <h6 className="text-base font-semibold  text-black">{product.productName}</h6>
                          <h6 className="text-base text-black">
                            {getRandomColor()}/{getRandomSize()}
                          </h6>
                          <p className="text-sm text-start text-[#0d0d0d] transition-all duration-300 ">
                            $ {product.price} ({item.quantity})
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-start text-[#0d0d0d] transition-all duration-300 ">${item.quantity * product.price}</p>
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
