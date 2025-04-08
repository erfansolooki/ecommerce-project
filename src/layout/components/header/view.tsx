import { Navbar } from "./components/navbar";
import { ShoppingCart } from "./components/shoppingCart";
import { UserInfo } from "./components/userInfo";

export const Header = () => {
  return (
    <div className="flex fixed py-4 px-2 top-0 right-0 left-0 justify-between">
      <UserInfo />

      <div className="flex items-center">
        <ShoppingCart />

        {window.innerWidth < 400 ? <Navbar /> : <></>}
      </div>
    </div>
  );
};
