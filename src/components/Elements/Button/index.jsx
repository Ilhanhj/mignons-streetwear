/* eslint-disable react/prop-types */
function Button({ bg = "bg-lime-500", text = "text-[#0d0d0d]", fill = "fill", type = "button" }) {
  return (
    <button className={`w-full p-3 lg:p-4 ${bg} ${text} text-sm lg:text-md font-bold rounded-xl border-neutral-300 border hover:opacity-75`} type={type}>
      {fill}
    </button>
  );
}

export default Button;
