/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiAccountPinCircleLine } from "react-icons/ri";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Icon({ position = "block" }) {
  const order = useSelector((store) => store.order.items);
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    const newTotalOrder = order.reduce((acc, item) => acc + item.quantity, 0);
    setTotalOrder(newTotalOrder);

    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <div className="flex gap-5">
      <div className={`items-center ${position} gap-5 lg:flex`}>
        <span className="lg:text-xs absolute flex justify-center items-center lg:w-5 w-6 lg:h-5 h-6 p-1 mb-5 ms-4 text-white bg-red-500 rounded-full">{totalOrder}</span>
        <RiShoppingBagLine size={28} />
      </div>
      <div className={`items-center ${position} gap-5 lg:flex`}>
        <Link to={"/login"}>
          <RiAccountPinCircleLine size={28} />
        </Link>
      </div>
    </div>
  );
}

export default Icon;
