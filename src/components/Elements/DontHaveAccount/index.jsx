function DontHaveAccount() {
  return (
    <p className="text-sm text-center text-slate-400 lg:pb-10">
      Don`t have an account ?{" "}
      <a href="/register" className="text-black">
        Register
      </a>
    </p>
  );
}

export default DontHaveAccount;
