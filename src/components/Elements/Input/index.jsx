/* eslint-disable react/prop-types */
function Input({ type, placeholder, id, name }) {
  return <input type={type} placeholder={placeholder} id={id} className={`p-3 rounded-xl border-white border bg-neutral-200`} name={name} />;
}

export default Input;
