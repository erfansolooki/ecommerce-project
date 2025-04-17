import { PiShoppingCart } from "react-icons/pi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../helpers/features/store";

export const ShoppingCart = () => {
  const { inShoppingCartCount } = useSelector((state: RootState) => state.app);
  return (
    <div
      className="cursor-pointer relative bg-[#232327] w-12 h-12 rounded-full flex justify-center
     items-center p-1.5 md:mx-4"
    >
      {inShoppingCartCount > 0 ? (
        <div className="absolute -top-2 -right-1 bg-[#F2655D] rounded-full w-5 h-5 flex items-center justify-center p-1 text-[12px]">
          {inShoppingCartCount}
        </div>
      ) : (
        <></>
      )}

      <div className="w-5 h-5">
        <PiShoppingCart size={20} />
      </div>
    </div>
  );
};
