/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useMemo } from "react";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import Image from "../Elements/Image";
import Card from "../Elements/Card";
import { useParams } from "react-router-dom";
import { products } from "../../AllData";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/slices/orderSlice";
import { RiHeartLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import Stars from "../Elements/Stars";
import Colors from "../Elements/Colors";
import Sizes from "../Elements/Sizes";
import ProductDesc from "../Elements/ProductDesc";

const Product = ({ otherProduct }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const dispatch = useDispatch();

  // const notify = () => toast.success("Item has been added to the cart");

  function handleAddToOrder() {
    dispatch(
      addToOrder({
        id: parseInt(id),
        quantity: 1,
      })
    );
  }

  const shuffledProducts = useMemo(() => {
    let shuffled = [...otherProduct].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [otherProduct]);

  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:place-content-center gap-5 py-24 font-urbanist px-5 lg:px-20 lg:py-32 rounded-xl">
        <div className="lg:col-start-2 rounded-xl overflow-hidden">
          <Image src={product.image} alt={product.productName} />
        </div>
        <div className="flex flex-col">
          <ProductDesc productName={product.productName} price={product.price} type={product.type} />
          <div className="grid lg:grid-cols-2 my-4 gap-5 lg:mb-5">
            <Colors />
            <Sizes />
          </div>
          <div className="flex gap-2">
            <div className="lg:w-[85%] " onClick={handleAddToOrder}>
              <button href="#" id={id} className="flex gap-2 items-center w-full justify-center p-4 text-white bg-dark hover:bg-black rounded-xl text-center">
                <RiShoppingBag3Line size={24} color="white" />
                <h1 className="text-md">Add to cart</h1>
              </button>
            </div>
            <div className="lg:w-[15%]">
              <button href="#" className="flex items-center w-full justify-center p-4  text-white bg-neutral-200 hover:bg-neutral-300 rounded-xl text-center">
                <RiHeartLine size={24} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-lg lg:text-xl font-[#0d0d0d] font-bold uppercase text-center ">
        you may <span className="outline-black">also like</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:place-content-center gap-5 py-10 font-urbanist px-5 lg:px-20 lg:py-10 rounded-xl">
        {shuffledProducts.map((product) => (
          <Card key={product.id} productName={product.productName} type={product.type} price={product.price} image={product.image} id={product.id} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Product;
