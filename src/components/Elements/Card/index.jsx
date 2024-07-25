import PropTypes from "prop-types";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../../redux/slices/orderSlice";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

function Card({ image, price, id, productName, type }) {
  const dispatch = useDispatch();

  function handleAddToOrder() {
    dispatch(
      addToOrder({
        id: id,
        quantity: 1,
      })
    );
  }

  // Debugging
  console.log(`Product ID: ${id}, Price: ${price}`);

  // Validation
  const validatedPrice = isNaN(price) ? 0 : price;

  return (
    <div className="flex flex-col rounded-xl overflow-hidden gap-1">
      <div className="group text-md cursor-pointer flex-justify-between">
        <div className="flex flex-col">
          <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`}>
            <img className="w-full group-hover:opacity-50" src={image} alt="product" />
          </Link>
        </div>
        <div className="flex justify-between pt-2">
          <div className="space-y-1 flex">
            <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`}>
              <h1 className="text-sm text-dark group-hover:text-neutral-500 ">{type}</h1>
              <h1 className="text-sm font-semibold text-dark group-hover:text-neutral-500 ">{productName.substring(0, 21)}</h1>
              <h1 className="font-normal text-sm text-neutral-400">Price</h1>
              <h1 className="text-sm font-semibold text-dark group-hover:text-neutral-500 ">$ {validatedPrice}</h1>
            </Link>
          </div>
          <div className="flex items-end">
            <button href="#" id={id} className="flex items-center p-5 lg:p-4 h-[35%] lg:h-[60%] text-white bg-dark hover:bg-black rounded-xl" onClick={handleAddToOrder}>
              <RiShoppingCart2Line size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  productName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;
