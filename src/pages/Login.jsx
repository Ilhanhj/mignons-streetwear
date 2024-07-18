import { useEffect } from "react";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function LoginPage() {
  useEffect(() => {
    document.title = "MIGNONS | LOGIN";
  }, []);
  return (
    <AuthLayouts>
      <FormLogin />
    </AuthLayouts>
  );
}

export default LoginPage;
