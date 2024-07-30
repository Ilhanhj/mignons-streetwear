import mignonsLogo from "/src/assets/logo-1.png";

function Footer() {
  return (
    <div className="w-full pt-20 bottom-0">
      <div className="bg-transparent w-full p-10">
        <div className="flex flex-col text-center lg:justify-between lg:px-11 lg:text-start gap-5 lg:flex lg:flex-row">
          <div className="flex flex-col gap-2 lg:max-w-md">
            <div className="flex justify-center lg:justify-center ">
              <img src={mignonsLogo} alt="" className="w-[20%] lg:w-full object-cover" />{" "}
            </div>
          </div>
          <div className="flex gap-5 justify-center lg:justify-between">
            <div className="flex gap-5">
              <a href="#" className="text-sm mt-1 text-neutral-500 hover:text-[#0d0d0d] transition-all duration-75 flex items-center gap-1 uppercase">
                contact
              </a>
              <a href="#" className="text-sm mt-1 text-neutral-500 hover:text-[#0d0d0d] transition-all duration-75 flex items-center gap-1 uppercase">
                client services
              </a>
              <a href="#" className="text-sm mt-1 text-neutral-500 hover:text-[#0d0d0d] transition-all duration-75 flex items-center gap-1 uppercase">
                socials
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
