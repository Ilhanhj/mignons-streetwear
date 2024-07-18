/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import Card from "../Elements/Card";
import { products } from "../../AllData";

const Mignons = () => {
  const filteredProducts = products.filter((product) => product.type === "MIGNONS");

  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-24 font-urbanist px-5 lg:px-20 lg:py-32 ">
        {filteredProducts.map((product) => {
          return <Card key={product.id} productName={product.productName} type={product.type} price={product.price} image={product.image} id={product.id} />;
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Mignons;
