/* eslint-disable react/prop-types */
import { RiArrowDropRightLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function TimelineList({ path, fill }) {
  const location = useLocation();

  return (
    <h1 className={`flex gap-0 lg:gap-2 items-center ${location.pathname == path ? "text-[#0d0d0d] font-semibold" : "text-neutral-500 "}`}>
      {fill} <RiArrowDropRightLine size={30} color="black" />
    </h1>
  );
}

export default TimelineList;
