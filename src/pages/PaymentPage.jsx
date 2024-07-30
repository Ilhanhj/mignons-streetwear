import { useEffect } from "react";
import LandingPageLayouts from "../components/Layouts/LandingPageLayouts";
import Payment from "../components/Fragments/Payment";

function PaymentPage() {
  useEffect(() => {
    document.title = "MIGNONS";
  }, []);

  return (
    <LandingPageLayouts>
      <Payment />
    </LandingPageLayouts>
  );
}

export default PaymentPage;
