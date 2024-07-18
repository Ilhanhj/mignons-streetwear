/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Fragment, useEffect, useState } from "react";
import CartCard from "../Elements/CartCard";
import getProducts from "../../service/product.service";
import CartTable from "../Elements/CartTable";
import Footer from "../Elements/Footer";

const ShoppingCartTotal = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <Fragment>
      <div className="grid grid-cols-12 font-urbanist">
        <div className="w-full col-span-12 pb-8 xl:col-span-8 lg:pr-8 pt-14 lg:py-24 max-xl:max-w-3xl max-xl:mx-auto">
          <div className="flex items-center justify-between pb-8 border-b border-gray-300">
            <h2 className="text-3xl font-bold leading-10 text-black font-manrope">Shopping Cart</h2>
          </div>
          <div className="grid grid-cols-12 pb-6 mt-8 border-b border-gray-200 max-md:hidden">
            <div className="col-span-12 md:col-span-7">
              <p className="text-lg font-normal leading-8 text-gray-400">Product Details</p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="grid grid-cols-5">
                <div className="col-span-3">
                  <p className="text-lg font-normal leading-8 text-center text-gray-400">Quantity</p>
                </div>
                <div className="col-span-2">
                  <p className="text-lg font-normal leading-8 text-center text-gray-400">Total</p>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Products */}

          {products.map((product) => {
            return <CartCard key={product.id} title={product.title} price={product.price.toLocaleString("id-ID", { style: "currency", currency: "USD" })} image={product.image} id={product.id} />;
          })}
        </div>
        {/* Cart Total Price and Quantity */}
        <CartTable products={products} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShoppingCartTotal;
