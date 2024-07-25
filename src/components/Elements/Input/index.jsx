/* eslint-disable react/prop-types */
function Input({ type, placeholder, id, name }) {
  return <input type={type} placeholder={placeholder} id={id} className={`p-3 lg:p-4 rounded-xl border-neutral-400 border bg-neutral-200 w-full`} name={name} />;
}

export default Input;
