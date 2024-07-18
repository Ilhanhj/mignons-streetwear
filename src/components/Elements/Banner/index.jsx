/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "../Image";

const Banner = ({ src, alt, link }) => {
  return (
    <div className="w-full p-1 transition-all duration-75 bg-gradient-to-br from-neutral-400 to-neutral-50 rounded-xl hover:bg-neutral-50">
      <Link to={link}>
        <Image src={src} alt={alt} />
      </Link>
    </div>
  );
};

export default Banner;
