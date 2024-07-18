const CartTotal = () => {
  return (
    <div className="w-full max-w-3xl col-span-12 py-24 mx-auto xl:col-span-4 bg-gray-50 max-xl:px-6 xl:max-w-lg lg:pl-8">
      <h2 className="pb-8 text-3xl font-bold leading-10 text-black border-b border-gray-300 font-manrope">Order Summary</h2>
      <div className="mt-8">
        <div className="flex items-center justify-between pb-6">
          <p className="text-lg font-normal leading-8 text-black">3 Items</p>
          <p className="text-lg font-medium leading-8 text-black">$485.00</p>
        </div>
        <form>
          <div className="flex items-center justify-between py-8">
            <p className="text-xl font-medium leading-8 text-black">Total</p>
            <p className="text-xl font-semibold leading-8 text-indigo-600">$485.00</p>
          </div>
          <button className="w-full px-6 py-3 text-lg font-semibold text-center text-white transition-all duration-500 bg-indigo-600 rounded-xl hover:bg-indigo-700">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CartTotal;
