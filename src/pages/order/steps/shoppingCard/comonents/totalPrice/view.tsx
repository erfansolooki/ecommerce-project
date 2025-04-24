import { TbCurrencyDollar } from "react-icons/tb";
import { ITotalPrice } from "./types";

export const TotalPrice = ({ totalPrice }: ITotalPrice) => {
  return (
    <div
      className="bg-[#232327] rounded-2xl p-4 flex justify-between items-center
      shadow-md"
    >
      <div className="text-[#C4C4C4]">Total</div>

      <div className="flex items-center text-white">
        <span>
          <TbCurrencyDollar />
        </span>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
};
