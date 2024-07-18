/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useDispatch } from "react-redux";
import { addToOrder, deleteToOrder } from "../../../redux/slices/orderSlice";
// import { addToCart, deleteFromCart } from "../../../redux/slices/cartSlice";

const CartCard = ({ productName, price, id, image, type }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
        <div className="w-full md:max-w-[100px]">
          <img src={image} alt="perfume bottle image" className="mx-auto"></img>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col max-[500px]:items-center gap-3">
              <h6 className="text-base font-semibold leading-7 text-black">{productName}</h6>
              <p className="text-lg font-bold leading-8 text-start text-gray-600 transition-all duration-300 group-hover:text-neutral-600">$ {price}</p>
              <p className="text-lg font-bold leading-8 text-start text-gray-600 transition-all duration-300 group-hover:text-neutral-600">{type}</p>
            </div>
          </div>
          <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
            <div className="flex items-center h-full">
              {/* Kurang */}
              <button
                className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                onClick={() => dispatch(deleteToOrder({ id, quantity: 1 }))}
              >
                <svg className="transition-all duration-500 stroke-gray-900 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <h1 className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent" placeholder="1">
                1
              </h1>
              {/* Tambah */}
              <button
                className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                onClick={() => dispatch(addToOrder({ id, quantity: 1 }))}
              >
                <svg className="transition-all duration-500 stroke-gray-900 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
