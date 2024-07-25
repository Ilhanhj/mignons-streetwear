/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Outerwears from "../components/Fragments/Outerwears";

function OuterwearsPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    document.title = "MIGNONS ";
  }, []);

  return (
    <LandingPageLayouts>
      <Outerwears />
    </LandingPageLayouts>
  );
}

export default OuterwearsPage;
