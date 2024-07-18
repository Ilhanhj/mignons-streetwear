import { useEffect } from "react";
import Essentials from "../components/Fragments/Essentials";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const EssentialsPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | ESSENTIALS";
  }, []);

  return (
    <LandingPageLayouts>
      <Essentials />
    </LandingPageLayouts>
  );
};

export default EssentialsPage;
