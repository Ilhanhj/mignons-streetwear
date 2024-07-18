import { useEffect } from "react";
import Athletics from "../components/Fragments/Athletics";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const AthleticsPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | ATHLETICS";
  }, []);

  return (
    <LandingPageLayouts>
      <Athletics />
    </LandingPageLayouts>
  );
};

export default AthleticsPage;
