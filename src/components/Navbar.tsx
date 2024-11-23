import { ShoppingBasket } from "lucide-react";
interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-3 py-1 text-white font-inknut border-b border-gray-300">
      <div className="flex gap-3">
        <div>HOME</div>
        <div>MENU</div>
        <div>ABOUT US</div>
        <div>CONTACT</div>
      </div>
      <div className="mr-5 tracking-[3px] text-base">
        District <span className="text-orange-600 text-xl">Silog</span>
      </div>
      <div className="flex">
        <strong className="pr-1">MY CART</strong>
        <ShoppingBasket className="text-orange-600" />
      </div>
    </div>
  );
};

export default Navbar;
