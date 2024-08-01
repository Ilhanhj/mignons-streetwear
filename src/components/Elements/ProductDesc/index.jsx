/* eslint-disable react/prop-types */
import Stars from "../Stars";

function ProductDesc({ type, productName, price }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm">{type}</p>
      <h1 className="font-bold text-2xl lg:text-3xl">{productName}</h1>
      <p className="text-3xl">$ {price}</p>
      <Stars />
      <p className="text-sm text-neutral-400">
        The California blazer is impeccably tailored in Italy from an iridescent virgin wool blend in a jacquard geometric design. The double-breasted style is voluminous and elongated, which allows the piece to function as outerwear with
        ample room for layering. Additional details include a cupro lining, drop notch lapel, side pockets, and horn button closure. A Fear of God leather label is stitched on the sleeve.
      </p>
    </div>
  );
}

export default ProductDesc;
