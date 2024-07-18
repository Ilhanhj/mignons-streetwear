import { useEffect } from "react";
import Accessories from "../components/Fragments/Accessories";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";

const AccessoriesPage = () => {
  useEffect(() => {
    document.title = "MIGNONS | ACCESSORIES";
  }, []);

  return (
    <LandingPageLayouts>
      <Accessories />
    </LandingPageLayouts>
  );
};

export default AccessoriesPage;
