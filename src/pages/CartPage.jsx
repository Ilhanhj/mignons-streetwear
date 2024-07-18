/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ShoppingCartTotal from "../components/Fragments/ShoppingCartTotal";
import ShoppingCartTotalLayouts from "../components/Layouts/ShoppingCartTotalLayouts";
import getProducts from "../service/product.service";

/* eslint-disable react/no-unknown-property */
const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <ShoppingCartTotalLayouts>
      <ShoppingCartTotal products={products} />
    </ShoppingCartTotalLayouts>
  );
};

export default CartPage;
