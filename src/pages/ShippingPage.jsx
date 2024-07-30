import { useEffect } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Shipping from "../components/Fragments/Shipping";

function ShippingPage() {
  useEffect(() => {
    document.title = "MIGNONS";
  }, []);

  return (
    <LandingPageLayouts>
      <Shipping />
    </LandingPageLayouts>
  );
}

export default ShippingPage;
