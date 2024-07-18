import { useEffect } from "react";
import Mignons from "../components/Fragments/Mignons";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const MignonsPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | MIGNONS";
  }, []);

  return (
    <LandingPageLayouts>
      <Mignons />
    </LandingPageLayouts>
  );
};

export default MignonsPage;
