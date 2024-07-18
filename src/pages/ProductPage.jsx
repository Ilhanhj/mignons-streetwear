import Product from "../components/Fragments/Product";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

import { products } from "../AllData";
import { useEffect } from "react";
const ProductPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | PRODUCTS";
  }, []);

  const filteredProducts = products.filter((product) => product.type !== "RUNWAY");

  return (
    <LandingPageLayouts>
      <Product otherProduct={filteredProducts} />
    </LandingPageLayouts>
  );
};

export default ProductPage;
