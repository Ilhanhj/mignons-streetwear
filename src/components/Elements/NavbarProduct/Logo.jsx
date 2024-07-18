import { RiShirtFill } from "react-icons/ri";

function Logo() {
  return (
    <div className="flex items-end">
      <RiShirtFill size={42} style={{ fill: "black" }} />
      <a href="#" className="text-2xl text-dark">
        Hanouse
      </a>
    </div>
  );
}

export default Logo;
