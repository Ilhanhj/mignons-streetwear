import { Toaster } from "react-hot-toast";

/* eslint-disable react/prop-types */
function LandingPageLayouts({ children }) {
  return (
    <div className="w-full z-10 font-urbanist">
      <Toaster />
      {children}
    </div>
  );
}

export default LandingPageLayouts;
