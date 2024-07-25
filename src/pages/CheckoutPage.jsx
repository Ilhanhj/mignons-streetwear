import { useEffect } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Checkout from "../components/Fragments/Checkout";

function CheckoutPage() {
  useEffect(() => {
    document.title = "MIGNONS";
  }, []);

  return (
    <LandingPageLayouts>
      <Checkout />
    </LandingPageLayouts>
  );
}

export default CheckoutPage;
