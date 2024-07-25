/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Tops from "../components/Fragments/Tops";

function TopsPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    document.title = "MIGNONS ";
  }, []);

  return (
    <LandingPageLayouts>
      <Tops />
    </LandingPageLayouts>
  );
}

export default TopsPage;
