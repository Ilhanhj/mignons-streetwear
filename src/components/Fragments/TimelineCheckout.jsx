import { RiArrowDropRightLine } from "react-icons/ri";

function TimelineCheckout() {
  return (
    <div className="flex justify-center px-2 py-4 lg:px-0 lg:py-4">
      <h1 className="flex gap-0 lg:gap-2 text-neutral-400 items-center">
        Cart
        <RiArrowDropRightLine size={30} color="black" />
      </h1>
      <h1 className={`flex gap-0 lg:gap-2 items-center ${location.pathname == "/shipping" ? "text-[#0d0d0d] font-semibold" : "text-neutral-500 "}`}>
        Shipping
        <RiArrowDropRightLine size={30} color="black" />
      </h1>
      <h1 className={`flex gap-0 lg:gap-2 items-center ${location.pathname == "/Payment" ? "text-[#0d0d0d] font-semibold" : "text-neutral-500 "}`}>
        Payment
        <RiArrowDropRightLine size={30} color="black" />
      </h1>
      <h1 className={`flex gap-0 lg:gap-2 items-center ${location.pathname == "/Confirmation" ? "text-[#0d0d0d] font-semibold" : "text-neutral-500 "}`}>Confirmation</h1>
    </div>
  );
}

export default TimelineCheckout;
