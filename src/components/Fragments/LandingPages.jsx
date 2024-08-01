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
      <Hero />
      <NavbarProduct />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 font-urbanist px-5 lg:px-20 ">
        {filteredProducts.map((product) => {
          {
            return <Card key={product.id} productName={product.productName} type={product.type} price={product.price} image={product.image} id={product.id} />;
          }
        })}
      </div>
      <DoubleBanner />
      <Footer />
    </Fragment>
  );
}

export default LandingPages;
