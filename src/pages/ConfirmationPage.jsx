import { useEffect } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Confirmation from "../components/Fragments/Confirmation";

function ConfirmationPage() {
  useEffect(() => {
    document.title = "MIGNONS";
  }, []);

  return (
    <LandingPageLayouts>
      <Confirmation />
    </LandingPageLayouts>
  );
}

export default ConfirmationPage;
