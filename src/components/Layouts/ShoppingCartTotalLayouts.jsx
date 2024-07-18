/* eslint-disable react/prop-types */
import Navbar from "../Elements/Navbar";

const ShoppingCartTotalLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50 pt-10">
        <div className="relative z-10 w-full px-4 mx-auto max-w-7xl md:px-5 lg-6 font-urbanist">{children}</div>
      </section>
    </>
  );
};

export default ShoppingCartTotalLayouts;
