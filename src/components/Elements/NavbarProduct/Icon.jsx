import { RiArrowRightUpLine } from "react-icons/ri";

function Icon() {
  return (
    <div className="items-center gap-5 lg:flex">
      <div href="#" className="flex items-center p-2 lg:p-4 text-white rounded-full bg-dark">
        <RiArrowRightUpLine size={28} color="white" />
      </div>
    </div>
  );
}

export default Icon;
