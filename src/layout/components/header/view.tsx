import { Navbar } from "./components/navbar";
import { ShoppingCart } from "./components/shoppingCart";
import { UserInfo } from "./components/userInfo";

export const Header = () => {
  return (
    <div>
      <Navbar />
      <ShoppingCart />
      <UserInfo />
    </div>
  );
};
