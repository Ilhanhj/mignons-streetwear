/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function CardRunway({ image, id, type }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden gap-1">
      <div className="group text-md">
        <img className="w-full group-hover:opacity-50" src={image} alt="row-1-1" />
      </div>
    </div>
  );
}

export default CardRunway;
