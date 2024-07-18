import Icon from "./Icon";
import List from "./List";

function NavbarProduct() {
  return (
    <div className="w-full lg:px-5 lg:p-4 font-poppins">
      <div className="flex items-center justify-center lg:justify-between p-5 bg-transparent">
        <List />
        <Icon />
      </div>
    </div>
  );
}

export default NavbarProduct;
