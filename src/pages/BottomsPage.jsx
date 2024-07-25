/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Bottoms from "../components/Fragments/Bottoms";

function BottomsPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    document.title = "MIGNONS ";
  }, []);

  return (
    <LandingPageLayouts>
      <Bottoms />
    </LandingPageLayouts>
  );
}

export default BottomsPage;
