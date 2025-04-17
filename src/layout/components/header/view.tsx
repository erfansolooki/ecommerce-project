import { Navbar } from "./components/navbar";
import { Searchbar } from "./components/searchbar";
import { ShoppingCart } from "./components/shoppingCart";
import { UserInfo } from "./components/userInfo";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <>
      <div className="flex fixed py-4 px-2 lg:px-8 top-0 right-0 left-0 justify-between">
        <UserInfo />

        <div className="flex items-center">
          {window.innerWidth > 400 && (
            <CiSearch size={24} fill="#fff" className="mx-2.5" />
          )}

          <ShoppingCart />

          {window.innerWidth > 400 ? <Navbar /> : <></>}
        </div>
      </div>

      {window.innerWidth < 400 && <Searchbar />}
    </>
  );
};
