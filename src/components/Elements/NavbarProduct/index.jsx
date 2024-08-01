import { Fragment } from "react";
import List from "./List";

function NavbarProduct() {
  return (
    <Fragment>
      <div className=" flex justify-between items-center pt-5 px-5 lg:px-20 lg:pt-10 ">
        <h1 className="text-2xl lg:text-4xl font-[#0d0d0d] font-bold uppercase">
          shop our <span className="outline-black">best collection</span>
        </h1>
      </div>
      <div className="w-full lg:px-16 font-poppins">
        <div className="flex items-center justify-center lg:justify-between p-5 bg-transparent">
          <List />
        </div>
      </div>
    </Fragment>
  );
}

export default NavbarProduct;
