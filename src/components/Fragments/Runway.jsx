/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import CardRunway from "../Elements/CardRunway";
import { products } from "../../AllData";

const Runway = () => {
  const filteredProducts = products.filter((product) => product.type === "RUNWAY");

  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-24 font-urbanist px-5 lg:px-20 lg:py-32 ">
        {filteredProducts.map((product) => {
          return <CardRunway key={product.id} type={product.type} image={product.image} id={product.id} />;
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Runway;
