/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import LandingPages from "../components/Fragments/LandingPages";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import getProducts from "../service/product.service";

function LandingPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    document.title = "MIGNONS ";
  }, []);

  // useEffect(() => {
  //   getProducts((data) => {
  //     setProducts(data);
  //   });
  // });

  return (
    <LandingPageLayouts>
      <LandingPages />
    </LandingPageLayouts>
  );
}

export default LandingPage;
