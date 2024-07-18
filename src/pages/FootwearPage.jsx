import { useEffect } from "react";
import Footwear from "../components/Fragments/Footwear";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const FootwearPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | FOOTWEAR";
  }, []);
  return (
    <LandingPageLayouts>
      <Footwear />
    </LandingPageLayouts>
  );
};

export default FootwearPage;
