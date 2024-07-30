/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToOrder, deleteToOrder } from "../../redux/slices/orderSlice";
import { products } from "../../AllData";
import { Link } from "react-router-dom";
import ButtonCheckout from "../Elements/ButtonCheckout";

function CartWithItems({ openTrolly }) {
  const order = useSelector((store) => store.order.items);
  const [trolly, setTrolly] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL"]; // Array of sizes
  const colors = ["BLACK", "BEIGE", "GRAY"]; // Array of colors
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0 && order.length > 0) {
      const sum = order.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return product ? acc + product.price * item.quantity : acc;
      }, 0);

      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });

      localStorage.setItem("order", JSON.stringify(order));
    }
  }, [order, products, dispatch]);

  const getRandomSize = () => {
    return sizes[Math.floor(Math.random() * sizes.length)];
  };
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <div className="flex flex-col">
        {products.length > 0 &&
          order.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              product && (
                <div key={product.id} className="flex flex-row min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
                  <div className="w-full md:max-w-[100px]" onClick={openTrolly}>
                    <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${product.id}`}>
                      <img src={product.image} alt="product" className="mx-auto w-[70%] rounded-xl overflow-hidden" />
                    </Link>
                  </div>
                  <div className="grid w-full grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center" onClick={openTrolly}>
                        <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${product.id}`}>
                          <p className="text-sm  text-start text-gray-600 transition-all duration-300 ">{product.type}</p>
                          <h6 className="text-sm font-semibold  text-black">{product.productName}</h6>
                          <p className="text-sm  text-start text-gray-600 transition-all duration-300 ">
                            {" "}
                            {getRandomColor()}/{getRandomSize()}
                          </p>
                          <p className="text-sm text-start font-bold text-[#0d0d0d] transition-all duration-300 ">
                            $ {item.quantity * product.price} ({item.quantity})
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-end  max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full ">
                        {/* Decrease Quantity */}
                        <button
                          className="group rounded-l-xl px-2 py-[10px] border  flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          onClick={() => dispatch(deleteToOrder({ id: item.id, quantity: 1 }))}
                        >
                          <svg className="transition-all duration-500 stroke-gray-900 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                        <h1 className="  outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[7px] text-center bg-transparent">{item.quantity}</h1>
                        {/* Increase Quantity */}
                        <button
                          className="group rounded-r-xl px-2 py-[10px] border  flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          onClick={() => dispatch(addToOrder({ id: item.id, quantity: 1 }))}
                        >
                          <svg className="transition-all duration-500 stroke-gray-900 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </div>
      <ButtonCheckout openTrolly={openTrolly} />
    </>
  );
}

export default CartWithItems;
