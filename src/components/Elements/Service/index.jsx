/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Service({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-neutral-300">
        <img src={icon} alt="" className="w-2/5 lg:w-1/2" />
      </div>
      <div className="flex flex-col pt-3 text-center">
        <h1 className="font-bold uppercase text-md text-dark">{title}</h1>
        <p className="text-neutral-500 text-md">{description}</p>
      </div>
    </div>
  );
}

export default Service;
