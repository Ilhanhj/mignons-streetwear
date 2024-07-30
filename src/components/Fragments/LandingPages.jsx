/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Elements/Navbar";
import Card from "../Elements/Card";
import Hero from "../Elements/Hero";
import { useTotalPriceDispatch } from "../../context/TotalPriceContext";
import Footer from "../Elements/Footer";
import { products } from "../../AllData";
import DoubleBanner from "../Elements/DoubleBanner";
import NavbarProduct from "../Elements/NavbarProduct";

function LandingPages() {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useTotalPriceDispatch();

  const filteredProducts = products.filter((product) => product.type !== "ACCESSORIES" && product.type !== "RUNWAY" && product.type !== "FOOTWEAR").slice(0, 12);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="w-full z-10 font-urbanist">
        <div className="w-full pt-24">
          <Hero />
        </div>
        <div className=" flex justify-between items-center pt-5 px-5 lg:px-20 lg:pt-10">
          <h1 className="text-2xl lg:text-4xl font-[#0d0d0d] font-bold uppercase">
            shop our <span className="outline-black">best collection</span>
          </h1>
        </div>
        <NavbarProduct />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 font-urbanist px-5 lg:px-20 lg:pb-32 pb-10 ">
          {filteredProducts.map((product) => {
            {
              return <Card key={product.id} productName={product.productName} type={product.type} price={product.price} image={product.image} id={product.id} />;
            }
          })}
        </div>
        <DoubleBanner />
      </div>
      <Footer />
    </Fragment>
  );
}

export default LandingPages;
