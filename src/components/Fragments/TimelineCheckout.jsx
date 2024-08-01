/* eslint-disable react/prop-types */
import TimelineList from "../Elements/TimelineList";

function TimelineCheckout() {
  return (
    <div className="flex justify-center px-2 py-4 lg:px-0 lg:py-4">
      <TimelineList fill="Cart" path="/Cart" />
      <TimelineList fill="Shipping" path="/Shipping" />
      <TimelineList fill="Payment" path="/Payment" />
      <TimelineList fill="Confirmation" path="/Confirmation" />
    </div>
  );
}

export default TimelineCheckout;
