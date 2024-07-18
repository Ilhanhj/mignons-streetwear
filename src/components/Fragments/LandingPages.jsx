/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Elements/Navbar";
import Card from "../Elements/Card";
import Hero from "../Elements/Hero";
import getProducts from "../../service/product.service";
import { useTotalPriceDispatch } from "../../context/TotalPriceContext";
import Footer from "../Elements/Footer";
import { RiGlobalLine } from "react-icons/ri";
import { RiHourglassLine } from "react-icons/ri";
import Icon from "../Elements/NavbarProduct/Icon";
import { products } from "../../AllData";
import { Toaster } from "react-hot-toast";

function LandingPages() {
  const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useTotalPriceDispatch();
  const filteredProducts = products.filter((product) => product.type !== "ACCESSORIES" && product.type !== "RUNWAY" && product.type !== "FOOTWEAR").slice(0, 12);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // useEffect(() => {
  //   getProducts((data) => {
  //     setProducts(data);
  //   });
  // });

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
          <Icon />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-16 font-urbanist px-5 lg:px-20 lg:py-20 ">
          {filteredProducts.map((product) => {
            {
              return <Card key={product.id} productName={product.productName} type={product.type} price={product.price} image={product.image} id={product.id} />;
            }
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 px-5 lg:px-20 place-content-center">
          <div className="bg-neutral-950 lg:col-span-4 p-10 rounded-xl flex justify-start items-center">
            <div className="flex flex-col">
              <h1 className="lg:text-6xl text-3xl text-white font-bold uppercase outline-white">Discover the latest trends and timeless styles, curated just for you.</h1>
              <span className="w-full h-2 bg-transparent border-x-zinc-300 border my-10 rounded-xl"></span>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="p-1 rounded-full bg-white">
                      <RiGlobalLine size={32} color="black" />
                    </div>
                    <h1 className="text-2xl text-white uppercase">mission</h1>
                  </div>
                  <p className="text-neutral-400 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nulla sequi recusandae aspernatur earum fugit fugiat esse, vitae quibusdam maxime.</p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="p-1 rounded-full bg-white">
                      <RiHourglassLine size={32} color="black" />
                    </div>
                    <h1 className="text-2xl text-white uppercase">sustanibility</h1>
                  </div>
                  <p className="text-neutral-400 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nulla sequi recusandae aspernatur earum fugit fugiat esse, vitae quibusdam maxime.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:p-32 bg-[url('/src/assets/card-sale.webp')] bg-cover bg-top lg:bg-center p-32 rounded-xl grayscale "></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default LandingPages;
