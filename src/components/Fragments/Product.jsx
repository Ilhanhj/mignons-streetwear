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

const Product = ({ otherProduct }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const dispatch = useDispatch();

  function handleAddToOrder() {
    dispatch(
      addToOrder({
        id: parseInt(id),
        quantity: 1,
      })
    );
    notify();
  }

  const notify = () => toast.success("Item has been added to the cart");

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
            <h1 className="text-2xl lg:text-3xl">{product.productName}</h1>
            <p className="text-sm">$ {product.price}</p>
            <p className="text-sm text-neutral-400">
              The California blazer is impeccably tailored in Italy from an iridescent virgin wool blend in a jacquard geometric design. The double-breasted style is voluminous and elongated, which allows the piece to function as outerwear
              with ample room for layering. Additional details include a cupro lining, drop notch lapel, side pockets, and horn button closure. A Fear of God leather label is stitched on the sleeve.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 my-4 gap-5 lg:mb-20">
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
          <div className="w-full" onClick={handleAddToOrder}>
            <button href="#" id={id} className="flex items-center w-full justify-center p-4 text-white bg-dark hover:bg-black rounded-xl text-center">
              Add to Cart
            </button>
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
