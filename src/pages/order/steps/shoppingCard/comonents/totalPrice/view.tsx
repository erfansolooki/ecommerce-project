import { TbCurrencyDollar } from "react-icons/tb";

// box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

export const TotalPrice = () => {
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
        <span>1000</span>
      </div>
    </div>
  );
};
