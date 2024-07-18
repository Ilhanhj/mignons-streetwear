import { Fragment } from "react";
import { RiGoogleLine, RiGithubLine, RiFacebookBoxLine } from "react-icons/ri";

function LoginSocial() {
  return (
    <Fragment>
      <p className="text-[#0d0d0d] font-semibold lowercase text-center py-3 text-sm font-urbanist">Or Sign up with</p>
      <div className="flex justify-center gap-4 py-5 font-urbanist">
        <button className="p-2 rounded-xl bg-neutral-200 text-[#0d0d0d] font-bold">
          <RiGoogleLine size={28} />
        </button>
        <button className="p-2 rounded-xl bg-neutral-200 text-[#0d0d0d] font-bold">
          <RiFacebookBoxLine size={28} />
        </button>
        <button className="p-2 rounded-xl bg-neutral-200 text-[#0d0d0d] font-bold">
          <RiGithubLine size={28} />
        </button>
      </div>
    </Fragment>
  );
}

export default LoginSocial;
