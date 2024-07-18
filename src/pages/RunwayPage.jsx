import { useEffect } from "react";
import Runway from "../components/Fragments/Runway";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const RunwayPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | RUNWAY";
  }, []);

  return (
    <LandingPageLayouts>
      <Runway />
    </LandingPageLayouts>
  );
};

export default RunwayPage;
