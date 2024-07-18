import { Link } from "react-router-dom";
import mignonsLogo from "/src/assets/logo-1.png";

function Logo() {
  return (
    <div className="flex items-end ">
      <Link onClick={() => window.scrollTo(0, 0)} to={`/`}>
        <div className="flex items-center">
          <img src={mignonsLogo} alt="" className="w-full object-cover" />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
