/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useMemo } from "react";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import Card from "../Elements/Card";
import { useParams } from "react-router-dom";
import { products } from "../../AllData";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/slices/orderSlice";
import toast from "react-hot-toast";
import { RiHeartLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";

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
    // notify();
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
          <img src={product.image} alt={product.productName} className="w-full" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-3">
            <p className="text-sm">{product.type}</p>
            <h1 className="font-bold text-2xl lg:text-3xl">{product.productName}</h1>
            <p className="text-3xl">$ {product.price}</p>
            <div className="flex items-center">
              <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
              <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
              <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
              <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500">
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-600 dark:hover:text-yellow-500"
              >
                <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-neutral-400">
              The California blazer is impeccably tailored in Italy from an iridescent virgin wool blend in a jacquard geometric design. The double-breasted style is voluminous and elongated, which allows the piece to function as outerwear
              with ample room for layering. Additional details include a cupro lining, drop notch lapel, side pockets, and horn button closure. A Fear of God leather label is stitched on the sleeve.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 my-4 gap-5 lg:mb-5">
            <div className="flex flex-col">
              <select name="color" id="color" className="cursor-pointer border p-4 rounded-xl">
                <option value="Black">Black</option>
                <option value="Beige">Beige</option>
                <option value="Gray">Gray</option>
              </select>
              <p className="text-sm text-neutral-400">Colors</p>
            </div>
            <div className="flex flex-col">
              <select name="size" id="size" className="cursor-pointer border p-4 rounded-xl">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <p className="text-sm text-neutral-400">Size</p>
            </div>
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
